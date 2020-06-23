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
// If you use GitRows as a module:

// Init the GitRows client, you can provide options at this point, later or just run on the defaults
let gitrows = new Gitrows();
let defaultOptions = {
	branch: "gh-pages",
}
let username = 'mateuspaixao'
let token = ''

let path = `@github/${username}/estrutura/data/contacts.json`;

function getContacts(){
	gitrows.options(defaultOptions)
	gitrows.get(path)
	.then(data => {
		console.log(data)
	})
	.catch(error => {
		console.error(error)
	});
}

function createMessage() {
	gitrows.options({
		...defaultOptions,
		 username,
		 token
	})

	const data = [{
		"name": "Roberta",
		"email": "roberta@email.com",
		"message": "Hiii, my name is Roberta, what's up?"
	}]

	gitrows.put(path, data)
	.then(response => {
		console.log(response)
	})
	.catch(error => {
		console.log(error)
	});
}


// https://raw.githubusercontent.com/mateuspaixao/estrutura/gh-pages/data/contacts.json
createMessage()