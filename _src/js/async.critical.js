;(function( doc ) {
	// IE9+
	if( !( 'geolocation' in navigator ) || !( "keys" in Object )) {
	  return;
	}

	// If fonts not already loaded, bring FontFaceObserver
    if(!(doc.documentElement.className.indexOf("f1") > -1)) {
        var s = document.createElement('script');
        s.setAttribute('src', '/js/async.min.js');
        doc.body.appendChild(s);
    }
})( document );