console.log('Oma demo!');

simply.on('singleClick', function(e) {
  console.log(util2.format('Yksi clicked $button!', e));
  simply.subtitle('Pressed ' + e.button + '!');
});

simply.on('longClick', function(e) {
  console.log(util2.format('Kauan clicked $button!', e));
  simply.vibe();
  simply.scrollable(e.button !== 'select');
});

simply.on('accelTap', function(e) {
  console.log(util2.format('Tappasit accel axis $axis $direction!', e));
  simply.subtitle('Tapped ' + (e.direction > 0 ? '+' : '-') + e.axis + '!');
});

simply.setText({
  title: 'Simply Demo!',
  body: 'This is oma demo. Paina buttons or tap the watch!',
}, true);