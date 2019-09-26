console.log('Yo im here!');

$('.jumbotron').css({ height: $(window).height() + 'px' });

$(window).on('resize', function() {
  $('.jumbotron').css({ height: $(window).height() + 'px' });
});

//****/javascript for background video****//
// function deferVideo() {
//   //defer html5 video loading
//   $('video source').each(function() {
//     var sourceFile = $(this).attr('data-src');
//     $(this).attr('src', sourceFile);
//     var video = this.parentElement;
//     video.load();
//     // uncomment if video is not autoplay
//     video.play();
//   });
// }
// window.onload = deferVideo;
