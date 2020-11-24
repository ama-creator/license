

// input 
$('input[name="radio-license"]').click(function(){

	var target = $('#block-' + $(this).val());

 

  $('.license-selected__box').not(target).hide(0);


	target.fadeIn(500);

});

$('input[name="radio-license"]').click(function(){

	var target = $('#license-' + $(this).val());

 

  $('.license-selected__box-1').not(target).hide(0);


	target.fadeIn(500);

});


