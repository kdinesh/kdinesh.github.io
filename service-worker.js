const CACHE_NAME = 'ccc-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/404.html',
  '/assets/images/ccc-logo.png',
  '/assets/images/img1.jpg',
  '/assets/images/img2.jpg',
  '/assets/images/img3.jpg'
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
