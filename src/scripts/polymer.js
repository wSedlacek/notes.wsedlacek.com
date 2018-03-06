/**
* [polymer-root-path]
*
* By default, we set `Polymer.rootPath` to the server root path (`/`).
* Leave this line unchanged if you intend to serve your app from the root
* path (e.g., with URLs like `my.domain/` and `my.domain/view1`).
*
* If you intend to serve your app from a non-root path (e.g., with URLs
* like `my.domain/my-app/` and `my.domain/my-app/view1`), edit this line
* to indicate the path from which you'll be serving, including leading
* and trailing slashes (e.g., `/my-app/`).
*/
window.Polymer = { rootPath: '/' };

// Load and register pre-caching Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('service-worker.js', {
      scope: Polymer.rootPath,
    });
  });
}