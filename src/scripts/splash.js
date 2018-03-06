
document.addEventListener('end-splash', e => endSplash());

function endSplash() {
  //document.getElementById("splash").setAttribute('style', 'display: none');
  document.getElementById("splash").setAttribute('class', 'loader hidden');
}
