if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then(function() {
    const warningTitleCSS =
      "color:red; font-size:60px; font-weight: bold; -webkit-text-stroke: 1px black;";
    const warningDescCSS = "font-size: 18px;";
    console.log("%cStop!", warningTitleCSS);
    console.log("SW registered!");
  });
}

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("portfolio").then(function(cache) {
      return cache.addAll([
        "/style.css",
        "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/css/materialize.min.css",
        "https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css",
        "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/js/materialize.min.js"
      ]);
    })
  );
});

self.addEventListener("activate", function(event) {
  return self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    })
  );
});

(function initScroll() {
  new LazyLoad();
  $(document).ready(function() {
    $(".scrollspy").scrollSpy();
    $(".button-collapse").sideNav({
      menuWidth: 190,
      edge: "left",
      closeOnClick: true
    });
  });
})();
