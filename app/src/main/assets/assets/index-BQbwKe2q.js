// NovaFlix Application Engine
(function () {
  'use strict';

  // Reliable media catalogue with video streams for ExoPlayer
  const MEDIA_DATABASE = [
    {
      id: 'movie-1',
      title: 'Tears of Steel',
      category: 'movies',
      genre: 'Sci-Fi / Cyberpunk',
      rating: '8.8',
      year: '2024',
      duration: '12m',
      isLive: false,
      quality: '4K UHD',
      badge: 'TRENDING',
      backdrop: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&q=80',
      poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80',
      description: 'In a dystopian future, a group of rebel warriors and scientists attempt to stage a crucial event in the past using robotics and neural interfaces.',
      streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      cast: 'Derek de Lint, Sergio Hasselbaink, Rogier Schippers'
    },
    {
      id: 'movie-2',
      title: 'Cyberpunk Chronicles',
      category: 'movies',
      genre: 'Action / Sci-Fi',
      rating: '9.1',
      year: '2025',
      duration: '1h 45m',
      isLive: false,
      quality: '4K HDR',
      badge: 'POPULAR',
      backdrop: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&q=80',
      poster: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80',
      description: 'A rogue hacker uncovers an underground syndicate controlling quantum intelligence networks across neo-Tokyo.',
      streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      cast: 'Kenji Sato, Elena Rostova, Marcus Vance'
    },
    {
      id: 'movie-3',
      title: 'Sintel: Guardian Quest',
      category: 'movies',
      genre: 'Fantasy / Adventure',
      rating: '8.5',
      year: '2024',
      duration: '15m',
      isLive: false,
      quality: '1080p',
      badge: 'HD',
      backdrop: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80',
      poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80',
      description: 'A lonely young warrior girl searches for a baby dragon companion taken away by an ancient predator across hazardous winter peaks.',
      streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      cast: 'Halina Reijn, Thom Hoffman'
    },
    {
      id: 'movie-4',
      title: 'Cosmos: Galactic Odyssey',
      category: 'movies',
      genre: 'Sci-Fi / Space',
      rating: '8.9',
      year: '2025',
      duration: '1h 50m',
      isLive: false,
      quality: '4K UHD',
      badge: 'NEW',
      backdrop: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
      poster: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80',
      description: 'Deep space explorers travel through an uncharted gravitational rift only to encounter echoes of an extinct cosmic civilization.',
      streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      cast: 'Sarah Connor, David Bowman, Isaac Clarke'
    },
    {
      id: 'series-1',
      title: 'Shadow Protocol',
      category: 'series',
      genre: 'Thriller / Espionage',
      rating: '9.3',
      year: 'Season 1',
      duration: '8 Episodes',
      isLive: false,
      quality: '4K UHD',
      badge: 'TOP RATED',
      backdrop: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&q=80',
      poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80',
      description: 'When an elite intelligence operative is framed for a global blackout, she must outrun assassins while uncovering a conspiracy inside her own agency.',
      streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
      episodes: [
        { ep: 1, title: 'Episode 1: Zero Protocol', duration: '45m', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4' },
        { ep: 2, title: 'Episode 2: The Blackout', duration: '48m', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
        { ep: 3, title: 'Episode 3: Ghost Cipher', duration: '52m', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
        { ep: 4, title: 'Episode 4: Redacted Truth', duration: '44m', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' }
      ]
    },
    {
      id: 'series-2',
      title: 'Neon Tokyo 2099',
      category: 'series',
      genre: 'Anime / Action',
      rating: '9.0',
      year: 'Season 2',
      duration: '12 Episodes',
      isLive: false,
      quality: '1080p 60fps',
      badge: 'ANIME',
      backdrop: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=1200&q=80',
      poster: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500&q=80',
      description: 'In an augmented neon metropolis, underground street racers pilot cybernetic rigs to challenge the mega-corporations holding the city hostage.',
      streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
      episodes: [
        { ep: 1, title: 'Episode 1: Neon Ignition', duration: '24m', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4' },
        { ep: 2, title: 'Episode 2: Midnight Drift', duration: '24m', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4' },
        { ep: 3, title: 'Episode 3: Cyber Overload', duration: '25m', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4' }
      ]
    },
    {
      id: 'live-1',
      title: 'Global News 24/7',
      category: 'live',
      genre: 'Live News / World',
      rating: 'LIVE',
      year: 'HD Broadcast',
      duration: '24/7 Stream',
      isLive: true,
      quality: 'LIVE HD',
      badge: 'LIVE',
      backdrop: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80',
      poster: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500&q=80',
      description: 'Continuous real-time world headlines, financial markets, breaking stories and live international analysis.',
      streamUrl: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8'
    },
    {
      id: 'live-2',
      title: 'Red Bull Extreme Sports',
      category: 'live',
      genre: 'Live Sports / Action',
      rating: 'LIVE',
      year: 'Live Event',
      duration: '24/7 Stream',
      isLive: true,
      quality: '1080p LIVE',
      badge: 'LIVE',
      backdrop: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1200&q=80',
      poster: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=500&q=80',
      description: 'Adrenaline-packed live extreme sports, downhill biking, cliff diving, motocross and world championships.',
      streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
    },
    {
      id: 'live-3',
      title: 'Space & Science Live',
      category: 'live',
      genre: 'Science / Astronomy',
      rating: 'LIVE',
      year: 'Orbital Feed',
      duration: '24/7 Stream',
      isLive: true,
      quality: '4K LIVE',
      badge: 'LIVE',
      backdrop: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80',
      poster: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&q=80',
      description: 'High-definition live camera feeds from orbital space stations, telescope observations, and deep cosmos exploration.',
      streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      id: 'movie-5',
      title: 'The Outlaw Highway',
      category: 'movies',
      genre: 'Crime / Drama',
      rating: '8.4',
      year: '2024',
      duration: '1h 55m',
      isLive: false,
      quality: '1080p',
      badge: 'HD',
      backdrop: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
      poster: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=80',
      description: 'Two brothers on opposite sides of the law collide during a high-stakes heist across the sun-scorched desert plains.',
      streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
      cast: 'Jake Gyllenhaal, Michael Shannon'
    }
  ];

  let currentTab = 'all';
  let searchQuery = '';
  let watchlist = JSON.parse(localStorage.getItem('novaflix_watchlist') || '[]');
  let selectedMedia = null;
  let heroMedia = MEDIA_DATABASE[0];

  function playMedia(item, subtitle) {
    const url = item.streamUrl || item.url;
    const title = item.title;
    const isLive = !!item.isLive;
    const sub = subtitle || item.genre || item.duration || '';

    // Check for native bridge provided by Android MainActivity
    if (window.NovaFlixNative && typeof window.NovaFlixNative.playVideo === 'function') {
      try {
        window.NovaFlixNative.playVideo(url, title, sub, isLive);
        return;
      } catch (e) {
        console.error('Error invoking NovaFlixNative:', e);
      }
    }

    // Fallback: Open in new tab or HTML5 video preview
    window.open(url, '_blank');
  }

  function toggleWatchlist(item) {
    const index = watchlist.findIndex(w => w.id === item.id);
    if (index >= 0) {
      watchlist.splice(index, 1);
    } else {
      watchlist.push(item);
    }
    localStorage.setItem('novaflix_watchlist', JSON.stringify(watchlist));
    render();
  }

  function isItemInWatchlist(id) {
    return watchlist.some(w => w.id === id);
  }

  function openModal(item) {
    selectedMedia = item;
    const modal = document.getElementById('detailsModal');
    if (!modal) return;

    document.getElementById('modalImage').src = item.backdrop;
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalDesc').textContent = item.description;

    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = `
      <span class="modal-tag">${item.year}</span>
      <span class="modal-tag">${item.duration}</span>
      <span class="modal-tag" style="color:#fbbf24">★ ${item.rating}</span>
      <span class="modal-tag">${item.genre}</span>
      <span class="modal-tag">${item.quality}</span>
    `;

    const episodesSection = document.getElementById('modalEpisodes');
    if (item.episodes && item.episodes.length > 0) {
      episodesSection.innerHTML = `
        <h4 style="margin: 16px 0 8px 0; font-size: 15px; font-weight:800;">Episodes</h4>
        <div class="episode-list">
          ${item.episodes.map(ep => `
            <div class="episode-item" onclick="window.novaFlixApp.playEpisode('${item.id}', ${ep.ep})">
              <span class="episode-num">${ep.ep}</span>
              <div class="episode-info">
                <div class="episode-title">${ep.title}</div>
                <div class="episode-duration">${ep.duration}</div>
              </div>
              <button class="btn-play-ep">▶</button>
            </div>
          `).join('')}
        </div>
      `;
      episodesSection.style.display = 'block';
    } else {
      episodesSection.innerHTML = '';
      episodesSection.style.display = 'none';
    }

    const watchBtn = document.getElementById('modalWatchBtn');
    const inWatchlist = isItemInWatchlist(item.id);
    watchBtn.textContent = inWatchlist ? '✓ In Watchlist' : '+ Watchlist';

    modal.classList.add('open');
  }

  function closeModal() {
    const modal = document.getElementById('detailsModal');
    if (modal) {
      modal.classList.remove('open');
    }
  }

  function renderHero() {
    const item = heroMedia;
    return `
      <div class="hero-container">
        <img class="hero-backdrop" src="${item.backdrop}" alt="${item.title}" />
        <div class="hero-overlay">
          <div class="hero-badge-row">
            <span class="badge ${item.isLive ? 'badge-live' : 'badge-primary'}">${item.isLive ? '● LIVE TV' : item.badge}</span>
            <span class="badge badge-imdb">★ ${item.rating}</span>
            <span class="badge" style="background:rgba(255,255,255,0.2)">${item.quality}</span>
          </div>
          <h1 class="hero-title">${item.title}</h1>
          <p class="hero-desc">${item.description}</p>
          <div class="hero-actions">
            <button class="btn-play" onclick="window.novaFlixApp.playHero()">
              <span>▶</span> Play Now
            </button>
            <button class="btn-info" onclick="window.novaFlixApp.openModalById('${item.id}')">
              <span>ℹ</span> Details
            </button>
            <button class="btn-info" onclick="window.novaFlixApp.toggleWatchlistById('${item.id}')">
              <span>${isItemInWatchlist(item.id) ? '✓' : '+'}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function renderMediaCard(item, isWide = false) {
    return `
      <div class="media-card ${isWide ? 'card-wide' : ''}" onclick="window.novaFlixApp.openModalById('${item.id}')">
        <div class="card-poster-wrap">
          <img class="card-poster" src="${isWide ? item.backdrop : item.poster}" alt="${item.title}" loading="lazy" />
          <span class="badge ${item.isLive ? 'badge-live' : 'badge-primary'} card-badge">${item.isLive ? '● LIVE' : item.badge}</span>
          <span class="card-quality">${item.quality}</span>
        </div>
        <div class="card-info">
          <div class="card-title">${item.title}</div>
          <div class="card-meta">
            <span>${item.genre.split('/')[0]}</span>
            <span style="color:#fbbf24">★ ${item.rating}</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderRows() {
    let filtered = MEDIA_DATABASE;

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.genre.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      );

      if (filtered.length === 0) {
        return `
          <div class="empty-state">
            <h3>No results found for "${searchQuery}"</h3>
            <p>Try searching for movies, series, or live TV channels</p>
          </div>
        `;
      }

      return `
        <div class="section">
          <div class="section-header">
            <h2 class="section-title">Search Results (${filtered.length})</h2>
          </div>
          <div class="card-row" style="flex-wrap:wrap; overflow-x:visible">
            ${filtered.map(item => renderMediaCard(item)).join('')}
          </div>
        </div>
      `;
    }

    if (currentTab === 'watchlist') {
      if (watchlist.length === 0) {
        return `
          <div class="empty-state">
            <h3>Your Watchlist is Empty</h3>
            <p>Add your favorite movies and web series to watch them later.</p>
          </div>
        `;
      }
      return `
        <div class="section">
          <div class="section-header">
            <h2 class="section-title">My Watchlist (${watchlist.length})</h2>
          </div>
          <div class="card-row" style="flex-wrap:wrap; overflow-x:visible">
            ${watchlist.map(item => renderMediaCard(item)).join('')}
          </div>
        </div>
      `;
    }

    if (currentTab === 'movies') {
      const movies = filtered.filter(item => item.category === 'movies');
      return `
        <div class="section">
          <div class="section-header"><h2 class="section-title"><span>🍿</span> All Movies</h2></div>
          <div class="card-row" style="flex-wrap:wrap; overflow-x:visible">
            ${movies.map(item => renderMediaCard(item)).join('')}
          </div>
        </div>
      `;
    }

    if (currentTab === 'series') {
      const series = filtered.filter(item => item.category === 'series');
      return `
        <div class="section">
          <div class="section-header"><h2 class="section-title"><span>📺</span> Web Series & Shows</h2></div>
          <div class="card-row" style="flex-wrap:wrap; overflow-x:visible">
            ${series.map(item => renderMediaCard(item, true)).join('')}
          </div>
        </div>
      `;
    }

    if (currentTab === 'live') {
      const liveItems = filtered.filter(item => item.category === 'live');
      return `
        <div class="section">
          <div class="section-header"><h2 class="section-title"><span>🔴</span> Live 24/7 TV Channels</h2></div>
          <div class="card-row" style="flex-wrap:wrap; overflow-x:visible">
            ${liveItems.map(item => renderMediaCard(item, true)).join('')}
          </div>
        </div>
      `;
    }

    // Default 'All' tab: Multi-row layout
    const trending = filtered.slice(0, 4);
    const movies = filtered.filter(item => item.category === 'movies');
    const series = filtered.filter(item => item.category === 'series');
    const live = filtered.filter(item => item.category === 'live');

    return `
      <div class="section">
        <div class="section-header">
          <h2 class="section-title"><span>🔥</span> Trending Now</h2>
        </div>
        <div class="card-row">
          ${trending.map(item => renderMediaCard(item)).join('')}
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <h2 class="section-title"><span>🔴</span> Live TV Channels</h2>
        </div>
        <div class="card-row">
          ${live.map(item => renderMediaCard(item, true)).join('')}
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <h2 class="section-title"><span>🍿</span> Blockbuster Movies</h2>
        </div>
        <div class="card-row">
          ${movies.map(item => renderMediaCard(item)).join('')}
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <h2 class="section-title"><span>📺</span> Popular Web Series</h2>
        </div>
        <div class="card-row">
          ${series.map(item => renderMediaCard(item, true)).join('')}
        </div>
      </div>
    `;
  }

  function render() {
    const root = document.getElementById('root');
    if (!root) return;

    root.innerHTML = `
      <header class="header">
        <div class="top-bar">
          <div class="logo-container" onclick="window.novaFlixApp.setTab('all')">
            <div class="logo-icon">N</div>
            <div class="logo-text">NOVAFLIX</div>
          </div>
          <div class="search-box">
            <span style="color:var(--text-muted); font-size:13px">🔍</span>
            <input 
              type="text" 
              placeholder="Search movies, series..." 
              value="${searchQuery}" 
              oninput="window.novaFlixApp.onSearch(this.value)"
            />
          </div>
        </div>

        <nav class="nav-tabs">
          <button class="tab-btn ${currentTab === 'all' ? 'active' : ''}" onclick="window.novaFlixApp.setTab('all')">All</button>
          <button class="tab-btn ${currentTab === 'movies' ? 'active' : ''}" onclick="window.novaFlixApp.setTab('movies')">Movies</button>
          <button class="tab-btn ${currentTab === 'series' ? 'active' : ''}" onclick="window.novaFlixApp.setTab('series')">Web Series</button>
          <button class="tab-btn ${currentTab === 'live' ? 'active' : ''}" onclick="window.novaFlixApp.setTab('live')">Live TV</button>
          <button class="tab-btn ${currentTab === 'watchlist' ? 'active' : ''}" onclick="window.novaFlixApp.setTab('watchlist')">My Watchlist (${watchlist.length})</button>
        </nav>
      </header>

      ${searchQuery.trim() === '' && currentTab === 'all' ? renderHero() : ''}
      
      <main>
        ${renderRows()}
      </main>

      <!-- Details Modal / Bottom Sheet -->
      <div id="detailsModal" class="modal-backdrop" onclick="window.novaFlixApp.onModalBackdropClick(event)">
        <div class="modal-sheet">
          <div class="modal-header-image">
            <img id="modalImage" src="" alt="" />
            <button class="modal-close-btn" onclick="window.novaFlixApp.closeModal()">✕</button>
          </div>
          <div class="modal-content">
            <h3 id="modalTitle" class="modal-title"></h3>
            <div id="modalTags" class="modal-tags"></div>
            <p id="modalDesc" class="modal-desc"></p>
            
            <div class="modal-actions">
              <button class="btn-modal-play" onclick="window.novaFlixApp.playCurrentModal()">
                <span>▶</span> Watch Now
              </button>
              <button id="modalWatchBtn" class="btn-modal-watch" onclick="window.novaFlixApp.toggleCurrentModalWatchlist()">
                + Watchlist
              </button>
            </div>

            <div id="modalEpisodes"></div>
          </div>
        </div>
      </div>
    `;
  }

  // Exposed Application API
  window.novaFlixApp = {
    setTab: function (tab) {
      currentTab = tab;
      searchQuery = '';
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    onSearch: function (val) {
      searchQuery = val;
      render();
    },
    openModalById: function (id) {
      const item = MEDIA_DATABASE.find(m => m.id === id) || watchlist.find(m => m.id === id);
      if (item) openModal(item);
    },
    closeModal: function () {
      closeModal();
    },
    onModalBackdropClick: function (e) {
      if (e.target.id === 'detailsModal') closeModal();
    },
    playHero: function () {
      playMedia(heroMedia);
    },
    playCurrentModal: function () {
      if (selectedMedia) {
        playMedia(selectedMedia);
      }
    },
    playEpisode: function (seriesId, epNum) {
      const series = MEDIA_DATABASE.find(s => s.id === seriesId);
      if (series && series.episodes) {
        const ep = series.episodes.find(e => e.ep === epNum);
        if (ep) {
          playMedia({
            ...series,
            streamUrl: ep.url,
            title: `${series.title} - ${ep.title}`
          }, `Episode ${ep.ep}`);
        }
      }
    },
    toggleWatchlistById: function (id) {
      const item = MEDIA_DATABASE.find(m => m.id === id);
      if (item) toggleWatchlist(item);
    },
    toggleCurrentModalWatchlist: function () {
      if (selectedMedia) {
        toggleWatchlist(selectedMedia);
        const inWatchlist = isItemInWatchlist(selectedMedia.id);
        const watchBtn = document.getElementById('modalWatchBtn');
        if (watchBtn) {
          watchBtn.textContent = inWatchlist ? '✓ In Watchlist' : '+ Watchlist';
        }
      }
    }
  };

  // Initial Boot
  document.addEventListener('DOMContentLoaded', () => {
    render();
  });

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    render();
  }
})();
