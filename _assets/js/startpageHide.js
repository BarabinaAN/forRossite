$('#openSlider').on('click', function () {
	var parent = $(this).parent('.start-page');
	$('.carousel').removeClass('hidden');
	parent.addClass('hidden');
})