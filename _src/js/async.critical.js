(function( doc ) {
	if(!(doc.documentElement.className.indexOf("f1") > -1)) {
	    var fontJS = enhance.getMeta("fontjs");
	    if( fontJS ){
	      enhance.loadJS( fontJS.content );
	    }
	}
}( document ));