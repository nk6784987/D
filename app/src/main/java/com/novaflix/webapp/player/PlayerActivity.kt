package com.novaflix.webapp.player

import android.net.Uri
import android.os.Bundle
import android.util.Log
import android.view.View
import android.view.WindowManager
import android.widget.MediaController
import android.widget.ProgressBar
import android.widget.TextView
import android.widget.VideoView
import androidx.appcompat.app.AppCompatActivity
import androidx.media3.common.MediaItem
import androidx.media3.common.MimeTypes
import androidx.media3.common.PlaybackException
import androidx.media3.common.Player
import androidx.media3.datasource.okhttp.OkHttpDataSource
import androidx.media3.exoplayer.ExoPlayer
import androidx.media3.exoplayer.dash.DashMediaSource
import androidx.media3.exoplayer.hls.HlsMediaSource
import androidx.media3.exoplayer.source.MediaSource
import androidx.media3.exoplayer.source.ProgressiveMediaSource
import androidx.media3.ui.PlayerView
import okhttp3.OkHttpClient
import java.util.concurrent.TimeUnit

class PlayerActivity : AppCompatActivity() {

    companion object {
        const val EXTRA_URL = "url"
        const val EXTRA_TITLE = "title"
        const val EXTRA_SUBTITLE = "subtitle"
        const val EXTRA_IS_LIVE = "is_live"
        private const val TAG = "NovaFlixPlayer"
        private const val USER_AGENT = "VLC/3.0.20 LibVLC/3.0.20"
    }

    private lateinit var exoPlayerView: PlayerView
    private lateinit var fallbackVideoView: VideoView
    private lateinit var loadingSpinner: ProgressBar
    private lateinit var errorText: TextView
    private var exoPlayer: ExoPlayer? = null
    private var hasFallenBack = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        setContentView(com.novaflix.webapp.R.layout.activity_player)

        val url = intent.getStringExtra(EXTRA_URL)
        val title = intent.getStringExtra(EXTRA_TITLE) ?: ""
        val subtitle = intent.getStringExtra(EXTRA_SUBTITLE) ?: ""
        val isLive = intent.getBooleanExtra(EXTRA_IS_LIVE, false)

        exoPlayerView = findViewById(com.novaflix.webapp.R.id.exoPlayerView)
        fallbackVideoView = findViewById(com.novaflix.webapp.R.id.fallbackVideoView)
        loadingSpinner = findViewById(com.novaflix.webapp.R.id.loadingSpinner)
        errorText = findViewById(com.novaflix.webapp.R.id.errorText)

        findViewById<TextView>(com.novaflix.webapp.R.id.titleText).text = title
        findViewById<TextView>(com.novaflix.webapp.R.id.subtitleText).text = subtitle
        findViewById<View>(com.novaflix.webapp.R.id.btnBack).setOnClickListener { finish() }

        if (url.isNullOrBlank()) {
            showError()
            return
        }

        startExoPlayer(url, isLive)
    }

    private fun startExoPlayer(url: String, isLive: Boolean) {
        val okHttpClient = OkHttpClient.Builder()
            .connectTimeout(15, TimeUnit.SECONDS)
            .readTimeout(15, TimeUnit.SECONDS)
            .build()

        val httpDataSourceFactory = OkHttpDataSource.Factory(okHttpClient)
            .setUserAgent(USER_AGENT)

        val player = ExoPlayer.Builder(this).build()
        exoPlayer = player
        exoPlayerView.player = player
        exoPlayerView.useController = true

        val mediaItemBuilder = MediaItem.Builder().setUri(url)
        val lower = url.lowercase()
        when {
            lower.contains(".m3u8") -> mediaItemBuilder.setMimeType(MimeTypes.APPLICATION_M3U8)
            lower.contains(".mpd") -> mediaItemBuilder.setMimeType(MimeTypes.APPLICATION_MPD)
        }
        val mediaItem = mediaItemBuilder.build()

        val mediaSource: MediaSource = when {
            lower.contains(".m3u8") || isLive ->
                HlsMediaSource.Factory(httpDataSourceFactory).createMediaSource(mediaItem)
            lower.contains(".mpd") ->
                DashMediaSource.Factory(httpDataSourceFactory).createMediaSource(mediaItem)
            else ->
                ProgressiveMediaSource.Factory(httpDataSourceFactory).createMediaSource(mediaItem)
        }

        player.addListener(object : Player.Listener {
            override fun onPlaybackStateChanged(state: Int) {
                if (state == Player.STATE_READY) {
                    loadingSpinner.visibility = View.GONE
                }
            }

            override fun onPlayerError(error: PlaybackException) {
                Log.w(TAG, "ExoPlayer error, falling back to MediaPlayer: ${error.message}")
                fallBackToMediaPlayer(url)
            }
        })

        player.setMediaSource(mediaSource)
        player.prepare()
        player.playWhenReady = true
    }

    private fun fallBackToMediaPlayer(url: String) {
        if (hasFallenBack) {
            showError()
            return
        }
        hasFallenBack = true

        exoPlayer?.release()
        exoPlayer = null
        exoPlayerView.visibility = View.GONE

        fallbackVideoView.visibility = View.VISIBLE
        fallbackVideoView.setMediaController(MediaController(this).apply {
            setAnchorView(fallbackVideoView)
        })
        fallbackVideoView.setOnPreparedListener {
            loadingSpinner.visibility = View.GONE
            fallbackVideoView.start()
        }
        fallbackVideoView.setOnErrorListener { _, what, extra ->
            Log.w(TAG, "MediaPlayer fallback also failed: what=$what extra=$extra")
            showError()
            true
        }
        fallbackVideoView.setVideoURI(Uri.parse(url))
    }

    private fun showError() {
        loadingSpinner.visibility = View.GONE
        errorText.visibility = View.VISIBLE
    }

    override fun onPause() {
        super.onPause()
        exoPlayer?.pause()
        if (fallbackVideoView.isPlaying) fallbackVideoView.pause()
    }

    override fun onDestroy() {
        super.onDestroy()
        exoPlayer?.release()
        exoPlayer = null
    }
}
