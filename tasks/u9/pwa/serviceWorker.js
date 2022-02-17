const CACHE_NAME = "WEB-NAV-CACHE_V1";
const urlsToCache = [
    'index.html',
    'content.js',
    'content.json',
    'manifest.json',
    'img/icon-192.png',
    'img/icon-512.png'
];

self.addEventListener("install", (event)=>{
    (async ()=>{
        const permission = await Notification.requestPermission();
        console.log(permission);
        console.log("Hallo");
    })();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener("fetch", (event)=>{
    console.log("Test");
    event.respondWith(
        fetch(event.request).catch(()=>{
            return caches.open(CACHE_NAME).then((cache)=>{
                return cache.match(event.request)
            }).catch((error)=>{
                return new Response("Du bist offline");
            })
        })
    )

});