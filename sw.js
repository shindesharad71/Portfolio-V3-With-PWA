self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("portfolio").then(function (cache) {
      return cache.addAll([
        "styles.pure.css"
      ]);
    })
  );
});

self.addEventListener("activate", function (event) {
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    })
  );
});
