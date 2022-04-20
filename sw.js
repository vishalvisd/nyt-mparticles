
self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activating Service Worker ....', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    if (!(event.request.url.indexOf('http') === 0)) {
        return;
    }
    event.respondWith(fetch(event.request))
    // const cacheName = "dynamic-v9";
    //
    // async function respond(){
    //     const cache = await caches.open(cacheName)
    //     const cacheResponse = await cache.match(event.request);
    //     if (cacheResponse && event.request.url.indexOf("https://api.nytimes.com/svc/mostpopular/v2") === -1) {
    //         return cacheResponse;
    //     } else {
    //         const res = await fetch(event.request).catch(e=> new Error(e));
    //         if (!(res instanceof Error)){
    //             cache.put(event.request.url, res.clone());
    //         }
    //         return res;
    //     }
    // }
    // event.respondWith(respond());
});