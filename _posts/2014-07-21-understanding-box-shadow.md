---
layout: post
title: Understanding box-shadow
---

First, let's do a brief introduction to `box-shadow`'s syntax. I'm sure you're already familiar with some part of it.  
In total, there are **6 parameters**: 

- The **`inset`** keyword: It makes the shadow work inside the element, not outside.
- **Horizontal** distance to the box.
- **Vertical** distance.
- **Spread**: This could be new for you. If you've done some Photoshop, it works the same way. If you haven't it's the same as the shadow's size but doesn't degrade to transparent. Is a way to make the shadow bigger or smaller.
- **Size** of the shadow itself.
- **Color**: it's gonna be used to fill the entire shape of the shadow, the spread (if added) and to degrade proportionally from the edge of the shape (plus spread obviosuly) to transparent at the end of the shadow (if not zero).

You must know that by default, inset is not present. But what about the other values? Why isn't the third value taken as the spread? That's because **browsers apply the shadow depending on how many values you set** (apart from inset and color). 

The first two values are always going to be the distance from the shape. If there's a third value, it will be the size. And **if there's a fourth**, then the third will be the spread and the fourth, the size.

## Let's see some examples

<p data-height="300" data-theme-id="7008" data-slug-hash="shbxI" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/jaicab/pen/shbxI/'>shbxI</a> by Jaime Caballero (<a href='http://codepen.io/jaicab'>@jaicab</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

**Squares**: Notice how by using the spread value we can get a bigger or smaller shadow. 

{% highlight css %}
.square{ 
  box-shadow: 0 130px 0 10px #000;
}

.squareinset{  
  box-shadow: 0 110px 0 -10px #000;
}
{% endhighlight %}

**Circle**: Here you can realise that the border is being considered for the shape of the shadow.

{% highlight css %}
.circle{
  border-radius: 50%;
  border: 1em solid #004466;

  box-shadow: 0 120px #000;
}
{% endhighlight %}

**Triangle**: Since the triangle is created with transparent borders, they are also considered for the shape of the shadow. If you want to cast a shadow here, you must use the `drop-shadow` filter.

{% highlight css %}
.triangle {
  width: 0;
  height: 0;
  background: transparent;

  border: 50px solid transparent;
  border-bottom: 100px solid #069;
  border-top: none;
  box-shadow: 0 120px #000;
}
{% endhighlight %}

So what does determine the actual shape of the shadow? Well, the shadow will be casted from **the shape of the border** of the elemet. All the inside will be filled with the color of the shadow (which by the way, supports alpha channel).

##Combining shadows

You can have multiple shadows by combining them with commas, being the first shadow always the one on top and the last one on the bottom. By using low alpha colors you can mix these colors and create nice effects like [this one](http://codepen.io/jaicab/full/xicaj/).

One thing you should know is that **no matter how hard you try, you can't see the shadow of an element through the element itself**. In the following example you can see how multiple shadows are combined but the element (with a transparent background) gets the background image, resulting in a interesting effect.


<p data-height="350" data-theme-id="7008" data-slug-hash="ImFyn" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/jaicab/pen/ImFyn/'>ImFyn</a> by Jaime Caballero (<a href='http://codepen.io/jaicab'>@jaicab</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>


Something amazing about box-shadows is that they **follow the shape at any time**, not only on the pageload. If you animate the shape of an element (throught `border-radius`, `width`, `height` or `transform`) the shadow will follow. Check out [this demo](http://codepen.io/jaicab/pen/ohbdJ) I made for Lea Verou's brithday.

Amazing, right? Although it's kind of hacky, it could be useful when you want/must keep the number of elements to a minimum. I'll be covering some use cases for these properties on the next articles.


