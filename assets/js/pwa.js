const CACHE_NAME = 'pwa-cache'
const urlsToCache = [
'index.html',
'content.json',
'tasks/'
];

self.addEventListener("install", event=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(chache => chache.addAll(urlsToCache))
    );
});


self.addEventListener("fetch", event =>{
    const request = event.request;
    const url = new URL(request.url);
    if(url.origin === location.origin){
        event.respondWith(cacheFirst(request));
    }else{
        event.respondWith(networkAndCache(request));
    }
});

async function cacheFirst(request){
    const cache = await caches.open(CACHE_NAME);
    const isCached = await cache.match(request);
    return isCached || fetch(request);
}

async function networkAndCache(request){
    const cache = await caches.open(CACHE_NAME);
    try{
        const newFetch = fetch(request);
        await cache.put(request, (await newFetch).clone);
        return newFetch;
    }catch(exception){
        const chachedPage = await cache.match(request);
        return chachedPage;
    }
}