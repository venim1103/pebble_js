console.log('Testing!');

simply.on('singleClick', function(e) {
  console.log(util2.format('You clicked: $button!', e));
  simply.subtitle('You pressed ' + e.button + '!');
});

simply.on('longClick', function(e) {
  console.log(util2.format('You holded $button!', e));
  simply.vibe();
  simply.scrollable(e.button !== 'select');
});

simply.on('accelTap', function(e) {
  console.log(util2.format('You moved in axis $axis $direction!', e));
  simply.subtitle('Moved ' + (e.direction > 0 ? '+' : '-') + e.axis + '!');
});

simply.setText({
  title: 'My demo!',
  body: 'This is my demo. Please press buttons or move the watch around!',
}, true);
