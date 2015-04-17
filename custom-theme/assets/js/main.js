!function ($) {
  'use strict';

	$(function () {
		// Scrollspy
		var $window = $(window);
		var $body   = $(document.body);
		$body.scrollspy({
			target: '.sf-sidebar'
		});
		$window.on('load', function () {
			$body.scrollspy('refresh')
		});
		// Sidenav affixing
		setTimeout(function () {
			var $sideBar = $('.sf-sidebar');
			$sideBar.affix({
				offset: {
					top: function () {
						var offsetTop      = $sideBar.offset().top;
						var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10);						
						return (this.top = offsetTop  - sideBarMargin);
					},
					bottom: function () {
						return (this.bottom = $('#footer').outerHeight(true));
					}
				}
			});
		}, 100);
	});

}(jQuery);
	