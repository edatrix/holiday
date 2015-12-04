$(function () {
  $('.month').hover(function () {
    $(this).find('.hover-text').show();
  }, function () {
    $(this).find('.hover-text').hide();
  });
});