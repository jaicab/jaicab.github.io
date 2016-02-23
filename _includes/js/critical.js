{% include js/components/loadCSS.js %}
loadCSS("/css/full.css");

;(function( doc ) {  
  // IE9+
  if( !( 'geolocation' in navigator ) ||
	!( "keys" in Object )) {
	return;
  }

  window.fontsLoaded = false;

  if(sessionStorage.fontPrimaryLoaded && sessionStorage.fontSecondaryLoaded) {
    doc.documentElement.className += " font-primary-loaded";
    if(sessionStorage.fontSecondaryLoaded) {
      doc.documentElement.className += " font-secondary-loaded";
    }

    window.fontsLoaded = true;
  }
})( document );