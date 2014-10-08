$(function() {
	$('.nav-link').on('click', function() {
		var navItemToShow = $(this).attr('data-name');

		console.log(navItemToShow);

		$('.nav-section').hide();
		$('#' + navItemToShow).fadeIn();
	});
});
