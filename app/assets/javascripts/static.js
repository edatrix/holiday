$(function () {
  $('.month').hover(function () {
    $(this).find('.hover-text').hide();
  }, function () {
    $(this).find('.hover-text').show();
  });
});