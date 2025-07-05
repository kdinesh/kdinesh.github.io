const CACHE_NAME = 'ccc-cache-v2';
const urlsToCache = [
  '/',
  '/about/',
  '/activities/',
  '/dashboard/',
  '/404.html',
  '/assets/images/ccc-logo.png',
  '/assets/images/ccc-logo192x192.png',
  '/assets/images/favicon.ico',
  '/assets/images/img1.jpg',
  '/assets/images/img2.jpg',
  '/assets/images/img3.jpg',
];

// ❌ No auto-cache on install
self.addEventListener('install', event => {
  console.log('[SW] Installed — no caching yet.');
});

// ✅ Only cache if explicitly told to
self.addEventListener('message', event => {
  if (event.data === 'cache-contents') {
    console.log('[SW] Caching files...');
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache));
  }
});

// Normal fetch fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).catch(() => caches.match('/404.html'));
    })
  );
});
