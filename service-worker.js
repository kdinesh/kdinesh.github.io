const CACHE_NAME = 'ccc-cache-v1';
const urlsToCache = [
  '/',
  '/404.html',
  '/about.html',
  '/assets/images/ccc-logo.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
