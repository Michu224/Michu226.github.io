self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open('app-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/assets/icons/icon-192.png',
        '/assets/icons/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
