---
layout: post
title: "New life, new site"
---

It's been a while since my last portfolio update. The last design was terrible, a fixed 960px layout which changed up and down with media queries, an chaos to organize. I cared more about OldIE so the design look pretty good, but all the fixing and patching resulted into spaghetti code.

I also had developed a WordPress theme for my blog, where I wanted to publish up to 3 articles a week which of course, I didn't. If you add up the tiring moderating SPAM on the comments, well, I ended up turning it off. But this will be different. 

## Welcome to Jekyll
I'm officialy moved to [Jekyll](http://jekyllrb.com), where I can write in markdown, making of this writing experience a way more pleasant thing. It's incredible how quickly you can set up a site on GitHub Pages, commit and inmediately see the changes. Just amazing. And of course, it's HTML so it's blazing fast.

So from now on, I'll be doing **web-related articles** here, mostly about CSS or Sass. I'll start doing some tutorials and different ways of thinking about CSS out of the box, mostly related to the demos I've published lately [on CodePen](http://codepen.io/jaicab/).

And like I've been doing on Twitter for some time now, everything will be **in English**. Even though my mother language is Spanish, it's time to do the switch.

By the way, all the code is hosted open source on [GitHub Pages](https://github.com/jaicab/jaicab.github.io).

## Looking for full-time in London
Big news, I'll be finishing all my freelance projects by **September** to look for a **full-time position** in **London**. Yes, I said look because I don't have one yet, even though I've been offered some, I didn't like them.

The thing is, I worked in a little project in London during the last summer and I fell in love with the city. I also love **traveling**, attending **conferences** and web communities, but there's none of them where I live and it's too time-consuming and expensive to travel from here. 

So instead of moving to Madrid or Barcelona, why not London? It can't be better **connected**, it's a lovely place to live, has lots of develpment and design communities and tons of conferences to attend, without forgetting that traveling from London is always cheaper.

I'll be speaking about this some more in the next few days, but if you know of anybody looking for a front-end architect, please [tweet me](http://twitter.com/{{ site.twitter }}). You can know more about me in the [about section](/about).

## Content-first and progressive enhancement
For those who don't know, I love **content-first** and **progressive enhancement** methodologies. That's why this site adapts beautifully across every device imaginable. It's a work in progress, though. But I think a bird in hand is worth two in the bush so, better publish now.

Some interesting things about the site are:

- The dynamic logo is done in pure CSS, with pseudoelements. It changes depending on the screen size.
- Hosting on GitHub and caching some resources results in a weight of ~350B for every pageload. That's fast!
- The font files are cached via localStorage, so the first load could be a little bit slow, but after that it's just blazing fast.

I have to thank [Vitaly Friedman](http:/twitter.com/smashingmag) for his help with localStorage caching, like they're doing on [Smashing Magazine](http://smashingmagazine.com).

So do you like it? Are you moving to Jekyll too? Please criticize the site on Twitter, I'd love to hear what you think about it.