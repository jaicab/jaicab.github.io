---
layout: project
title: Books and Party
meta: Case study of Books and Party, a social network for college students
---

I have to say, when the guys at Books and Party approached me to do their site, they had a completely different idea. They wanted a site where college students and teenagers could trade, buy or sell stuff related with their studies.

The ideal case was a senior student selling all his equipment to a freshman. Since the senior is not needen them anymore, he could sell all the stuff to this freshman who is studing exaclty the same as he did, and could use, with some tips even.

<figure>
<picture>
	<!--[if IE 9]><video style="display: none;"><![endif]-->
	<source srcset="/images/cover/large/booksandparty.jpg" media="(min-width: 1100px)">
	<source srcset="/images/cover/big/booksandparty.jpg, /images/cover/large/booksandparty.jpg 2x" media="(min-width: 400px)">
	<source srcset="/images/cover/small/booksandparty.jpg, /images/cover/medium/booksandparty.jpg 2x">
	<!--[if IE 9]></video><![endif]-->
	<img srcset="/images/cover/small/booksandparty.jpg, /images/cover/medium/booksandparty.jpg 2x" alt="Books and Party cover">
</picture>
</figure>
<figcaption>
	See <a target="_blank" href="/images/cover/enormous/booksandparty.jpg">full version</a>.
</figcaption>

##Responsibilities

Although a designer took care of an initial sketch-up of the main design, I took care of the rest.

- Design and responsive rationalisation
- UI development
	- Architecture
	- Object oriented style guide
	- Responsive development
- Performance optimization
	- Keep dependencies to a minimun
	- Caching and gzipping
- SEO
	- Microdata
	- Twitter cards
	- OpenGraph
- PHP development
	- MVC content
	- Comments system
	- Safe downloads
	- Basic stats
- JS development
	- AJAX loading
	- modernizr integration
- Scalable MySQL schema and implementation


##Results

The site is [up and running](http://booksandparty.com) so you can check it out. I left them with the following:

- An object oriented **style guide** in HTML and Sass.
- A powerful, totally scalable **MVC PHP** system.
- **Optimized site** by caching and merging file dependencies.
- A **rich, semantic HTML** with a nice Twitter cards / OpenGraph integration.
- An scalable PO files **language system**.
- An **integrated comments system** fully usable and non-JS dependent, but enhanced progressively with AJAX, caching facebook avatars and falling back to gravatar.
- **Phase 1** of content integration.

##The process
Since this is a startup, I worked along their two members. One of them, David Rodríguez, was in charge of UX design and the other one,  Javier Ramón, was in charge of the marketing. Also Mónica Otero took care of the first approach to UI design on desktop, which I divided into UI responsive, mobile-first components.

We had to work fast, because some **universities wanted to participate** in the project and promote it, so they gave us a deadline. Also, all of us worked remotely, so we choose [Redbooth](https://redbooth.com/) to manage the agile workflow way more easily.

A few days after, we had come up with new ideas to stand out over competitors, making this project much bigger and interesting by adding the option to **share content**, like:

- Personal notes from classes.
- Tips for certain subjects.
- Offer/look up for free rooms on student's flats.
- Scholarships information.
- Private messages.
- Public comments.

We even created a **pre-college section**, where high school students can ask actual college students for their university, helping them choose a university based on real life experiences and not universities' advertisements. 

In order to promote the site, we decided to create a **customized blog** or "magazine". And to ease the sign up, I was required to do a Facebook login option.

It was a really collaborative experience, with lots of testing and prototyping, and we were in a hurry for some time but we met the deadline and the universities are lovin' it.

##Curiosities
- I was asked to do a **triangle-ish, responsive menu** and I got to do it in pure CSS through Sass functions.
- I gave the members a workshop in order to learn and understood the basics of web performance so thre wasn't a misunderstanding about the decisions I took to improve it.
- I learned that **caching facebook images** could save you up to 90% of loading time.


##Summary

It took me almost **4 months** of work to complete and implement a performant architecture with an structured scalable system and a object oriented, reusable CSS code.

This project proves that a well thought, **content-first** scheme can be quickly implemented into a highly usable and scalable social network.



