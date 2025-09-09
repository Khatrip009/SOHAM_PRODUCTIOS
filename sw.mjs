const CACHE_NAME = "soham-cache-v2";
const ASSETS_TO_CACHE = [
  "/", // root
  "/index.html",
  "/styles.css",
  "/products.json",
  "/images/hero-bg.jpg",
  "/favicon.ico"
  // ⚠️ we will NOT pre-cache script.js (so it always comes from network)
];

// Install event → pre-cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate event → clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
  self.clients.claim();
});

// Fetch event → network-first for JS, cache-first for others
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Always network-first for JavaScript (so script.js is fresh)
  if (request.destination === "script") {
    event.respondWith(
      fetch(request).catch(() => caches.match(request))
    );
    return;
  }

  // Cache-first for images, CSS, JSON, etc.
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});
