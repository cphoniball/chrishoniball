require.config({
	baseUrl: 'http://localhost:2368',
	paths: {
		'jquery': 'assets/packages/jquery/jquery.min',
		'prism': 'assets/js/prism',
		'socialbuttons': 'assets/libs/socialbuttons/js/social-buttons'
	},
	shim: {
		'prism': {
			exports: 'prism'
		},
		'jquery': {
			exports: '$'
		},
		'socialbuttons': {
			deps: ['jquery']
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

require(['socialbuttons'], function() {
	$(document).ready(function() {

		if ($('.social-buttons').length) {
			var socialButtons = new SocialButtons({
				getCount: false,
				url: window.location.protocol + "//" + window.location.host + window.location.pathname,
				selector: '.social-button',
				title: $('.post-title').text(),
				summary: $('.post-content p').first().text().substring(0, 60),
				twitterAccount: 'cphoniball'
			});
		}

	});
});