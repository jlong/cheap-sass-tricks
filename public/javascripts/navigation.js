var pages = [
  '/pbj',
  '/lorenz',
  '/spinner',
  '/dots',
  '/plus',
  '/atebits',
  '/ball',
  '/radar',
  '/matrix'
];

var path = location.pathname;

KeyboardJS.on('left', function() {
  var n = pages.indexOf(path);
  n = n - 1;
  if (n < 0) { n = pages.length - 1 }
  window.location.pathname = pages[n];
});
KeyboardJS.on('space, right', function() {
  var n = pages.indexOf(path);
  n = n + 1;
  if (n >= pages.length) { n = 0 }
  window.location.pathname = pages[n];
});
