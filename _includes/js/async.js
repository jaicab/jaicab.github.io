
{% include js/components/onloadCSS.js %}
{% include js/components/FontFaceObserver.js %}

    
function loadFonts() {
  var CrimsonText = new FontFaceObserver('Crimson Text');
  var CrimsonTextBold = new FontFaceObserver('Crimson Text', {
    weight: 600
  });
  var CrimsonTextItalic = new FontFaceObserver('Crimson Text', {
    style: 'italic'
  });
  var Montserrat = new FontFaceObserver('Montserrat');
  var MontserratBold = new FontFaceObserver('Montserrat',{
    weight: 700
  });

  Promise.all([CrimsonText.check(null,0), MontserratBold.check(null,0)]).then(function () {
    console.log('Main fonts available');
    sessionStorage.fontPrimaryLoaded = true;
    document.documentElement.className += " font-primary-loaded";
 
    Promise.all([CrimsonTextItalic.check(null,0), CrimsonTextBold.check(null,0), Montserrat.check(null,0)]).then(function() {
      console.log('Rest are available');
      sessionStorage.fontSecondaryLoaded = true;
      document.documentElement.className += " font-secondary-loaded";
    });
  }, function () {
    console.log('Man fonts not available');
  });
}

;(function( doc ) {
  var font_css = loadCSS("https://fonts.googleapis.com/css?family=Montserrat:400,700|Crimson+Text:400,400italic,600");

  // IE9+
  if( !( 'geolocation' in navigator ) ||
	!( "keys" in Object )) {
	return;
  }
  
  onloadCSS(font_css, loadFonts);
})( document );
