var main = function() {
	confirm(url(advertentie.png))


/* scroll naar onderdelen */
	$('#mainnav').on('click', function(event){
		var target = $(this).attr('src');
		var offsetTop = $(target).offset().top;
		$('html, body').animate({scrollTop: offsetTop}, 1000);

		if( $('.menu-icon').css('display') == 'block') { 
			$('#navigation').slideUp();
		}
		event.preventDefault();
	});

	/* scroll naar onderdelen */
};
$("document").ready(main);