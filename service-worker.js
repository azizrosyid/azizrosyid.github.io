importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

if (workbox) console.log("Workbox Berhasil di Install");
else console.log("Workbox Berhasil gagal Install");

const { precacheAndRoute } = workbox.precaching;
const { registerRoute } = workbox.routing;
const {
  StaleWhileRevalidate,
  CacheFirst,
  NetworkFirst,
  CacheOnly,
} = workbox.strategies;
const { ExpirationPlugin } = workbox.expiration;
const { CacheableResponsePlugin } = workbox.cacheableResponse;

precacheAndRoute([
  { url: "/index.html", revision: "1" },
  { url: "/nav.html", revision: "1" },
  { url: "/service-worker.js", revision: "1" },
  { url: "/manifest.json", revision: "1" },
]);

registerRoute(
  ({ url }) => url.pathname.includes("standings"),
  new NetworkFirst({
    cacheName: "data-standings",
    networkTimeoutSeconds: 3,
  })
);

registerRoute(
  ({ url }) => url.pathname.includes("teams"),
  new CacheFirst({
    cacheName: "data-team",
  })
);

registerRoute(
  new RegExp("/pages/"),
  new StaleWhileRevalidate({
    cacheName: "pages",
  })
);

registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: "images",
  })
);

registerRoute(
  ({ url }) => url.origin === "https://fonts.gstatic.com",
  new CacheFirst({
    cacheName: "font-google",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7,
        maxEntries: 10,
      }),
    ],
  })
);

registerRoute(
  ({ request }) =>
    request.destination === "script" || request.destination === "style",
  new StaleWhileRevalidate({
    cacheName: "static-resources",
  })
);
