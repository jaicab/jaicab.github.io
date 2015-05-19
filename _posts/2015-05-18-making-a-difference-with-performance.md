---
layout: post
title: "Making a difference with performance"
meta: I want to share the experience of building a responsive, performant website like Base Creative's one
---

I don't blog very often. But when I do, it's because I have something important to share. Today we've launched [Base Creative's new website](http://basecreative.co.uk) which I've been asked to build from scratch. And it's fast. Blazing fast. Now I want to share that experience with you and tell you what I learned on the way.

<a href="/assets/perfmatters_competitors.png" title="See aumented image">
	<img src="/assets/perfmatters_competitors.png" alt="Filmstrip New Base vs Competitors" />
</a>

As you can see on the image of the [WebPageTest comparison](http://www.webpagetest.org/video/view.php?id=150518_77c607d0a4f6d269d7426ac2cdd9fe1b4ede6ebe&data=1)  with some other well known websites on mobile over 3G, the best thing about the new site is its **SpeedIndex**: [~660 on Chrome over WiFi][base-desktop-wifi] and [~2350 on mobile over 3G][base-mobile-3g] even getting an outstanding [456 on the best scenario][base-desktop-london] (desktop from London).

Now getting these scores didn't cost me a single penny, but some time and dedication.

## Performance matters
If you're not worrying about performance yet, let me give you a couple of reasons to do so:  
There's been lot of discussions lately about [Facebook Instant Articles](https://www.youtube.com/watch?v=zPvGF5bO0xs). With this feature, Facebook is avoiding hitting the website and getting directly to the content just because the web _is_ too slow. But that's our fault, and you can help to improve this situation. 

I had a [discussion with Scott Jehl](https://twitter.com/scottjehl/status/598860119628238848) from Filament Group about a good SpeedIndex and it was clear that a <3000 SpeedIndex on mobile 3G is kind of a low bar for what the web is up against.

<blockquote class="twitter-tweet" lang="en-gb"><p lang="en" dir="ltr">Test if your site is too slow:&#10;1. Open <a href="http://t.co/FIPFFm0HW8">http://t.co/FIPFFm0HW8</a>&#10;2. Add your url, Moto E, 3G&#10;3. Start&#10;&#10;Speed Index &gt; 3k?&#10;Your site is too slow.</p>&mdash; Scott Jehl (@scottjehl) <a href="https://twitter.com/scottjehl/status/598858314894725120">May 14, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Not only that, but it has been proven that users expect mobile web to be fast. As stated in [Designing for Performance](http://larahogan.me/design/):

> "A user expects a site to load on a mobile device as fast if not faster than in a desktop device" - Lara Hogan

This is given probably because the handheld devices are closer and may seem "simpler" than desktop devices, just because they show... less stuff on screen. But considering responsive design implies serving the same HTML to every device, this isn't really what happens.

What's really important it's not how long your site takes to load, but how fast it _feels_. This is what's called **perceived performance**. Getting the above-the-fold content to a visualy complete, usable state as fast as possible matters way more than performance across the page.

[Akamai's study](http://www.akamai.com/dl/reports/Site_Abandonment_Final_Report.pdf) shows us some very strong facts about percieved performance, like:

- 47% of people expect a web page to load in **2 seconds or less**.
- 40% will abandon a web page if it takes more than 3 seconds to load.
- 52% of online shoppers claim that quick page loads are important for their loyalty to a site.
- 14% will start shopping at a different site if page loads are slow, 23% will simply stop shopping.
- 64% of shoppers who are dissatisfied with their site visit will go somewhere else to shop next time.

In addition, it's been proven there is a direct relationship between performance and conversion rates. No matter what your site is offering, users won't get there if they have a slow experience. 
For example, [Walmart.com found](http://www.webperformancetoday.com/2012/02/28/4-awesome-slides-showing-how-page-speed-correlates-to-business-metrics-at-walmart-com/) that for every 1 second of improvement, they experienced up to a 2% conversion increase.

Nowadays, we're getting more and more impatient and we expect faster responses. Here's how I tried to meet these expectations without compromising design.

## The case study
![Filmstrip New Base vs Competitors](/assets/perfmatters_oldvsnew.png)


Let's get to the specifics. The new site has been built with the intention to set an example for new projects in the company. A fresh start, I would say. In order to do so, the frontend has gone for the highest standards I could meet. Here's how it's been done:

### Scalable and reusable CSS
It's important to keep scalable and reusable CSS. Any frontend developer realises that when he gets enough experience. Once you _see the world in markup_, tools like **Sass** become really useful. Something that really helped and I have always recommended is [Harry Robert's inuit-like folder structure](https://github.com/csswizardry/inuit.css/), too keep all these modules organised. Once you see it, you can't unsee it, just like [how ducks are wearing little dog masks](http://ubersuper.com/uploads/2010/08/tumblr_l7lw6navKd1qzpwi0o1_500.jpg). I would also recommend some Sass mixins:

- [theguardian's mq](https://github.com/sass-mq/sass-mq): Media queries couldn't get easier or more consistent.
- [ext()](http://jaicab.com/sass-ext/): This mixin lets you set a selector budget and control how you use the extend directive.


### A style guide
There are tons of style guide systems out there. After some research, [pattern lab](http://patternlab.io/) seemed to be the style guide "generator" that better fit our process. The result is [on GitHub](http://basecreative.github.io/styleguide/).

The best thing about it is that it includes a responsive testing tool. The idea is to present this growing, living style guide to the clients so they can see it grow and understand the complexity of the process and the fact that we're delivering a **system of independent, reusable components**, not a painting made in Photoshop.

Pattern Lab is based on [Brad Frost's Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) methodology which is somehow the way I've always seen websites when planning the markup, but Brad has the right way to explain it. If you still haven't heard about it, don't worry because [he's writing a book about it](http://atomicdesign.bradfrost.com/).
If you've read [SMACSS](https://smacss.com/), the experience is very similar. It's always been there and it's logic, but nobody has been able to put the right words together till now.


### Proper responsive images
I have been using responsive images for a long time, but when I was told that Blink was shipping with `picture` and `srcset` fully functional I knew it was time to do it properly. At the time of this writing, Chrome, Opera and Firefox have full support for both of these. Check the [Responsive Images Community Group site](http://responsiveimages.org/) to see the current state of implementation.

Now this wasn't easy, but there's no way around it. Take a look at some talks like [Yoav Weiss at Smashing Conference Whistler](https://vimeo.com/125771900) and just dive right into it. If you're using WordPress, I'd really recommend [this resize function](https://core.trac.wordpress.org/ticket/15311?cversion=0&cnum_hist=110) to create the different images for `srcset`.


### No jQuery
As a performance measure and since we were dropping support for IE under version 9 it seemed like a good time to make an example and just not use jQuery, not to mention [it is considered harmful](http://lea.verou.me/2015/04/jquery-considered-harmful/). A very helpful site that will help you get rid of it is [You Might Not Need jQuery](http://youmightnotneedjquery.com/).


### A <1000 SpeedIndex
Now this is a [golden rule established by Paul Irish](http://timkadlec.com/2014/01/fast-enough/#comment-1200946500) I really wanted to meet. This involves a series of factors, besides an optimal frontend development:

- Use a CDN: A content delivery network gets your users your content faster by placing copies of it closer to them. A very good, free solution is [CloudFlare](https://www.cloudflare.com/).
- Serve HTML cached files when possible: If you're using WordPress, you'll be sorted by using [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/). Remember to check the `mod_rewrite` redirection as it's the fastest option.
- Be smart about CSS/JS assets: If you're using multiple CSS or JS accross the page, merge them.
- Compress images: Using WebP, progressive JPEGs and reducing the number of colors in PNGs will save you lots of image weight and enhance the experience a lot. Some Mac tools you can use are [ImageOptim](https://imageoptim.com) and [ImageAlpha](http://pngmini.com/). And for user-managed content on WordPress I'd recommend [EWWW Image Optimiser](https://wordpress.org/plugins/ewww-image-optimizer/).
- Load fonts faster: [localFont](http://jaicab.com/localFont/) lets you store your font files in localStorage so they load faster than from the cache.
- Inline heavily used CSS/JS: This depends a lot on your product, but for example in Base's new site I used Modernizr and picturefill a lot. Inlining both allowed me to render the CSS much faster since the browser didn't have to wait for Modernizr to render Modernizr-prefixed styles, and the right images from the picture elements were picked very quickly as well.

If you want to have a better understanding of how browsers and servers work I would really encourage you to watch [Paul Irish's talk on Smashing Whistler](https://vimeo.com/125657469) about how TCP protocol is like 7th grade.


### Progressive enhancement
Everybody but the MVC framework lovers loves progressive enhancement. My passion for _access first_ really made me push for a very well though, progressively enhanced experience. A library that helped a lot with that was [Modernizr](http://modernizr.com/), which will let you use features when available. Basically, it's a matter of asking _if_ a lot.

As a result, the site has been built **mobile first**, loading assets and executing JavaScript only when it is necessary. It works beautifully without any JS at all, and then as features become available the experience gets enhanced with CSS transitions and better navigation.

One of my favourite talks on progressive enhancement (and ever) is [The Long Web by Jeremy Keith](https://vimeo.com/118146193).

### Get to know your product
In the end, the best performance optimizations depend on your product. Ask yourself the following questions. If there's no reasonable answer, you probably don't need it:

- Unify font files: Do you really need all those font files? Are you using every font weight? Even if you do, do you use them that often? Try changing isolated font weight declarations to the closest one.
- Remove unnecesary beautifiers: About that hero image slider, do your users really click on the "next" button of the slider? Studies show they don't. Track it and make sure you need all those super big hero images, if any at all.
- Load when necessary: Are you hiding stuff on mobile? If so and it has images, have you made sure they're not loading on mobile? If they're not shown, they're not needed. Use Chrome Dev Tools' emulator and check the Network panel.
- Bear in mind third party content dependencies: If using any third party content, are they requesting other libraries that affect your site's performance? Contact them and get to a middle ground or try to lazy load them when possible.

Use free tools like [WebPageTest](http://www.webpagetest.org/) or [ShowSlow](http://www.showslow.com/) to keep track of how your site is doing. Compare the before and after, see if it works for you.

## To sum up
The combination of all of these requirements resulted in a highly polished website that performs really well and is a good competitor against some globally well-known companies. It is definetly makes a difference with how it was before.

- [Comparison Base old vs new on mobile over 3G][old-vs-new-mobile]
- [Comparison Base old vs new on desktop over WiFi][old-vs-new-desktop]

Something I want to encourage all you to do is **attend local meetup and/or conferences**. Sharing and networking helped me expand my knowledge on all these areas, and I'm sure that without them this wouldn't have been as good as it is now.

I love competition, so if you know of any other highly curated sites to test against Base's new site, please [fire me a tweet](https://twitter.com/jaicab_). To make it fair the site must be responsive and have at least one image besides the logo.

I hope you learned something today. If you are worried about performance now, mission accomplished. If you're using WordPress, chances are you can get a <3000 SpeedIndex in no time with these tips. We can make the web faster, so we should. Go do your bit. It'll be better for everybody's roaming bill.

[base-mobile-3g]: http://www.webpagetest.org/result/150514_XD_5bfb63d23712e49332b9400c02768b2b/
[base-desktop-wifi]: http://www.webpagetest.org/result/150517_R6_20109e842c060552a2cfc5bc8e28ce34/
[base-desktop-london]: http://www.webpagetest.org/result/150517_QN_e9ac5a50db463a9ea9457d187571b244/

[old-vs-new-desktop]: http://www.webpagetest.org/video/view.php?id=150517_fe35c4a5d164211d0457d4c7bc7e57cc7162a419&data=1
[old-vs-new-mobile]: http://www.webpagetest.org/video/view.php?id=150517_780ff29fa4e22920134d774bbb9ad7324ada9010&data=1
