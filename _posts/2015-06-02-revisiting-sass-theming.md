---
layout: post
title: "Revisiting Sass theming"
meta: Sass theming made easy using vary
---

There is no _one way_ to do one thing in Sass. In the end, Sass is nothing more than supercharged CSS. And people love doing CSS their way. This is not a ruleset to follow, but an opinionated set of standards that we use at [Base Creative](http://basecreative.co.uk).

Theming properly is hard. It usually gets messy, inconsistent and difficult to mantain. Over the past few months we've built a couple of websites that required theming.

- [Crafted People](https://craftedpeople.com/): The default color styling for this website is purple. But when a section is dedicated for a homeowner, the purple must change to pink. And when a section is for tradesmen, it must change to green. At the same time, some sections must have elements in pink and green on the same page.
- [Devonshire House Dental](http://www.devonshirehousedental.co.uk/): This site changes the color scheme depending on the target user. If it's for dentists, it has to be a light purple whereas patient pages will have a dark purple.


## Problems on CSS theming
When approaching theming for these websites we found some issues, like:

- **Inconsistent classes**: Crafted People home owners' styling was represented as `homeowner`, `home-owner`, `owner` and `owners`. This inconsistency slowed down the development process as you need to double check which of those representations was used.
- **Slightly different colors on same theme**: Even if we had every color on a variable, we ended up using some hardcoded colors that may differ from the consistent color scheme we wanted.
- **Manteinance**: One of the websites needed a new theme when the project was almost done. Creating all these new selectors in the codebase took a tremendous amount of time.

In the end, mantaining all this stuff was very complicated. It gets to a point when refactoring is not as easy given the classes are being used in the backend too. Trying to unify all the colors isn't easy, as some of them _need_ to be different, whereas others are just inconsistency issues.


## Sketching a solution
Two months ago we got a new project with **4 different themes** and I knew I had to put an end to these issues. This is what we needed:

- A centralised map where all the themes and properties of each theme where set.
- A way of generating all the styles looping through this map, so when we update the map, the CSS gets automatically updated.
- The ability to create body classes as well as BEM modifiers, so we can have template related styling and element-specific ones too.
- Perform different actions for some of the themes and a different action for the rest of them. Some themes may use a color (e.g. color secondary) for a specific element when the rest use another (e.g. color primary).
- A way of playing with all these without being limited. For instance, we may need to create a class that is not a BEM modifier but just a class with the name of the theme.

And so began the build of one of the most interesting mixins I've ever built.


## Introducing vary
You can check out [vary's website](http://jaicab.com/sass-vary/) or its [repo on GitHub](https://github.com/jaicab/sass-vary).
This mixin solves all the issues presented above and achieves all the needed functionalities. It's supported on **Sass 3.4+** and **libsass 3.2+**. 

The most common theming pattern is using a <code>.is-foo</code> body class, where <i>foo</i> is the entity for which the CSS variations are destinated to (e.g. user, admin). Let me show you how that would be done using vary:

{% highlight sass %}
$vary-map: (
  user: (
    'color-primary': blue,
    'border': '1px solid #ff0'
  ),
  admin: (
    'color-primary': pink,
    'border': '10px solid black'
  )
);

.foo{
	background: red;

	@include vary($create: body) {
		background: vary-get('color-primary');
		border: vary-get('border');
	}
}
{% endhighlight %}

And here's the compiled result:

{% highlight css %}
.foo{
	background: red;	
}

.is-user .foo{
	background: blue;
	border: 1px solid #ff0;
}

.is-admin .foo{
	background: pink;
	border: 10px solid red;
}
{% endhighlight %}


And this is just the beggining. vary currently has **4 creation modes**, which have been more than enough for us.

- Body/parent class: The most common way to approach theming is using a body/parent class.
- Body + HTML class: If you need to apply the body class on a selector that contains an HTML class (e.g. if using Modernizr).
- BEM modifier: When differently styled modules need to be present on the same page, the most common approach is to create a modifier.
- Custom: A vary playground. You can create any kind of construction.
		
There are also some very nice features available on every creation mode, that add a lot of **flexibility**:

- Targeted entities: Using the <code>$for</code> parameter you can make vary go through some of the entities from them map, not all of them.
- Excluded entities: The reversed version of the targeted ones. Using the <code>$not</code> parameter, you can exclude entities so vary doesn't loop through them.
- Multiple maps: By default, vary will loop through the entities in <code>$vary-map</code>. But if you have multiple maps of the same kind, you can set any map using the <code>$loop</code> parameter and vary will loop through it instead of the default one.

If you want to know more about these feature and creation modes, I recommend visiting [vary's website](http://jaicab.com/sass-vary/) and giving it a loop. On the [demos' page](http://jaicab.com/sass-vary/demos.html) you will find explained examples with SassMeister demos that you can play with.

I hope that, if you've had these issues in the past, you can prevent them using this mixin. It certainly has made a great impact here at Base. We've been using it for a month now and there has never been any theming scenario that couldn't be covered by vary. Please feel free to [fire me a tweeet](http://twitter.com/jaicab_), [open an issue](https://github.com/jaicab/sass-vary/issues/new) or [send a pull request](https://github.com/jaicab/sass-vary/compare) if you find anything odd or have any suggestions.