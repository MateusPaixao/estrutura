(function( $, window ) {
$.fn.origamidMenu = function( options ) {
	
	// Opções	
	var settings = $.extend({
			breakpoint: 768,
			top: 52,
			color: 'white',
			background: 'black'
	}, options );
	
	var mobileWidth = settings.breakpoint,
			color = settings.color,
			background = settings.background,
			hambugerActive = false,
			hamburger = '<a id="origamid-icon"></a>',
			menu = $(this);

	var menuFunction = function() {
		var width = $(window).width();
		if (width < mobileWidth) {
			menu.attr('id', 'origamid-menu');
			if(!hambugerActive) {
				hambugerActive = true;
				menu.before(hamburger);
			} else {
				return false;
			}

		} else if (width > mobileWidth) {
			hambugerActive = false;
			$('#origamid-icon').remove();
			$('#origamid-menu style').remove();
			menu.attr('id', '');
		}

		$('#origamid-icon').on('click touchstart', function(e) {
			e.preventDefault();
			$('#origamid-icon').toggleClass('active');
			menu.toggleClass('active');
		});
	}
	
	menuFunction();
	$(window).resize(menuFunction);
};
}( jQuery, window ));

/* Hamburger Menu */
(function(){
	$('ul').origamidMenu();
}());


/* Resposive Image Map*/
$(document).ready(function () {
	$('map').imageMapResize();
});


// Scroll suave menu
$('nav a[href^="#"]').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top,
			menuHeight = $('nav').innerHeight(),
			respiro = 10;

	console.log(menuHeight);

	$('html, body').animate({
		scrollTop: targetOffset - menuHeight - respiro
	}, 500);
});

// Send Data
