//fullpage.js initialization
$(document).ready(function() {
    $('#fullpage').fullpage({
      navigation: true,
      anchors: ['home', 'about', 'portfolio', 'contact'],
				menu: '#menu',
        css3: true
    });
});