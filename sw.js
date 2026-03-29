const cacheName = 'caderno-v1';
const resourcesToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=DM+Mono:wght@500&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(resourcesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
