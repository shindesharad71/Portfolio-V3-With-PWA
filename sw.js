if('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
        console.log('Service worker registered!');
    });
}

self.addEventListener('install', function(event) {
    console.log('Installing Service Worker!');
});

self.addEventListener('activate', function(event) {
    console.log('Activate Service Worker!');
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    console.log('Fetch Service Worker!');
});