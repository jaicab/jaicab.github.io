---
layout: post
title: "localFont, localStorage caching for web fonts in seconds"
meta: localFont allows you to implement localStorage caching for web font loading in seconds
---

I've been busy. Since I joined [Base Creative](http://basecreative.github.io/basecreative.co.uk/) last October I have done nothing but push myself forward to a better front end developer. I am using [pattern lab](http://basecreative.github.io/styleguide/), getting rid of jQuery (finally) and I love going to lots of conferences like Smashing Conference in Whistler and Awwwards in Barcelona. 

All that networking made me realise how much people was doing for they websites and what they were using. It surprised me a lot though that nobody I have met this past few months are really worried about font loading performance except for a few big companies.

## The localStorage solution
There are tons of approaches to web font loading but this is the one I like the most. You may know that this site has been using the localStorage caching solution since its last redesign, as being used on [Smashing Magazine](http://smashingmagazine.com) and [theguardian](http://theguardian.com). This approach uses localStorage to store the CSS code of the <code>@font-face</code> declarations where every file is encoded as a string using the base64 algorithm.

With this amazing combination we get fast access to the CSS with localStorage (which is way faster than regular HTTP caching) and all the requests we save by providing the font files as part of the CSS file. 
The only downside to this approach is **the first load**, which could take a bit but after that everything goes smoothly. Also if localStorage is not available (you can provide a cookie support) you have to load it every page load. Otherwise, it is almost instantaneous. And browser support is as good as IE8+, so that's more than enough for these days.

Once you got your CSS file sorted, you place a block of JavaScript that launches that file. This script should go inlined in the HTML in order to get executed as soon as possible.

Now every time I explain this approach to somebody I sense how the loose all the interest in it with the encoding, just because they don't know how to do that or the experiences they have had with it in the past haven't turned out great. The thing is, base64 encoding may affect your files and you could end up with a different output over the original font file. 

Currently people using this approach have tried generating the encoded fonts by themselves or using [Font Squirrel's webfont generator](http://www.fontsquirrel.com/tools/webfont-generator), which actually has a "base64 encode files" option but also produces all the different formats of every single font, resulting in a mess of CSS code that you have to work your way through.

##localFont and the need for a side project
While discussing the process to keep a performance budget at work, I realised that if we wanted to use the localStorage caching approach on a project, it would take ages to get it working, and more if we wanted to use it on every project.

This need of a tool and my need to play more with Vanilla JS pushed me into a new side project I have called [localFont](http://jaicab.com/localFont/). This tiny little online tool will generate the final CSS file for you and five you the piece of JavaScript you need to launch it. 

Just drop the font files, set up each font's style and weight and then use the code that will be automatically generated. By default it uses <code>/font.css</code> as the default path of the CSS, but it can be changed. It's important that it's an absolute path so it can be accessed from any directory.

Right now it just works with woff, woff2 and ttf and it can handle one font family at a time. If you want to add more font families, feel free to clear all up and generate the CSS again with the other family and put them in the same CSS file.  

All the source code is available [on github](https://github.com/jaicab/localFont) so feel free to open an issue, send me a pull request or [fire me a tweet](https://twitter.com/jaicab_).