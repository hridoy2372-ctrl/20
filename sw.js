/* THE LAST SIGNAL offline shell. v1.1 cinematic environment upgrade. */
const CACHE_NAME = 'the-last-signal-v1.1.0';
const APP_FILES = [
  './', './index.html', './manifest.webmanifest',
  './assets/tower-scene.jpg',
  './assets/scene-forest.webp', './assets/scene-cabin.webp', './assets/scene-bunker.webp',
  './icons/icon-192.png', './icons/icon-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => {
    if (cached) return cached;
    return fetch(event.request).then(response => {
      if (response && response.status === 200 && new URL(event.request.url).origin === self.location.origin) {
        const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      }
      return response;
    }).catch(() => caches.match('./index.html'));
  }));
});
