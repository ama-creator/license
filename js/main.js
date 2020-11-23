$(function() {
  $('#license').change(function(){
      $('.license-selected__box').hide();
      $('#' + $(this).val()).show();
  });
});