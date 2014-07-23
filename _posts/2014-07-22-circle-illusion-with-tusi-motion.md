---
layout: post
title: Circle illusion with Tusi motion
---

<p data-height="500" data-theme-id="7008" data-slug-hash="EKfCw" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/jaicab/pen/EKfCw/'>Article: Circle illusion with Tusi Motion #1</a> by Jaime Caballero (<a href='http://codepen.io/jaicab'>@jaicab</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

I made this illusion based on the **Tusi motion** method, which takes his name from Nair al-Din Tusi, a Persian astronomer from the 13th century. The principle established by Tusi states that: 

> If a circle with diameter A rotates on the inner boundary of a circle with diameter 2A, then a point on the circumference of the inner circle traces a **straight line**.

As you can see, any point in the inner circumference is following a perfect linear movement. If we added up more points, we could trace their linear movement too.

<p data-height="350" data-theme-id="7008" data-slug-hash="zHtxb" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/jaicab/pen/zHtxb/'>Article: Crazy illusion with Tusi motion #2</a> by Jaime Caballero (<a href='http://codepen.io/jaicab'>@jaicab</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

But we'll do the opposite, get a circular movement illusion from linear movements. I have created a `.content` box which will act as the outer circumference. Inside of it, we'll place **tracks**, the boundaries whithin the balls will move.

##Placing the tracks
We'll picture each `.ball` element as a track where its `before` pseudoelement will act as a ball. Since the balls are going to move all over the diameter, we only need to divide half the circumference (180deg). Each track will have its own **angle** and **animation delay**, so we'll use the `nth-child` selector combined with Sass to assign these properties:


{% highlight sass %}

@for $i from 1 to $num {
    .ball:nth-child(#{$i}) {
       
      transform: rotate((180deg*$i)/(($num - 1)));

    }
}

{% endhighlight %}


Our tracks are placed in the correct positions. Let's start animating! 

##Animating the balls 
We have to animate the `before` pseudoelement of every ball, but again all of them have a different starting point so we can add it to de code above:


{% highlight sass %}

@for $i from 1 to $num {
    .ball:nth-child(#{$i}) {
      transform: rotate((180deg*$i)/(($num - 1)));

	  &::before{
      	animation: ball $speed (($speed*$i)/(($num - 1))) cubic-bezier(.4, 0, .6, .1) alternate infinite;
      }
    }
}

{% endhighlight %}


And that's the key. The **delay between balls must be always the same as the speed** of the animation. An <s><code>ease-in-out</code></s> `cubic-bezier(.4, 0, .6, 1)` animation is required to get the circular shape. Otherwise it'd be deformed. If you're wondering why I am substracting 1 from the `$num`, it's just because I added 1 to it so it worked directly in the `@for` directive.


**UPDATE**: Even though the `ease-in-out` function creates this circular illusion on Chrome, other browser have presented different behaviours for it. That's why I've found the right `cubic-bezier` values for it so it works the same across browsers.


##Patching and fixing
If you had follow the steps, you must be facing a problem here. The balls take some time to form that circular shape and you don't like that. Well, I solved that by animating the whole track with the ball within it:


{% highlight sass %}

@keyframes show{
  5%, 40%{
    background: transparent;
    opacity: 1;
  }
  60%,95%{
    opacity: 1;
    background: #222;
  }
  100%{
    opacity: 1;
    background: transparent;
  }
}

{% endhighlight %}


First, I show the balls by setting the opacity to 1. After a while (from 5% to 40% of the time) the track gets a background, to make clear how the illusion works. It stays like that from 60% to 95% of the time and finally removes the background color from the track.

Then I set the animation for each track on the same code as before. It must last as long as the last track takes to finish its animation, that's why it'll always be `$speed*($num - 1)`.

{% highlight sass %}

@for $i from 1 to $num {
    .ball:nth-child(#{$i}) {
      
      animation: show $speed*($num - 1) (($speed*$i)/(($num - 1))) linear forwards;
      
      transform: rotate((180deg*$i)/(($num - 1)));
      
      &::before{
        animation: ball $speed (($speed*$i)/(($num - 1))) ease-in-out alternate infinite;
      }
    }
}

{% endhighlight %}



There's also a Not Tusi motion which would be formed by spheres in motion creating a still figure. You can check it out [here](http://illusionoftheyear.com/cat/author/alex-rose-henig/).
