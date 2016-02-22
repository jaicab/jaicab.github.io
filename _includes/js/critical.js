{% include js/components/loadCSS.js %}

;(function( doc ) {  
  // IE9+
  if( !( 'geolocation' in navigator ) ||
	!( "keys" in Object )) {
	return;
  }

  if(sessionStorage.fontPrimaryLoaded && sessionStorage.fontSecondaryLoaded) {
    doc.documentElement.className += " font-primary-loaded";
    if(sessionStorage.fontSecondaryLoaded) {
      doc.documentElement.className += " font-secondary-loaded";
    }
  }

  var full_css = loadCSS("/css/full.css");
})( document );