/* Guarda la app en el móvil para que se abra rápido y sin conexión (la meteo sí necesita internet). */
const VERSION = "routeur-vr-4";
const APP = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png"];
self.addEventListener("install", e => e.waitUntil(caches.open(VERSION).then(c => c.addAll(APP)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;            // meteo, mapas y librerías: siempre de internet
  e.respondWith(fetch(e.request).then(r => {             // primero la red (para coger actualizaciones)...
    const copia = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copia)); return r;
  }).catch(() => caches.match(e.request)));              // ...y si no hay conexión, la copia guardada
});
