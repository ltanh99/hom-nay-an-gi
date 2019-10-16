(function($) {
	"use strict";
	var PENCI = PENCI || {};

	/* General functions
	 ---------------------------------------------------------------*/
	PENCI.general = function () {
		// Top search
		$( '#top-search a.search-click' ).on( 'click', function () {
			$( '.show-search' ).fadeToggle();
			$( '.show-search input.search-input' ).focus();
		} );

		// Go to top
		$( '.go-to-top, .penci-go-to-top-floating' ).on( 'click', function () {
			$( 'html, body' ).animate( { scrollTop: 0 }, 700 );
			return false;
		} );

		// Lazyload
		$('.penci-lazy').Lazy({
			effect: 'fadeIn',
			effectTime: 300,
			scrollDirection: 'both'
		});

		// Go to top button
		var $goto_button = $( '.penci-go-to-top-floating' );
		if ( $goto_button.length ) {
			$(document).scroll(function() {
				var y = $(this).scrollTop();
				if ( y > 300) {
					$goto_button.addClass('show-up');
				} else {
					$goto_button.removeClass('show-up');
				}
			} );
		}
		
		// Call back fitvid when click load more button on buddypress
		$( 'body.buddypress .activity .load-more a' ).on( 'click', function () {
			$(document).ajaxStop(function() {
			  $( ".container" ).fitVids();
			});
		} );
	}

	/* Sticky main navigation
	 ---------------------------------------------------------------*/
	PENCI.main_sticky = function () {
		if ( $().sticky && ! $( "nav#navigation" ).hasClass( 'penci-disable-sticky-nav' ) ) {
			var spaceTop = 0;
			if ( $( 'body' ).hasClass( 'admin-bar' ) ) {
				spaceTop = 32;
			}
			$( "nav#navigation" ).each( function () {
				$( this ).sticky( { topSpacing: spaceTop } );
			} );
		} // sticky
	}

	/* Fix margin headline
	 ----------------------------------------------------------------*/
	PENCI.fixheadline = function () {
		var $headline_title = $( '.penci-headline .headline-title' );
		if ( $headline_title.length ) {
			var headline_w = $headline_title.outerWidth() + 70;
			$('.penci-headline-posts' ).css( 'margin-left', headline_w + 'px' );
			$('.rtl .penci-headline-posts' ).css( 'margin-left', 0 + 'px' );
			$('.rtl .penci-headline-posts' ).css( 'margin-right', headline_w + 'px' );
		}
	}

	/* Homepage Featured Slider
	 ---------------------------------------------------------------*/
	PENCI.featured_slider = function () {
		if ( $().owlCarousel ) {
			$( '.featured-area .penci-owl-featured-area' ).each( function () {
				var $this = $( this ),
					$style = $this.data( 'style' ),
					$auto = false,
					$autotime = $this.data( 'autotime' ),
					$speed = $this.data( 'speed' ),
					$loop = $this.data('loop'),
					$item = 1,
					$nav = true,
					$dots = false,
					$rtl = false,
					$items_desktop = 1,
					$items_tablet = 1,
					$items_tabsmall = 1;

				if( $style === 'style-2' ) {
					$item = 2;
				} else if( $style === 'style-28' ) {
					$loop = true;
				}

				if( $('html').attr('dir') === 'rtl' ) {
					$rtl = true;
				}
				if ( $this.attr('data-auto') === 'true' ) {
					$auto = true;
				}
				if ( $this.attr('data-nav') === 'false' ) {
					$nav = false;
				}
				if ( $this.attr('data-dots') === 'true' ) {
					$dots = true;
				}
				if ( $this.attr('data-item') ) {
					$item = parseInt( $this.data('item') );
				}
				if ( $this.attr('data-desktop') ) {
					$items_desktop = parseInt( $this.data('desktop') );
				}
				if ( $this.attr('data-tablet') ) {
					$items_tablet = parseInt( $this.data('tablet') );
				}
				if ( $this.attr('data-tabsmall') ) {
					$items_tabsmall = parseInt( $this.data('tabsmall') );
				}

				var owl_args = {
					rtl               : $rtl,
					loop              : $loop,
					margin            : 0,
					items             : $item,
					navSpeed          : $speed,
					dotsSpeed         : $speed,
					nav               : $nav,
					slideBy           : $item,
					mouseDrag         : false,
					lazyLoad          : true,
					dots              : $dots,
					navText           : ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
					autoplay          : $auto,
					autoplayTimeout   : $autotime,
					autoplayHoverPause: true,
					autoplaySpeed     : $speed,
					responsive        : {
						0   : {
							items: 1
						},
						480 : {
							items  : $items_tabsmall,
							slideBy: $items_tabsmall
						},
						768 : {
							items  : $items_tablet,
							slideBy: $items_tablet
						},
						1170: {
							items  : $items_desktop,
							slideBy: $items_desktop
						}
					}
				}

				if( $style === 'style-2' ) {
					owl_args['center'] = true;
					owl_args['margin'] = 10;
					owl_args['autoWidth'] = true;
				} else if( $style === 'style-28' ) {
					owl_args['margin'] = 4;
					owl_args['items'] = 6;
					owl_args['autoWidth'] = true;
				}

				$this.owlCarousel( owl_args );

				if( $style === 'style-2' || $style === 'style-5' || $style === 'style-28' || $style === 'style-29' ) {
					$this.on( 'changed.owl.carousel', function ( event ) {
						$this.find( '.penci-lazy' ).Lazy( {
							effect: 'fadeIn',
							effectTime: 300,
							scrollDirection: 'both'
						} );
					} );
				}
			} );
		}	// if owlcarousel
	}

	/* Owl Slider General
	 ---------------------------------------------------------------*/
	PENCI.owl_slider = function () {
		if ( $().owlCarousel ) {
			$( '.penci-owl-carousel-slider' ).each( function () {
				var $this = $( this ),
					$auto = true,
					$dots = false,
					$nav = true,
					$loop = true,
					$rtl = false,
					$dataauto = $this.data( 'auto' ),
					$items_desktop = 1,
					$items_tablet = 1,
					$items_tabsmall = 1,
					$speed = 600,
					$item = 1,
					$autotime = 5000,
					$datalazy = false;

				if( $('html').attr('dir') === 'rtl' ) {
					$rtl = true;
				}
				if ( $this.attr('data-dots') ) {
					$dots = true;
				}
				if ( $this.attr('data-loop') ) {
					$loop = false;
				}
				if ( $this.attr('data-nav') ) {
					$nav = false;
				}
				if ( $this.attr('data-desktop') ) {
					$items_desktop = parseInt( $this.data('desktop') );
				}
				if ( $this.attr('data-tablet') ) {
					$items_tablet = parseInt( $this.data('tablet') );
				}
				if ( $this.attr('data-tabsmall') ) {
					$items_tabsmall = parseInt( $this.data('tabsmall') );
				}
				if ( $this.attr('data-speed') ) {
					$speed = parseInt( $this.data('speed') );
				}
				if ( $this.attr('data-autotime') ) {
					$autotime = parseInt( $this.data('autotime') );
				}
				if ( $this.attr('data-item') ) {
					$item = parseInt( $this.data('item') );
				}
				if ( $this.attr('data-lazy') ) {
					$datalazy = true;
				}

				var owl_args = {
					loop              : $loop,
					rtl               : $rtl,
					margin            : 0,
					items             : $item,
					slideBy           : $item,
					lazyLoad          : $datalazy,
					navSpeed          : $speed,
					dotsSpeed         : $speed,
					nav               : $nav,
					dots              : $dots,
					navText           : ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
					autoplay          : $dataauto,
					autoplayTimeout   : $autotime,
					autoHeight        : true,
					autoplayHoverPause: true,
					autoplaySpeed     : $speed,
					responsive        : {
						0   : {
							items  : 1,
							slideBy: 1
						},
						480 : {
							items  : $items_tabsmall,
							slideBy: $items_tabsmall
						},
						768 : {
							items  : $items_tablet,
							slideBy: $items_tablet
						},
						1170: {
							items  : $items_desktop,
							slideBy: $items_desktop
						}
					}
				};

				if ( $this.hasClass( 'penci-headline-posts' ) ) {
					owl_args['animateOut'] = 'slideOutUp';
					owl_args['animateIn'] = 'slideInUp';
				}

				$this.owlCarousel( owl_args );

				$this.on('changed.owl.carousel', function(event) {
					$this.find( '.penci-lazy' ).Lazy( {
						effect: 'fadeIn',
						effectTime: 300,
						scrollDirection: 'both'
					} );
				});
			} );
		}	// if owlcarousel
	}

	/* Fitvids
	 ---------------------------------------------------------------*/
	PENCI.fitvids = function() {
		// Target your .container, .wrapper, .post, etc.
		$( ".container" ).fitVids();
	}

	/* Sticky sidebar
	 ----------------------------------------------------------------*/
	PENCI.sticky_sidebar = function() {
		if ( $().theiaStickySidebar ) {
			var top_margin = 90;
			if( $('body' ).hasClass('admin-bar') ) {
				top_margin = 122;
			}
			$('#main.penci-main-sticky-sidebar, #sidebar.penci-sticky-sidebar' ).theiaStickySidebar({
				// settings
				additionalMarginTop: top_margin
			});
		} // if sticky
	}

	/* Mega menu
	 ----------------------------------------------------------------*/
	PENCI.mega_menu = function () {
		$( '#navigation .penci-mega-child-categories a' ).mouseenter( function () {
			if ( !$( this ).hasClass( 'cat-active' ) ) {
				var $this = $( this ),
					$row_active = $this.data( 'id' ),
					$parentA = $this.parent().children( 'a' ),
					$parent = $this.closest( '.penci-megamenu' ),
					$rows = $this.closest( '.penci-megamenu' ).find( '.penci-mega-latest-posts' ).children( '.penci-mega-row' );
				$parentA.removeClass( 'cat-active' );
				$this.addClass( 'cat-active' );
				$rows.hide();
				$parent.find( '.' + $row_active ).fadeIn( '300' ).css( 'display', 'inline-block' );
			}
		} );
	}

	/* Mobile menu responsive
	 ----------------------------------------------------------------*/
	PENCI.mobile_menu = function () {
		// Add indicator
		$( '#sidebar-nav .menu li.menu-item-has-children > a' ).append( '<u class="indicator"><i class="fa fa-angle-down"></i></u>' );
		$( '#sidebar-nav .penci-mega-child-categories' ).closest('li.penci-mega-menu' ).children('a').append( '<u class="indicator"><i class="fa fa-angle-down"></i></u>' );

		// Toggle menu when click show/hide menu
		$( '#navigation .button-menu-mobile' ).on( 'click', function () {
			$( 'body' ).addClass( 'open-sidebar-nav' );
		} );

		// indicator click
		$( '#sidebar-nav .menu li a .indicator' ).on( 'click', function ( e ) {
			var $this = $( this );
			e.preventDefault();
			$this.children().toggleClass( 'fa-angle-up' );
			$this.parent().next().slideToggle( 'fast' );
		} );

		// Close sidebar nav
		$( '#close-sidebar-nav' ).on( 'click', function () {
			$( 'body' ).removeClass( 'open-sidebar-nav' );
		} );
	}

	/* Light box
	 ----------------------------------------------------------------*/
	PENCI.lightbox = function () {
		if ( $().magnificPopup) {
			$( 'a[data-rel^="penci-gallery-image-content"], .penci-enable-lightbox .gallery-item a' ).magnificPopup( {
				type               : 'image',
				closeOnContentClick: true,
				closeBtnInside     : false,
				fixedContentPos    : true,
				image              : {
					verticalFit: true
				},
				gallery : {
					enabled: true
				},
				zoom               : {
					enabled : true,
					duration: 300 // don't foget to change the duration also in CSS
				}
			} );

			// Enable lightbox videos
			$('.penci-other-layouts-lighbox').magnificPopup( {
				type: 'iframe',
				mainClass: 'mfp-fade',
				fixedContentPos    : true,
				closeBtnInside     : false,
				closeOnContentClick: true
			} );
		} // if magnificPopup exists
	}

	/* Masonry layout
	 ----------------------------------------------------------------*/
	PENCI.masonry = function() {
		$(window).load(function() {
			var $masonry_container = $( '.penci-masonry' );
			if ( $masonry_container.length ) {
				$masonry_container.each( function () {
					var $this = $( this );
					// initialize isotope
					$this.isotope( {
						itemSelector      : '.item-masonry',
						transitionDuration: '.55s',
						layoutMode        : 'masonry'
					} );
				} );
			}
		});
	}

	/* Video Background
	 ----------------------------------------------------------------*/
	PENCI.video_background = function() {
		var $penci_videobg = $( '#penci-featured-video-bg' );
		if ( $().mb_YTPlayer && $penci_videobg.length ) {
			$(window ).load( function() {
				$("#penci-featured-video-bg").mb_YTPlayer();
				setTimeout(function(){
					$('.featured-area').addClass( 'loaded-wait' ).append('<div class="overlay-video-click"></div>');
					$('.overlay-video-click').on( 'click', function () {
						var $this = $(this);
						if( !$this.hasClass( 'pause-video' ) ) {
							$this.addClass('pause-video');
							jQuery('#penci-featured-video-bg').pauseYTP();
						} else {
							$this.removeClass('pause-video');
							jQuery('#penci-featured-video-bg').playYTP();
						}
					});
				}, 4000);
			} );
		}
	}

	/* Portfolio
	 ----------------------------------------------------------------*/
	PENCI.portfolio = function () {
		var $penci_portfolio = $( '.penci-portfolio' );
		if ( $().isotope && $penci_portfolio.length ) {
			$( '.penci-portfolio' ).each( function () {
				var $this = $( this );
				$( window ).load( function () {
					$this.isotope( {
						itemSelector    : '.portfolio-item',
						animationEngine : 'best-available',
						animationOptions: {
							duration: 250,
							queue   : false
						}
					} ); // isotope

					$this.addClass( 'loaded' );

					$('.portfolio-item .inner-item-portfolio').each( function () {
						var $this = $( this );
						$this.one( 'inview', function ( event, isInView, visiblePartX, visiblePartY ) {
							$this.addClass( 'animated' );
						} ); // inview
					} ); // each

				} ); // load

				// filter items when filter link is clicked
				$this.parent().find( '.penci-portfolio-filter' ).find( 'li' ).on( 'click', function () {
					$this.parent().find( '.penci-portfolio-filter' ).find( 'li' ).removeClass( 'active' );
					$( this ).addClass( 'active' );
					var selector = $( this ).find( "a" ).attr( 'data-filter' );
					$this.isotope( { filter: selector } );
					return false;
				} );
			} ); // each .penci-portfolio

		}	// end if isotope & portfolio
	}

	/* Gallery
	 ----------------------------------------------------------------*/
	PENCI.gallery = function () {
		var $justified_gallery = $( '.penci-post-gallery-container.justified' );
		var $masonry_gallery = $( '.penci-post-gallery-container.masonry' );
		if ( $().justifiedGallery && $justified_gallery.length ) {
			$( '.penci-post-gallery-container.justified' ).each( function () {
				var $this = $( this );
				$this.justifiedGallery( {
					rowHeight: $this.data( 'height' ),
					lastRow  : 'nojustify',
					margins  : $this.data( 'margin' ),
					randomize: false
				} );
			} ); // each .penci-post-gallery-container
		}

		if ( $().isotope && $masonry_gallery.length ) {

			$('.penci-post-gallery-container.masonry .item-gallery-masonry').each(function () {
				var $this = $(this);
				if ($this.attr('title')) {
					var $title = $this.attr('title');
					$this.children().append('<div class="caption">' + $title + '</div>');
				}
			});
		}

		$(window).load(function() {
			if ( $masonry_gallery.length ) {
				$masonry_gallery.each( function () {
					var $this = $( this );
					// initialize isotope
					$this.isotope( {
						itemSelector      : '.item-gallery-masonry',
						transitionDuration: '.55s',
						layoutMode        : 'masonry'
					} );

					$this.addClass( 'loaded' );

					$('.penci-post-gallery-container.masonry .item-gallery-masonry').each( function () {
						var $this = $( this );
						$this.one( 'inview', function ( event, isInView, visiblePartX, visiblePartY ) {
							$this.addClass( 'animated' );
						} ); // inview
					} ); // each

				} );
			}
		});
	}


	/* Init functions
	 ---------------------------------------------------------------*/
	$(document).ready(function() {
		PENCI.general();
		PENCI.main_sticky();
		PENCI.fixheadline();
		PENCI.featured_slider();
		PENCI.owl_slider();
		PENCI.fitvids();
		PENCI.sticky_sidebar();
		PENCI.mega_menu();
		PENCI.mobile_menu();
		PENCI.lightbox();
		PENCI.masonry();
		PENCI.video_background();
		PENCI.portfolio();
		PENCI.gallery();
		$(window ).resize( function(){ PENCI.sticky_sidebar(); } );
	});

})(jQuery);	// EOF