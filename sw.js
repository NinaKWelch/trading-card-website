const staticCacheName = 'restaurant-cache-v1';

//Cached files
const urlsToCache = [
    '/',
    '/about.html',
    '/contributors.html',
    '/matches.html',
	'/css/styles.css',
	'/img/agata.jpg',
	'/img/ahmed_yasser.jpg',
	'/img/arrowUp.png',
	'/img/bear.png',
	'/img/bird.png',
	'/img/cat.png',
	'/img/Chartreux.png',
    '/img/dog.png',
    '/img/hummingbird.png',
    '/img/labrador.png',
    '/img/lion.png',
    '/img/monkey.png',
    '/img/nina_welch_profile.jpg',
    '/img/pikachu.png',
    '/img/potterheads.png',
    '/img/profile_placeholder.png',
    '/img/raven.jpg',
    '/img/red-fox.png',
    '/img/seal.png',
    '/img/tiger.png',
    '/img/udacity_logo.png',
    '/img/whippet-dog.png',
    '/img/wolf.png',
    '/img/favicon-16x16.png',
    '/img/favicon-32x32.png',
    '/img/safari-pinned-tab.png',
    '/img/favicon.ico',
	'/img/icons-192.png',
	'/img/icons-512.png',
	'/img/apple-touch-icon.png',
	'/js/cards.js',
	'/js/contributors.js',
	'/js/register_sw.js'
];

//Callback for the install event
self.addEventListener('install', function(event) {
	//perform install steps
	event.waitUntil(
		caches.open(staticCacheName).then(function(cache) {
			console.log(cache);
			return cache.addAll(urlsToCache);
		}).catch(err => {
			console.log(err);
		})
	);
});

// Upadate cache when new content is added
self.addEventListener('activate', function(event) {
	event.waitUntil(
		//get all the chache names that exist
		caches.keys().then(function(cacheNames) {
			//wait until the completion of all the promises
			return Promise.all(
				//filter the list of cache names
				cacheNames.filter(function(cacheName) {
					//get caches that are other than the name of staticCacheName
					return cacheName.startsWith('restaurant-') && cacheName != staticCacheName;
				//delete the other caches
				}).map(function(cacheName) {
					return caches.delete(cacheName);
				})
			);
		})
	);
});

//Return cached responses
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			//cache hit - return response
			return response || fetch(event.request);
		})
	);
});
