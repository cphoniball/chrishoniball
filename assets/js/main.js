require.config({
	baseUrl: 'http://localhost:2368',
	paths: {
		'jquery': 'assets/packages/jquery/jquery.min',
		'prism': 'assets/js/prism'
	},
	shim: {
		'prism': {
			exports: 'prism'
		},
		'jquery': {
			exports: '$'
		}
	}
});


require(['prism'], function() {
	Prism.highlightAll();
});

require(['jquery'], function() {

	$(document).ready(function() {
		// make sure dates are properly aligned on the index page
		var $dates = $('.post-date');

		if ($dates.length) {
			$dates.each(function(i, e) {
				$left = -1 * ($(this).width() + 30);
				$(this).css('left', $left + 'px');
			});
		}
	});
});