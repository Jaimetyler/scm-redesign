console.log('Yo im here!');

$('.jumbotron').css({ height: $(window).height() + 'px' });

$(window).on('resize', function() {
  $('.jumbotron').css({ height: $(window).height() + 'px' });
});

// ********** FIREBASE ********** //

SpaceRace.prototype.addShip = function(data) {
  const collection = firebase.firestore().collection('inquery');
  return collection.add(data);
};

// ********** END FIREBASE ********** //
