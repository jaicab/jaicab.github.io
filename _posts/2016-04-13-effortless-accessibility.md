---
title: Effortless accessibility
meta: With only a couple of rules, you can assure some basic accessibility.
syntax: true
---

Everyone thinks accessibility is important. But maybe makers are disregarding accessibility features due to their own assumptions.

In the case of web developers, I've found people often overlook this topic, maybe due to the open nature of the Web. The only thing most developers often do care about that improves accessibility is HTML5 markup. They don't realise how easy it is to create an accessible experience by default. Also, any accessibility improvements are good for SEO!

We'll be using a Mac for the examples as it's the easiest OS to test on and a device you'll most likely have access to.

## Testing content accessibility

**Screen readers** will process your HTML and try to make some sense out of it. The most popular are [JAWS](http://www.freedomscientific.com/Products/Blindness/JAWS) on Windows and [VoiceOver](http://www.apple.com/accessibility/osx/voiceover/) (which comes embedded in the OS) for Mac. To switch on VoiceOver, use <kbd>&#8984; Cmd</kbd> + <kbd>F5</kbd>.

**Keyboard navigation** means using only the keyboard to navigate through a site. Even though the commands can get pretty complex, you probably know some if not all of these from filling out online forms.

- Press <kbd>&#8677; Tab</kbd> to change focus to the **next** focusable element.
- Press <kbd>&crarr; Enter</kbd> to submit an action (form submit, trigger link, etc).
- Hold <kbd>&uArr; Shift</kbd> and press <kbd>&#8677; Tab</kbd> to focus the **previous** focusable element.

I ask you now to go to the site you're working on now and try these two experiences for yourself. It'll take a minute. Turn on VoiceOver while on a page and then refresh it so it reads the whole thing, see if it makes any sense. Try to go through the menu just with the keyboard. If you have time, try to complete the user flow.

Frustrated already? Well, let's see how to make it better.

### Accesible content

Providing an accessible HTML markup means basic accessibility for screen reader and keyboard navigation users.

- **[ARIA landmark roles](http://alistapart.com/column/wai-finding-with-aria-landmark-roles)**: In HTML5, some of these landmarks are implicit in the element. But browser support is not perfect yet, so I'd recommend adding them too. This helps screen readers understand what that area of content is, extending semantics. Example: `<header role="banner">`.
- **Language attribute**: Screen readers will use the the accent specified on this attribute. Example: `<html lang="en">`.
- **Don't forget about `alt` text on images**: You probably do this already on `img` elements. Don't use the words "image" or "photo" as the screen readers will already identify it as an image. Read more about this on [A List Apart](http://alistapart.com/blog/post/on-alt-text).
- **Label text on SVGs**: If you're serving an image as inline SVG, you won't have the `alt` attribute. But surely your SVG will have a `title` element in it. Now you just need to give it an `id` attribute, and add `aria-labelledby` on the parent `svg`. Check [my logo](https://github.com/jaicab/jaicab.github.io/blob/master/images/logo.svg?short_path=49c7b03) as an example.
- **Avoid using lists for navigation**: Screen readers will read the entire list first and then read each link individually, wasting screen reader user's time. So just put inline `a` tags in the `nav` element.
- **Document outline**: The general structure of the HTML should make sense, like if you were putting a book together. The keyboard navigation will go from top to bottom, and the screen readers will read the content in that order, so the order of the HTML elements is important.
- **Linked text relates to linked resource**: This is not only good for accessibility but also a very good SEO practice. Imagine every link out of the paragraph's context. If you can still relate the linked text to the content of the linked resource, you're good to go. As a counterexample, the opposite would be to link text like "click here" or "this page".

This will make a much less frustrating experience. Screen readers can give a more detailed explanation of what's on the page and what element you're on.

If you want to take this a step further, I'd recommend adding the `.visuallyhidden` pattern to your workflow. You probably have it on your CSS already (it comes with the [HTML5 boilerplate](https://html5boilerplate.com)). To use it, just add `span` elements with that class to add readable but not visible text to your content.

```html
<a href="/2016/04/13/effortless-accessibility/">
  <span class="visuallyhidden">Read blogpost </span>
  Effortless accessibility
</a>
```

Now visually, the _Read blogpost_ is not there, but screen readers will read it with the title, making sense of the list of titles.

### Accessible interactions

If you use semantic HTML and unobtrusive JavaScript, you have almost everything checked for accessibility.

- **Use the right tool for the job**: If you use the right HTML for each task, you can save a lot of work in terms of making things accessible. Using `button` elements instead of `span` elements for buttons, means screen readers will understand it's not a button, but text. To make it work like a button, you'd need to add `role="button"` and a key event handler to trigger it with the spacebar. Lots of unnecessary work. A button is a button is a button.
- **Don't change standarised behaviour**: Javascript links, right click overrides and parallax are some examples that override the browser's expected behaviour. This is not only frustrating for users with disabilities but every other user too. If I open a link in a new tab, I expect that to happen.
- **Make sure your buttons/links have a focus state**: The easiest way of doing this is adding `:focus` wherever you have `:hover`. This way keyboard navigation users will know what element has focus. If the difference between the normal state and the hover one are very subtle, separate these into two and add something easier to identify just for focus.
- **Use ARIA states in JavaScript interactions**: If you develop custom JS interactions, please add this. It’s as easy as changing an `aria-something` when you change something visually. This helps screen readers and keyboard navigation users understand that something has changed and continue there, instead of where they were before triggering that action. See an example for an [off-canvas push menu](https://codepen.io/grayghostvisuals/pen/IkmGF).

## Testing design accessibility

To make a design accessible, you only need to check that people will vision deficiencies, either temporary or permanent, will be able to read the page comfortably. We'll cover colour blindness and partial visual impairment.

**Colour blindness** affects around **1 in 12 men** and **1 in 200 women**. To test for it, I'd recommend [Color Oracle](http://colororacle.org/), a free Windows/Mac app that will change the colour rendering on your screen to match different types of colour blindness. It's great because you can use it to test the site and the design on whatever UI editing software you're using.

**Partial visual impairment** refers to those with limited vision, and testing for them is literally about having a readable and zoomable text. To zoom in a browser, use:

- <kbd>&#8984; Cmd</kbd> + <kbd>+</kbd> to zoom in.
- <kbd>&#8984; Cmd</kbd> + <kbd>-</kbd> to zoom out.
- <kbd>&#8984; Cmd</kbd> + <kbd>0</kbd> to reset the zoom.

Another good test in the design stage is to convert your comps to black and white to check the **contrast ratio**. If all the text is still recognisable, it means the contrast ratio between the colour of the text and the background color is appropiate. You can also try [Lea Verou's tool](http://leaverou.github.io/contrast-ratio/).

### Accesible design

No matter what designers say, it's not that difficult to make a design visually accessible. You just need to follow some standards:

- **Use `em` units for media queries**: Now when zooming on the browser, the design will change accordingly, so it doesn't break and the design is respected.
- **Font size should be at least `16px` on body content**: It's been proved that `16px` is the minimum font size for readable content. You don't have to use it for everything, although it'd be better, but make sure the body content is at least that size. Also, [iOS will auto-zoom](http://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone) in your site when your input's font size is smaller.
- **If you don't design, tell your designers to use [Color Oracle](http://colororacle.org/)**: If the design is not your resposibility, help the design team understand the problem. It's not difficult when checked on an early stage.

## Resources

Besides the ones already linked, here's some resources that could make it easier for you to test or learn about accessibility.

- [Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb): Adds some options to Chrome DevTools, like an Audit that will check colour contrast and non-semantic HTML or contrast properties on the elements inspector.
- [a11y.css](https://ffoodd.github.io/a11y.css/): A bookmarklet that will check your HTML and highlight the problems, give you advice, etc.
- [The A11Y project](http://a11yproject.com/): The place to go to learn about accessibility. You'll find articles and patterns to expand your knowledge about accessibility.

One of the things I love about the Web is its capacity to be accessed by anyone. You will never know what users will be browsing your site.

Every disabled person I've met loves technology, but we are not making it easy for them. Let's be professionals and make our work as accessible as possible.
