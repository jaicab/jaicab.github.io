/*! EnhanceJS: a progressive enhancement boilerplate. Copyright 2014 @scottjehl, Filament Group, Inc. Licensed MIT */
(function( window, undefined ) {

  // Enable JS strict mode
  "use strict";

  var setTimeout = window.setTimeout;

  var enhance = {};

  // Define some variables to be used throughout this file
  var doc = window.document,
    docElem = doc.documentElement,
    head = doc.head || doc.getElementsByTagName( "head" )[ 0 ],
    fullCSSKey = "fullcss",
    fontsKey = "fonts",
    fontJSkey = "fontjs",
    // classes to be added to the HTML element in qualified browsers
    htmlClasses = [ "enhanced" ];


  // loadJS: load a JS file asynchronously. Included from https://github.com/filamentgroup/loadJS/
  function loadJS( src ){
    var ref = window.document.getElementsByTagName( "script" )[ 0 ];
    var script = window.document.createElement( "script" );
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore( script, ref );
    return script;
  }

  // expose it
  enhance.loadJS = loadJS;

  // loadCSS: load a CSS file asynchronously. Included from https://github.com/filamentgroup/loadCSS/
  function loadCSS( href, before, media ){
    // Arguments explained:
    // `href` is the URL for your CSS file.
    // `before` optionally defines the element we'll use as a reference for injecting our <link>
    // By default, `before` uses the first <script> element in the page.
    // However, since the order in which stylesheets are referenced matters, you might need a more specific location in your document.
    // If so, pass a different reference element to the `before` argument and it'll insert before that instead
    // note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
    var ss = window.document.createElement( "link" );
    var ref = before || window.document.getElementsByTagName( "script" )[ 0 ];
    var sheets = window.document.styleSheets;
    ss.rel = "stylesheet";
    ss.href = href;
    // temporarily, set media to something non-matching to ensure it'll fetch without blocking render
    ss.media = "only x";
    // inject link
    ref.parentNode.insertBefore( ss, ref );
    // This function sets the link's media back to `all` so that the stylesheet applies once it loads
    // It is designed to poll until document.styleSheets includes the new sheet.
    function toggleMedia(){
      var defined;
      for( var i = 0; i < sheets.length; i++ ){
        if( sheets[ i ].href && sheets[ i ].href.indexOf( href ) > -1 ){
          defined = true;
        }
      }
      if( defined ){
        ss.media = media || "all";
      }
      else {
        setTimeout( toggleMedia );
      }
    }

    toggleMedia();
    return ss;
  }

  // expose it
  enhance.loadCSS = loadCSS;

  // getMeta function: get a meta tag by name
  // NOTE: meta tag must be in the HTML source before this script is included in order to guarantee it'll be found
  function getMeta( metaname ){
    var metas = window.document.getElementsByTagName( "meta" );
    var meta;
    for( var i = 0; i < metas.length; i ++ ){
      if( metas[ i ].name && metas[ i ].name === metaname ){
        meta = metas[ i ];
        break;
      }
    }
    return meta;
  }

  // expose it
  enhance.getMeta = getMeta;


  /* Enhancements for all browsers - qualified or not */

  /* Load fonts */
  var fonts = getMeta( fontsKey );
  if( fonts ){
    loadCSS( fonts.content );
  }

  // IE9+
  if( !( 'geolocation' in navigator ) || !( "keys" in Object )) {
    return;
  }
  // From here on we're dealing with qualified browsers.

  // Check if fonts loaded
  if(localStorage.getItem("fontsLoaded")) {
      htmlClasses[htmlClasses.length] = 'f1';
      htmlClasses[htmlClasses.length] = 'f2';
  }else{
    var fontJS = getMeta( fontJSkey );
    if( fontJS ){
      loadJS( fontJS.content );
    }
  }

  // HTML classes
  docElem.className += " " + htmlClasses.join(" ");


  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceworker.js');
  }


  // expose the 'enhance' object globally. Use it to expose anything in here that's useful to other parts of your application.
  window.enhance = enhance;

}( this ));
