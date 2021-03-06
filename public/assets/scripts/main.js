'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

if ('touchAction' in document.body.style) {
	document.body.style.touchAction = 'manipulation';
}

$(function () {

	// notification
	if ($('.js-notification').length) {
		(function () {
			var $el = $('.js-notification'),
			    $el_close = $('.js-notification--close', $el);

			$el_close.on('click', function () {
				$el.hide();
			});
		})();
	};

	// languages
	if ($('.select_language').length) {
		(function () {
			var $el = $('.select_language'),
			    $el_opener = $('.select_language--opener', $el),
			    $el_list = $('.select_language--list', $el),
			    isOpened = false;

			$el_opener.on('click', function () {
				if (isOpened) {
					close();
				} else {
					open();
				}
			});

			$(window).on('click', function (e) {
				if (!$el.is(e.target) && $el.has(e.target).length === 0) {
					close();
				}
			});

			var close = function close() {
				$el.removeClass('-opened');
				isOpened = false;
			};

			var open = function open() {
				$el.addClass('-opened');
				isOpened = true;
			};
		})();
	};

	// tips
	if ($('.js-tip').length) {

		$('.js-tip').each(function (i, el) {
			var $el = $(el);
			new Tip($el);
		});
	};

	// main slider
	if ($('.js-main_slider').length) {

		$('.js-main_slider').owlCarousel({
			items: 1,
			autoplay: true
		});
	}

	// sticky header
	if ($('.header_sticky').length && $(window).width() > 1000) {
		(function () {

			var headerSticky = function headerSticky() {
				var showAt = undefined;
				var $el = $('.header_sticky');

				if ($('.promo_slider').length) {
					showAt = $('.promo_slider').outerHeight(true) + $('.promo_slider').offset().top;
				} else {
					showAt = 600;
				}

				if ($(window).scrollTop() > showAt) {
					$el.addClass('-stick');
				} else {
					$el.removeClass('-stick');
				}
			};

			headerSticky();

			$(window).on('scroll', function (e) {

				headerSticky();
			});
		})();
	}

	// partners
	if ($('.js-partners').length) {

		$('.js-partners').owlCarousel({
			autoplay: true,
			responsive: {
				0: {
					items: 1
				},
				460: {
					items: 2
				},
				560: {
					items: 3
				},
				700: {
					items: 4
				},
				1000: {
					items: 5
				},
				1200: {
					items: 6
				}
			}
		});
	}

	// progressbar
	if ($('.progressbar').length) {

		$('.progressbar').each(function (index, el) {
			var $el = $(el),
			    options = $el.data('options'),
			    value = $el.data('value'),
			    inViewport = false,
			    defaultOptions = {
				strokeWidth: 4,
				trailWidth: 4,
				"text": {
					"value": '0',
					"className": "progressbar--label"
				},
				step: function step(state, bar) {
					bar.setText((bar.value() * 100).toFixed(0));
				}
			};

			options = $.extend(defaultOptions, options);

			if (value.indexOf('%') !== -1) {
				value = value.replace('%', '');
			}

			var progressbar = new ProgressBar.Circle(el, options);

			var startAnimation = function startAnimation() {
				inViewport = true;
				progressbar.animate(value / 100);
			};

			if ($('.js-skills').is(':in-viewport') && !inViewport) {
				startAnimation();
			}

			$(window).on('scroll', function () {
				if ($('.js-skills').is(':in-viewport(-120)') && !inViewport) {
					startAnimation();
				}
			});
		});
	};

	// map
	if ($('.map').length && window.google) {

		var myLatlng = new google.maps.LatLng(44.5403, -78.5463);

		var el = $('.map')[0],
		    mapOptions = {
			center: myLatlng,
			zoom: 8,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false
		},
		map = new google.maps.Map(el, mapOptions);

		var infowindow = new google.maps.InfoWindow({
			content: 'This place'
		});
	  
	    
	    var marker = new google.maps.Marker({
			position: myLatlng,
			map: map
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	}

	// case studies carousel
	if ($('.js-cards_carousel').length) {

		$('.js-cards_carousel').owlCarousel({
			autoplay: true,
			margin: 30,
			responsive: {
				0: {
					items: 1
				},
				769: {
					items: 2
				},
				992: {
					items: 3
				}
			}
		});
	}

	// custom select
	if ($('.js-select').length && $.fn.select2) {

		$('.js-select').each(function (i, el) {

			var $el = $(el),
			    options = $el.data('options'),
			    defaults = {
				minimumResultsForSearch: Infinity
			};

			options = $.extend(defaults, options);

			$el.select2(options);
		});
	}

	// header_search
	if ($('.js-header_search').length) {
		(function () {

			var $el = $('.js-header_search'),
			    $opener = $('.js-header_search--opener', $el),
			    $dropdown = $('.js-header_search--dropdown', $el),
			    $input = $('input', $dropdown),
			    isOpened = false;

			$opener.on('click', function (e) {
				e.preventDefault();
				if (isOpened) {
					close();
				} else {
					open();
				}
			});

			$input.on('keydown', function (e) {
				if (e.keyCode == 13) {
					$el.submit();
				}
			});

			$el.on('submit', function () {
				$input[0].value = '';
			});

			$(window).on('click', function (e) {
				if (!$el.is(e.target) && $el.has(e.target).length === 0) {
					close();
				}
			});

			var open = function open() {
				$dropdown.show();
				$opener.addClass('-active');
				$input.focus();
				isOpened = true;
			};

			var close = function close() {
				$dropdown.hide();
				$opener.removeClass('-active');
				isOpened = false;
			};
		})();
	}

	// accordion
	if ($('.js-accordion').length) {

		$('.js-accordion').each(function (i, el) {
			var $el = $(el),
			    $item = $('.vacancies--item'),
			    $opener = $('.vacancies--item_title'),
			    $content = $('.vacancies--item_content');

			$opener.on('click', function (e) {

				var $target = $(e.target);

				$item.removeClass('-opened');
				$content.stop().slideUp();
				$target.parent().addClass('-opened');
				$target.next().stop().slideDown();
			});
		});
	}

	// mega nav
	if ($('.mega_nav_simple').length) {
		$('.mega_nav_simple li.-has_child > a').on('click', function (e) {
			e.preventDefault();
			var $target = $(e.target);

			$target.next('.mega_nav_simple--menu').removeClass('-hidden').end().parent('.-has_child').parent('.mega_nav_simple--menu').addClass('-move_out');
		});

		$('.mega_nav_simple .mega_nav_simple--go_back').on('click', function (e) {
			e.preventDefault();
			var $target = $(e.target);

			$target.parents('.mega_nav_simple--menu').eq(0).addClass('-hidden').end().parents('.-has_child').parent().removeClass('-move_out');
		});
	}

	// twitter feed
	if ($('.js-twitter_feed').length) {

		$('.js-twitter_feed').owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			animateOut: 'fadeOut'
		});
	}

	// cards filters
	if ($('.js-cards_filter').length) {

		var $module = $('.js-cards_filter '),
		    $container = $('.cards_list .row', $module),
		    $navigation = $('.catalog_nav', $module);

		$('.catalog_nav--item_link').on('click', function (e) {
			e.preventDefault();
		});

		$container.mixItUp({
			controls: {
				activeClass: '-active'
			},
			selectors: {
				filter: '.catalog_nav--item_link'
			}
		});
	}

	// post like
	if ($('.js-post_like').length) {

		$('.js-post_like').on('click', function (e) {
			e.preventDefault();

			var $el = $(e.target).closest('.js-post_like'),
			    counter = $el.find('b');

			counter.text(+counter.text() + 1);

			$el.find('.fa').css({
				'color': '#e84545'
			});
		});
	}

	// pricing
	if ($('.js-price_plans').length) {
		(function () {

			var $switcher = $('.js-price_plans--switcher'),
			    $input = $('.js-price_plans--input'),
			    $plan = $('.js-price_plans .price_plan'),
			    $label = $('.price_switcher--label');

			$label.on('click', function (e) {
				e.preventDefault();
				var $item = $(e.target),
				    forAttr = null;

				if ($item.closest('.price_switcher--label').length) {
					forAttr = $item.closest('.price_switcher--label').attr('for');
				}

				$('#' + forAttr).prop('checked', true).trigger('change');
			});

			$input.on('change', function (e) {
				var $el = $(e.target);

				$plan.removeClass('-case_1 -case_2');
				$plan.addClass('-' + $el.val());
			});
		})();
	}

	// open view
	if ($('.slide_video--button').length) {

		$('.slide_video--button').magnificPopup({
			type: 'iframe'
		});
	}

	// post_share
	if ($('.js-post_share').length) {
		(function () {

			var $el = $('.js-post_share'),
			    $opener = $('.js-post_share--opener', $el),
			    $dropdown = $('.js-post_share--dropdown', $el);

			$opener.on('click', function (e) {
				e.preventDefault();

				$dropdown.toggle();
			});
		})();
	}

	// menu in widget
	if ($('.widget .menu').length) {
		(function () {

			var $opener = $('.widget .menu .menu-item-has-children');

			$opener.on('click', function (e) {
				var $el = $(e.target).closest('.menu-item-has-children');
				$opener.not($el).removeClass('-opened');
				$el.toggleClass('-opened');
				e.preventDefault();
			});
		})();
	}

	// hamburger toggler
	if ($('.c-hamburger').length) {
		var toggleHandler = function toggleHandler(toggle) {
			toggle.addEventListener("tap", function (e) {
				e.preventDefault();
				this.classList.contains("is-active") === true ? this.classList.remove("is-active") : this.classList.add("is-active");
			});
		};

		var toggles = document.querySelectorAll(".c-hamburger");

		for (var i = toggles.length - 1; i >= 0; i--) {
			var toggle = toggles[i];
			toggleHandler(toggle);
		};
	}

	// slideout menu
	if ($('.mobile_sidebar').length) {

		if ($(window).width() <= 992) {
			(function () {

				var slideout = new Slideout({
					'panel': document.getElementById('main'),
					'menu': document.getElementById('mobile_sidebar'),
					'padding': 320,
					'tolerance': 70
				});

				if ($('.header--menu_opener').length) {
					$('.header--menu_opener').on('click', function (e) {
						slideout.toggle();
						e.preventDefault();
					});

					// $('.header--menu_opener button').on('click', (e) => {
					// 	e.preventDefault()
					// });
				}

				if ($('.mobile_sidebar--closer').length) {
					$('.mobile_sidebar--closer').on('click', function (e) {
						e.preventDefault();
						$('.c-hamburger').removeClass('is-active');
						slideout.close();
					});
				}

				$('.mobile_menu .menu-item > a').on('click', function (e) {
					var $item = $(e.target);
					if ($item.parent().has('.sub-menu').length) {
						e.preventDefault();
						$item.parent('.menu-item').toggleClass('-active');
					}
				});
			})();
		}
	}

	// video youtube
	if ($('[data-video-youtube]').length && $.fn.YTPlayer) {

		$('[data-video-youtube]').each(function (i, el) {

			var $el = $(el),
			    options = $el.data('video-youtube'),
			    defaultOptions = {
				"fitToBackground": true,
				callback: function callback() {
					$el.parents().find('.video--background_placeholder').animate({
						opacity: 0
					}, 1000);
				}
			};

			options = $.extend(defaultOptions, options);
			$el.YTPlayer(options);
		});
	}

	// custom video
	if ($('[data-video-custom]').length) {

		$('[data-video-custom]').each(function (i, el) {
			var $el = $(el),
			    options = $el.data('video-custom');

			$el.vide(options.path);
		});
	}
});

// classes

var Tip = (function () {
	function Tip($el, options) {
		_classCallCheck(this, Tip);

		this.opened = false;

		this.cacheDOM($el);
		this.setOptions(options);
		this.bind();
	}

	_createClass(Tip, [{
		key: 'setOptions',
		value: function setOptions(options) {
			if (options) {
				this.options = options;
			} else {
				if (this.$el.data('options')) {
					this.options = this.$el.data('options');
				}
			}
		}
	}, {
		key: 'cacheDOM',
		value: function cacheDOM($el) {
			this.$el = $el;
			this.$el.$close = $('.js-tip--close', this.$el);
		}
	}, {
		key: 'bind',
		value: function bind() {
			var _this = this;

			this.$el.$close.on('click', function () {
				_this.close();
			});
		}
	}, {
		key: 'close',
		value: function close() {
			this.$el.addClass('-hide');
		}
	}]);

	return Tip;
})();

;(function ($, window, document, undefined) {
	"use strict";


	$('.send-form').submit(function(e){

		$('.ajax-loader').show();

		var url = 'mail.php',
			$this = $(this),
			form = this;

		$.ajax({
			type: "POST",
			url: url,
			data: $(form).serialize(),
		}).done(function(data) {
			$this.find('.msg').show();
		});

		e.preventDefault(); 

	});

})(jQuery, window, document);