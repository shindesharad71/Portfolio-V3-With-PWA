self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("portfolio").then(function (cache) {
      return cache.addAll([
        "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/css/materialize.min.css",
        "https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css",
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
