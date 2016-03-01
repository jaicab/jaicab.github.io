---
layout: project
title: Movilcrash
meta: Case study for Movilcrash, a repairers chain for smartphones
---

Some time ago, my iPhone home button broke. Since I needed to have it fixed quickly, I took it to Movilcrash instead of sending it to Apple Support.

As a client, I realised they didn't have a system to control the stock of pieces, manage their clients, control the orders or nothing like that. Everything was done on paper. When I told the manager how a web application could improve their workflow, he wanted to build it right away.

<figure>
<picture>
	<!--[if IE 9]><video style="display: none;"><![endif]-->
	<source srcset="/images/cover/large/movilcrash.jpg" media="(min-width: 1100px)">
	<source srcset="/images/cover/big/movilcrash.jpg, /images/cover/large/movilcrash.jpg 2x" media="(min-width: 400px)">
	<source srcset="/images/cover/small/movilcrash.jpg, /images/cover/medium/movilcrash.jpg 2x">
	<!--[if IE 9]></video><![endif]-->
	<img srcset="/images/cover/small/movilcrash.jpg, /images/cover/medium/movilcrash.jpg 2x" alt="Books and Party cover">
</picture>
</figure>
<figcaption>
	See <a target="_blank" href="/images/cover/enormous/movilcrash.jpg">full version</a>.
</figcaption>

##Responsibilities

- Design and responsive rationalisation
- UI development
	- Architecture
	- Object oriented style guide
	- Responsive development
- PHP development
	- MVC content
	- PDF bills
	- Basic stats
- Scalable MySQL schema and implementation


##Results

The site is for **administrative purposes only** so you can't check it out. But, I left them with the following:

- An object oriented **style guide** in HTML and Sass.
- A powerful, totally scalable **MVC PHP** system.
- PDF bills based on FPDF.
- A steps based, employee linked **order control**.
- A complete, scalable admin manager which can handle:
	- Clients
	- Devices
	- Orders
	- Pieces
	- Budgets
	- Products (non-pieces)
	- Employees access level


##The process
When I met Ladis, the owner of the chain, he didn't know what he wanted. Like many first-time clients, I had to explain him the boundaries of the web and also, the possibilities.

At first, his idea was to do a simple site to fill in the orders and then look them up on a list. I had to convince him that after a few weeks, that system would fall short of organization.

I did a couple of sketches with the idea I had in mind. I should have at least, 4 entities: **order, client, device and piece**. These 4 entities would be linked between them so from one of them you could check the rest. Also, we would need a _generic_ device database.

Ladis loved this idea. He got especially excited when I explained him that he could **search** through the database via National Identity Card, Order ID or even device's IMEI.  
This way if a client came back with the same device model, in order to trick them to fix it up like if Movilcrash had broken it, they could look up the IMEI and realise that it had no history record.

With time, other entities came up and were added to the system. I even thought of a **budget system**, where clients could get a budget from home. By selecting their device they could see how much would it cost to do a thing or two. Prices were the average of all the already done repairs for that specific matter and device.

##Curiosities
- FPDF is a good working solution for not too much stylish PDFs.
- Saving the steps of an order directly in MySQL is not a good idea. Save them in a SESSION variable till the end.

##Summary

It took me **4 months** to fully complete all the possibilities of the site, resulting in a robust, scalable and very powerful system which all of Movilcrash' shop use everyday.

It was a nice experience to learn so much about the insides of today's devices. 

