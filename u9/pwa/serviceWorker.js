const CACHE_NAME = "WEB-NAV-CACHE_V1";
const urlsToCache = [
    'a1.html'
];

self.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});