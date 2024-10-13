const CACHE_NAME = "app-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/src/main.js",
        "/src/App.css", // Si tienes un archivo CSS principal
        // Agrega aquí otros recursos necesarios
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("/tu-endpoint-del-csv")) {
    event.respondWith(
      caches.open(DATA_CACHE_NAME).then((cache) => {
        return fetch(event.request)
          .then((response) => {
            cache.put(event.request.url, response.clone());
            return response;
          })
          .catch(() => {
            return cache.match(event.request);
          });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
