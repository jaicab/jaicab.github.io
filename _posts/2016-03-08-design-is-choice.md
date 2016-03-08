---
title: "Design is choice"
meta: "It's important to make the right choice when approaching work"
---


When there’s at least two ways of doing something, there’s room for choice. By making a choice, you are designing.

Before making a choice, one should contemplate all facts and possible repercussions of each of the options. It’s important not to take anything for granted before doing this.

For example, I build websites. Let’s consider the facts for the question <q>how should I build websites?</q>.

- People use websites for all sorts of things. They can come from all sorts of places and backgrounds, and use websites on all kinds of devices and contexts.
- I want to create experiences that do what people want, not make people do what the experience requires. Therefore the experience must be reachable from any device that can access The Web, no matter the context.
- HTML can be accessed by any device that can access The Web.
- CSS can enhance that experience with layout, contrast in design, readability, animations, etc.
- Browsers are _tolerant_ with HTML and CSS by design, if they don't understand something, they ignore it and move on.
- JavaScript can enhance the experience with complex interactions that aren’t available in HTML.

Now before I design and/or build a website, I choose how to approach it based on those facts with this set of guidelines.

1. **Identify the core task**: Buy a product, check my bank statement, read an article, watch a video etc.
2. **Identify your worst and best case scenario for your audience**: A website for in-house use in a bank and an online version of a newspaper have very different audiences. Don’t assume anything (especially for your worst case scenario), get real data. And consider all of your possible audience, not only your target audience.
3. **Create a basic experience with maximum reach**: This experience should fit both your worst and best scenarios and everything in between. Usually HTML does the job, but this depends greatly on your scenarios.
5. **Enhance the experience**: Making sure you test first and then apply, the sky is the limit. Layout, media queries, fonts, typography, SVGs, high-res images, JavaScript interactions, embeds…
6. **Add features**: Iterating over the previous steps, add features one by one.

And we end up with an experience that is as great as it can ever be under the best conditions. Meanwhile, the users with the worst possible scenario get a basic experience.

What’s important is to consider the options before rushing into a decision, and more importantly **never assume anything**. I like what Anna Debenham says about console browsers:

>"Just because you don’t use it doesn’t mean no one does." – [Anna Debenham](http://maban.co.uk)

This way of working, this mindset is called **progressive enhancement**. It allows your work to be as **ubiquitious** and **future-friendly** as possible (if you let it). If you want to learn more about it, I’ve set up a [collection of resources](https://progressiveenhancement.org) related with it.

## I don't have time for this

Some people say <q>I don’t have time for this</q> or <q>I can’t do it right now</q> when facing the idea of supporting more browsers or case scenarios. And hey, I understand. If you don’t have the budget or the time, but have considered the options before taking each decision, then ok, maybe next time. **You tried shooting for the best solution, but it’s not viable**, good job.

Those I don’t get are the ones that just **don’t care at all** and just want to make their work **easier**. I feel like they don’t respect their users. Could it be that they don’t know the potential of doing things this way, of doing things _right_?

<q>It’s just boring</q>, I’ve heard too. <q>I just want to do cool stuff, not worry about old boring support</q>. I like how Jeremy Keith usually answers to this with <q>well, it’s called work for a reason, right?</q>.

What most of these people that give excuses don't really know is that once you got you core experience up and running, you can **spend all your time working on the enhanced experience**, and not only a single experience but an great _flexible_ experience. Scott Jehl from Filament Group [wrote about this a while ago](https://the-pastry-box-project.net/scott-jehl/2014-March-7):

>For us, building with Progressive Enhancement moves almost all of our development time and costs to **newer browsers**, not older ones.  
Progressive Enhancement frees us to focus on the costs of building features for modern browsers, without worrying much about leaving anyone out. With a strongly qualified codebase, **older browser support comes nearly for free**.

Then you can use new APIs (Service Workers, web audio, etc) or new fancy CSS features (viewport units, `calc()`, etc) without worrying much about support because **your basic experience always has your back**. 

If what you do affects how a website is going to work or look, remember that you are in fact, designing an experience for The Web, the beauty of which is its **ubiquity**. There will always be users coming from places you didn’t expect, using devices you didn’t test for. 

Progressive Enhancement helps you embrace the unexpected, reach to a bigger audience and in the end, deliver a better product. 

That's why I choose to build with it.













