;(function( doc ) {
    if(!window.fontsLoaded) {
        var s = document.createElement('script');
        s.setAttribute('src', '/js/async.min.js');
        doc.body.appendChild(s);
    }
})( document );