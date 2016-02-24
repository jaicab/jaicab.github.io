loadCSS("/css/full.css");

;(function( doc ) {  
  // IE9+
  if( !( 'geolocation' in navigator ) ||
	!( "keys" in Object )) {
	return;
  }

  window.fontsLoaded = false;

  if(sessionStorage.fontPrimaryLoaded && sessionStorage.fontSecondaryLoaded) {
    window.fontsLoaded = true;
    loadCSS("https://fonts.googleapis.com/css?family=Montserrat:400,700|Crimson+Text:400,400italic,600");
    doc.documentElement.className += " font-primary-loaded";
    if(sessionStorage.fontSecondaryLoaded) {
      doc.documentElement.className += " font-secondary-loaded";
    }

  }
})( document );