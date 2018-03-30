window.Polymer = {
  rootPath: '/'
};

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('service-worker.js', {
      scope: Polymer.rootPath,
    });
  });
}