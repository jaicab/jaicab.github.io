;(function( doc ) {
  // IE9+
  if( !( 'geolocation' in navigator ) ||
	  !( "keys" in Object )) {
	  return;
  }

  // Unless fonts already loaded...
  if((doc.documentElement.className.indexOf("f1") > -1)) {
    return;
  }

  var font_primary = 'Crimson Text';
  var font_secondary = 'Montserrat';
  var font_enhanced = 'Circular';

  // Primary fonts
  var CrimsonText = new FontFaceObserver(font_primary);
  var CrimsonTextBold = new FontFaceObserver(font_primary, {
    weight: 600
  });
  var CrimsonTextItalic = new FontFaceObserver(font_primary, {
    style: 'italic'
  });

  // Enhanced premium fonts (locally if available)
  var Circular = new FontFaceObserver(font_enhanced);
  var CircularBold = new FontFaceObserver(font_enhanced,{
    weight: 600
  });

  // Fallback font
  var Montserrat = new FontFaceObserver(font_secondary);
  var MontserratBold = new FontFaceObserver(font_secondary,{
    weight: 700
  });

  function secondLoaded(){
    console.log('Loading second font');
    sessionStorage.fontSecondaryLoaded = true;
    doc.documentElement.className += " f2";
  }

  Promise.all([CrimsonText.check(null,0), CrimsonTextBold.check(null,0), CrimsonTextItalic.check(null,0)]).then(function () {
    sessionStorage.fontPrimaryLoaded = true;
    doc.documentElement.className += " f1";
 
    Promise.all([Circular.check(null,0), CircularBold.check(null,0)]).then(secondLoaded, function(e){
      console.log('Loading ' + font_secondary);
      Promise.all([Montserrat.check(null,0), MontserratBold.check(null,0)]).then(secondLoaded);  
    });
  });
  
})( document );
