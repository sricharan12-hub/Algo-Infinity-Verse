// Bump CACHE_VERSION on every deploy (or derive it from a build hash) so the
// `activate` handler purges the previous precache instead of serving stale assets.
const CACHE_VERSION = 'v2';
const CACHE_NAME = `algo-infinity-verse-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `algo-infinity-verse-dynamic-${CACHE_VERSION}`;

// Only cache successful, non-opaque responses. This keeps 404s/5xx error pages
// and opaque cross-origin responses (status 0) out of the cache, preventing the
// cache-poisoning described in issue #1230.
function isCacheable(response) {
  return (
    response &&
    response.ok &&
    (response.type === 'basic' || response.type === 'cors')
  );
}

// Static assets to cache during install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  '/offline.html',
  '/images/icon-192x192.png',
  '/images/icon-512x512.png',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Poppins:wght@300;400;500;600;700&family=Fira+Code:wght@400;500;600&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Install Event - Cache App Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching static assets');
      // We use addAll but wrap it in a catch in case some external assets fail
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.warn('[Service Worker] Failed to cache some static assets:', err);
      });
    })
  );
  self.skipWaiting();
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME && key !== DYNAMIC_CACHE) {
            console.log('[Service Worker] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Network First for navigations & API, Stale-While-Revalidate for static assets
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Exclude non-GET requests and chrome-extension schemes
  if (event.request.method !== 'GET' || url.protocol === 'chrome-extension:') {
    return;
  }

  // Navigation requests (HTML pages): Network First so users always get fresh
  // pages after a deploy instead of a stale precached document.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (isCacheable(networkResponse)) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() =>
          caches.match(event.request).then((cached) => cached || caches.match('/offline.html'))
        )
    );
    return;
  }

  // API Requests: Network First, fallback to cache
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (isCacheable(networkResponse)) {
            const responseClone = networkResponse.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Static Assets (CSS/JS/images/fonts): Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (isCacheable(networkResponse)) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => undefined);

      return cachedResponse || fetchPromise;
    })
  );
});

// Message Event - Handle Service Worker lifecycle
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Background Sync API
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-offline-actions') {
    console.log('[Service Worker] Syncing offline actions...');
    event.waitUntil(processOfflineQueue());
  }
});

async function processOfflineQueue() {
  // Try to access indexedDB to replay offline actions
  // This interacts with offlineStore.js logic indirectly via fetching to a server, 
  // or posting message to clients to let them handle the sync.
  const clients = await self.clients.matchAll({ includeUncontrolled: true, type: 'window' });
  for (const client of clients) {
    client.postMessage({ type: 'PROCESS_OFFLINE_QUEUE' });
  }
}

