---
title: Mixing colors with box-shadow
meta: An explanation about the color-spectrum mixing effect we can get with shadows.
syntax: true
---

I may have said this before, but I love when CSS is used in ways it isn't intended and results in beautiful things that couldn't have been done without thinking out of the box. **This is an explanation of a [codepen demo](http://codepen.io/jaicab/pen/xicaj/)** I did some time ago where shadows got mixed creating a nice color spectrum effect.

First of all, if you never have used `box-shadow` for anything but actual shadows, you have to change you point of view and see [what you can with it](/2014/07/21/box-shadow-out-of-the-box/). It'll help you understand the basics for this demo.

## The idea
When this idea hit me, it was just about mixing all the colors in the color spectrum with shadows in order to keep the number of elements to a minimum. But during the process other ideas came up. Let's see what we need this far.

- An element: Since everything is going to be happening in the shadows a single HTML element is required. I used a `div`, but it could be done with the body element too.
- Rounded element: I wanted the shadows to be rounded so the element they're casted from must be also rounded. It also needed to be at least `0.5em` in size to get a rounded border.
- Spread the shadows in a circular form: Using the circle formula we can spread the shadows evenly around the element.
- Variable number of shadows, each of one color: I needed to set a color per shadow and also mantain it in a variable so you could change the number any time.


## Divide the color spectrum
To get all the colors in the color spectrum we can easily set up a Sass function which divides it in as many pieces as we want (`$total`) and returns the one we want (`$i`).

```scss
@function get-color($i, $total){  
  $base-colour: #dfef45;
  $spectrum: 360deg;
  $offset: 0deg;
  @return adjust-hue($base-colour, $offset + $spectrum / $total * $i);
}
```

Now that we know how to assign different colors of the spectrum, let's create the shadows and spread them around.

## The parametric equation of a circle
In order to achieve this circular spread of the shadows, we have to understand this equation. Some of you may remember it from high school or college, but here's a quick explanation for those who don't.

<div class="media">
<p data-height="400" data-theme-id="7008" data-slug-hash="ifJHr" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/jaicab/pen/ifJHr/'>Equation of a circle, graphic description</a> by Jaime Caballero (<a href='http://codepen.io/jaicab'>@jaicab</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
</div>

As you can see on the graph, any point on the circle is based on two distances to the center. These distances can be calculated with a trigonometric equation:

>x = r * cos(t)    
y = r * sin(t)

Where **r** is the radius, **t** the angle, **x** the horizontal coordinate and **y** the vertical one. Now we have to apply this equation to `box-shadow`. However, **Sass can't handle trigonometric** functions out of the box so you must include [Compass](http://compass-style.org/reference/compass/helpers/trig/) to make them work. Of course you can also create your own functions if you like Vanilla Sass more.

But for this demo first we need to control how many points we want on the circle and split the circle (360deg) between them. Usign Sass lists we can get this done with a function:


```scss
@function shadow($i, $total){
	@return 
		(($colours-size*2) * sin(($i) * (360deg / $total))) 
    	(($colours-size*2) * cos(($i) * (360deg / $total))) 
    	0 
    	$colours-size 
    	rgba(get-color($i, $total), 0.2);
}

@function build-colours() {
	$shadows: ();
	@for $i from 0 to $colours-tones {
		$shadows: append($shadows, shadow($i, $colours-tones), comma);
	}
	@return $shadows;
}

.colours{
	width: .5em;
	height: .5em;
	border-radius: 50%;

	position: absolute;
	top: 0; right: 0; bottom: 0; left: 0;
	margin: auto;

	background: transparent;

	box-shadow: build-colours();
}
```

The `shadow()` function sets the values of the box-shadow property for a `$i` position given. The first two values are the coordinates, calculated with the equation of the circle. You can see the angle is proportional to the position, this way the shadows will be distributed proportionally. The radius is double the size of the shadow because I want to create a ring.

Take into account that is the spread and not the size value which is given a value. The actual element is small but we want a big solid shadow. You may have also noticed that I had to lower the alpha channel of the color in order to get that mixing effect. Other way the shadows would have overlapped each other.

The `build-colors()` function creates a list of shadows and joins them using `append()`. If you have never used Sass lists go and check out [this article](http://hugogiraudel.com/2013/07/15/understanding-sass-lists/) by Hugo Giraudel.

So combining all this code you should get something like this:

<div class="media">
<p data-height="500" data-theme-id="7008" data-slug-hash="phrzf" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/jaicab/pen/phrzf/'>Article: Mixing colors with box-shadow #1</a> by Jaime Caballero (<a href='http://codepen.io/jaicab'>@jaicab</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
</div>

Nice, isn't it? The colors are mixed properly, the shape of the ring is right, all the shadows are spread evely... but it defenitely needs something else, something that makes it more vivid and colorful. 


## Animation to the rescue
An animation or transition always (if properly executed) improves the experience. Since we're mixing colors, it occurred to me to used primary colors as a initial state.

Going from 3 to `$colour-tones` shadows would have been too abrupt, so we'll spread **all the shadows in these 3 positions and colors**, and then animate them to their final color and positon. By doing it this way, the shadows actually seem like they're splitting into multiple colors rather than going from transparent to the final color.


```scss
@function shadow($i, $total, $alt: false){
  @if ($alt){
    @return 
      (($colours-size*1) * sin(($i) * (360deg / $total))) 
      (($colours-size*1)  * cos(($i) * (360deg / $total))) 
      0 
      $colours-size rgba(get-color($i, $total), 0.9);
  }@else{
    @return 
      (($colours-size*2) * sin(($i) * (360deg / $total))) 
      (($colours-size*2)  * cos(($i) * (360deg / $total))) 
      0 
      $colours-size rgba(get-color($i, $total), 0.2);
  }
}

@function build-colours($alt: false) {
  $shadows: ();
  
  @if ($alt){
	@for $i from 0 to $colours-tones {
      $shadows: append($shadows, shadow($i, 3, true), comma);
    }
  }@else{
  	@for $i from 0 to $colours-tones {
      $shadows: append($shadows, shadow($i, $colours-tones), comma);
    }
  }
  @return $shadows;
}

@keyframes spectrum{
	0, 10%{
    box-shadow: build-colours(true);
    transform: rotate(0deg);
  }
  90%,100%{
    box-shadow: build-colours();
    transform: rotate(360deg*$colours-laps);
  }
}
```

Using the `$alt` parameter in the functions, I created the initial disposition of the shadows and then applied everything on an animation. This initial disposition is also closer to the center, which combined with the rotate transformation, creates a centrifugal force effect that makes it look a little bit more realistic.

The last thing was to setting the animation. I used a `cubic-bezier()` function to create a little bounce, which applies to the transform and box-shadow creating a nice effect

```scss
animation: spectrum $colours-speed 1s cubic-bezier(.33,-0.46,.22,1.09) infinite alternate;
```

And the final result should look like this:

<div class="media">
<p data-height="450" data-theme-id="7008" data-slug-hash="xicaj" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/jaicab/pen/xicaj/'>Mixing colors with box-shadow</a> by Jaime Caballero (<a href='http://codepen.io/jaicab'>@jaicab</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
</div>

I hope you've understood how this works and have learned something new. If you have any doubts, please feel free to [fire me a tweet](http://twitter.com/{{site.twitter}}). Do you think you can do better? Go on and fork it on Codepen.