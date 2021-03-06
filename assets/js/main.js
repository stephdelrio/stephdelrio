
(function($) {

	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1000,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});
				$("#menu .close").click(function () {
    			$('body').toggleClass("is-menu-visible");
				});
				$("#menu ul > li > a").click(function () {
    			$('body').toggleClass("is-menu-visible");
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}
			//https://github.com/mattboldt/typed.js/blob/master/README.md
			$(function(){
				$("#element").typed({
					strings: ["Researcher", "Designer", "Strategist", "Consultant"],
					typeSpeed: 100,
						// loop
						loop: true,
            // false = infinite
            loopCount: false,
          });
				$("#element2").typed({
					strings: ["Honorary Asian", "Coffee Addict", "Songwriter", "Native Brooklynite", "Geography Wiz", "Nerd", "Fire Survivor", "Language Enthusiast"],
					typeSpeed: 100,
					loop: true,
	        loopCount: false,
	      });
			});

	});

})(jQuery);

$(document).ready(function(){

	// $(window).stellar();

// Smooth Scrolling effect
  var $root = $('html, body');
      $('#menu a').click(function() {
          var href = $.attr(this, 'href');
          $root.animate({
              scrollTop: $(href).offset().top
          }, 1200, function () {
              window.location.hash = href;
          });
          return false;
      });

//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});





