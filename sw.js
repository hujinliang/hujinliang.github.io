var CACHE_NAME = 'hujinliang-site-cache-v1'
var urls = [
    '/',
    '/assets/app.css',
    '/js/log.js'
]

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened')
                return cache.addAll(urls)
            })
    )
})