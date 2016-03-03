---
logo: copycentro.png
title: Copycentro
link: http://copycentro.es/
meta: A presentational website for a spanish design agency, with a built-in QR generator and print assets management area. Built a CMS on pure PHP. Heavy use of OOCSS and simple, flexible patterns.
order: 4
tasks: 
- html
- css
- backend (php)
- web performance
---

When Sergio called me to redo their website in 2012, I looked it up and I found a flash site. I was terrified. As always when I find a flash-based site, I inmediately recomended a **responsive, progressive enhancement** redesign. Fortunately, Sergio agreed with me. 

Sergio is one of the owners of Copycentro, a chain of stationery shops. He needed a website were clients could look up services, shop's locations and quickly find a mobile and email contact. The other owner wanted a place where they could hang up their history, so everybody could knew about them.

<figure>
<picture>
	<!--[if IE 9]><video style="display: none;"><![endif]-->
	<source srcset="/images/cover/large/copycentro.jpg" media="(min-width: 1100px)">
	<source srcset="/images/cover/big/copycentro.jpg, /images/cover/large/copycentro.jpg 2x" media="(min-width: 400px)">
	<source srcset="/images/cover/small/copycentro.jpg, /images/cover/medium/copycentro.jpg 2x">
	<!--[if IE 9]></video><![endif]-->
	<img srcset="/images/cover/small/copycentro.jpg, /images/cover/medium/copycentro.jpg 2x" alt="Books and Party cover">
</picture>
</figure>
<figcaption>
	See <a target="_blank" href="/images/cover/enormous/copycentro.jpg">full version</a>.
</figcaption>

##Responsibilities

- Design and responsive rationalisation
- UI development
	- Architecture
	- Object oriented style guide
	- Responsive development
- PHP development
	- MVC content
	- QR generator and dynamic
	- Basic stats
- Scalable MySQL schema and implementation


##Results

The site is [up and running](http://copycentro.com) so you can check it out. I left them with the following:

- An object oriented **style guide** in HTML and LESS.
- A powerful, totally scalable **MVC PHP** system.
- Their very own **QR creator**.
- A fidelity-based, usable **orders system**.


##The process
Well, the first thing I do (if possible) when I build a website for a chain is visit a couple of their shops. Get into the customers (and employees) skin, so I can **understand their workflow**
 and maybe improve it within the new site. Some things I realized were:

- The design team and the clients only spoke via email.
- The clients wanted a fidelity system.
- There was no clients directory.

So, in order to solve these problems, I proposed a user panel, with an option to create a task and the design team at Copycentro could receive a notification. Also, in order to promote sign-up, I thought of creating a vCard in form of a QR code dynamically with the user info, as a gift for the user.

All these new ideas were successfully approved by the owners and really liked by the customers. They even asked the very own shop to print a card with the QR code so **card printing icreased up to 75%**. 


##Curiosities
- I learned about the way QR code scanner apps handle vCards. Not all of them work the same, but in the end I came up with a fully compatible solution.
- The owners required 3 sliders on the main page. Don't let it happen. I won't (again).


##Summary

In the end it was a long, **3 months** process where most of the time was took by testing and prototyping. The QR compatibility was a complete nigthmare but it's good to know what works and what not.


