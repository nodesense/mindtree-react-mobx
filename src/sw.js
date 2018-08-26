console.log("MY SW");

const prefix = 'http://localhost:8080'
// CROSS ORIGIN NOT SUPPORTED
// SAME ORIGIN (SAME HTTPS, PORT, DOMAIN)
// cannot access window
// cannot access document (DOM)

var CACHE_NAME = 'mobx-app-cache-v5';
var urlsToCache = [
  '/assets/styles.css',
  '/assets/loading.gif',
  '/offline.html',
  // '/app.bundle.js' // not for  development
];


self.addEventListener('install', function(event) {
    console.log("Install running")
    // Perform install steps
    // Will not block UI, this is runnong on differnt worker thread
    // web worker
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });


self.addEventListener('activate', function(event) {
    console.log("activate running")
    // keep the white listed cached, 
    // then delete other cache entries
    var cacheWhitelist = [CACHE_NAME];
  
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              //clean the cache the one we don't need
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
   
  });

  self.addEventListener('fetch', function(event) {
      console.log('got request ', event.request)
      console.log('is online ', navigator.onLine)
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {

        if (!navigator.onLine) {
          // offline mode
          // check if browser request index page (index.html)
          if (event.request.url == prefix + '/' ) {
            console.log("Respond with offline.html");
            // check if cache has got offline.html
            return cache.match(prefix + '/offline.html').then(function(cachedResponse) {
              console.log('offline html response ', cachedResponse)
              console.log('offline.html found in cache');
              // returning offline.html content
              return cachedResponse
          })
        }
      }

        return cache.match(event.request).then(function (cachedResponse) {
          console.log('do we have cache ? ', cachedResponse)
          // return cachedResponse
          if (cachedResponse) {
              console.log(event.request.url, ' served from sw cache')
              return cachedResponse
          }

          console.log('request server for ', event.request.url)
          // fetch from server if cache not found
          return  fetch(event.request).then(function(response) {
              console.log('got response from server ', response);
              // cache it if needed.
              // Check what not to cache then cache
              // cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  });



caches.keys().then(function(cacheNames) {
    console.log("cached keys ", cacheNames)
    cacheNames.map(function(cacheName) {
      console.log("cache Name", cacheName)
      //return caches.delete(cacheName);
    })
})