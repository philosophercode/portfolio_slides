$(document).ready(function () {
	$('#fullpage').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4'],
		menu: '#navbar',
		// controlArrows: false,
		slidesNavigation: true,
		// slidesNavPosition: 'top',
		// fadingEffect: true,
		paddingTop: '40px',
		// paddingBottom: '55px',
		fixedElements: '#navbar, .footer',
	});
});