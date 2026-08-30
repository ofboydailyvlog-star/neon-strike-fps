// ===== NEON STRIKE — Service Worker =====

const CACHE_NAME = 'neon-strike-v1';
const ASSETS = [
    './',
    './index.html',
    './css/style.css',
    './js/main.js',
    './js/config.js',
    './js/utils.js',
    './js/audio.js',
    './js/input.js',
    './js/world.js',
    './js/player.js',
    './js/enemies.js',
    './js/effects.js',
    './js/ui.js',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png',
];

// Install: cache all assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS).catch((err) => {
                console.log('Cache addAll failed (some assets may be missing):', err);
                // Cache what we can
                return Promise.allSettled(
                    ASSETS.map(url => cache.add(url))
                );
            });
        })
    );
    self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

// Fetch: cache-first for same-origin, network-first for external (Three.js CDN)
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Only handle GET
    if (event.request.method !== 'GET') return;

    // External CDN resources (Three.js) — network first, fallback to cache
    if (url.origin !== location.origin) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    if (response && response.status === 200) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    }
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    // Same-origin — cache first
    event.respondWith(
        caches.match(event.request).then((cached) => {
            if (cached) return cached;
            return fetch(event.request).then((response) => {
                if (response && response.status === 200 && response.type === 'basic') {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                }
                return response;
            });
        })
    );
});
