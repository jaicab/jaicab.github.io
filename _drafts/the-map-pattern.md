---
layout: post
title: "GEO tag link"
meta: 
---

Interestingly enough, there's a spec for a link to open a maps app. The problem is though, that it has zero support but on latest Android. This made me think about Google Maps and progressive enhancement, so here's what I came out with.

## Where to start
Even though there are some awesome and cool maps APIs out there, like It's well know that Google Maps API is the most well-known map system out there, so let's stick with it. It allows us to:

- Create static map images quering the data just through an URI of [Google Static Maps API][maps-image-api].
- Interact with it throught the [Google Maps API][maps-api] using core JavaScript.




[here-maps]: https://developer.here.com/
[mapbox]: https://www.mapbox.com/

[maps-api]: https://developers.google.com/maps/
[maps-image-api]: https://developers.google.com/maps/documentation/imageapis/

[app-apple]: https://developer.apple.com/library/ios/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
[app-google]: https://developers.google.com/maps/documentation/ios/urlscheme#specify_a_callback_url