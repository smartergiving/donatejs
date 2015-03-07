$(function() {
  var $d = $('.donate-message');
  $d.onVisible(function() {
    console.log('visible');
    $d.fadeTo( 250, 1 );
  });
});
