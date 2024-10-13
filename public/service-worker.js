const CACHE_NAME = "app-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/", // Ruta raíz
        "/index.html", // Archivo HTML principal
        "/manifest.json", // Manifesto
        "/favicon.png", // Icono de la aplicación
        "/src/main.jsx", // Archivo principal de tu aplicación
        "/src/components/SearchForm.jsx",
        "/src/components/SearchResultsList.jsx",
        "/src/components/ProductInfoTable.jsx",
        "/src/components/ExpirationForm.jsx",
        "/src/components/ProductAlert.jsx", // Incluye los demás componentes utilizados
        "/src/App.css", // Archivo de estilos
        "/src/utils/indexedDB.js", // Archivo IndexedDB
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
