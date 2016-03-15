var $input = $('#colour-picker');
var $ball = $('.ball');
var $form = $('form');

$input.on('change', function () {
  $ball.css('background-color', $input.val());
});
