---
layout: page
title: Style guide — Text scope
meta: A guide to the collection of components used throught this site.
syntax: true
---

The `.s-text` class applies this scope. It should wrap an area of user-generated content, where the HTML comes from a CMS. It will set some cross-screen typography styles. It will also provide styles for some classless components for an efortless styling experience.

It's been designed to work across different screen widths with a maximum recommended with of `768px`. The reason behind this is keeping an optimal experience in terms of readability, following rules like the **45 to 75 characters line length** and a proper type/canvas size ratio and negative space, from close-up mobile screens to middle-distance reading from a TV.

The utility `.u-wrap` is available to mantain a proper width, which is used to limit the width of this text.

All the content in this style guide besides the [global scope](/styleguide/global-scope/) section is set in the text scope. Here are the available patterns.

## Second-level heading
Main page headings are `h1` elements, and should be used only once. For further headings, consider using `h2` elements, an example of which appears above.

### Third-level heading
When a section of the content is of less importance or there is a need for sub-section headings, please use `h3` elements, found above.

#### Fourth-level heading
In the case of a long page with many sections or when there's something to be remarked but still not a main part of the content, consider using `h4` elements as found above.

---

## Block elements
These elements will take all the width available. In some cases, they will take even more, as long as there's room.

### Paragraphs
All paragraphs are wrapped in `p` tags.


### Preformatted text
The content in the `pre` element will respect the line breaks you make in the HTML and have a monospace-style font.

```
  ! " # $ % & ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; < = > ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^ _
` a b c d e f g h i j k l m n o
p q r s t u v w x y z { | } ~
```

### Code blocks

[Rouge](http://rouge.jneen.net/) is used to process code blocks and add highlighted syntax. So in your Markdown, use <code>```javascript</code> to start a block of JavaScript code and <code>```</code> to close it. This will break down and wrap every piece in small components to allow the syntax to be highlighted properly. Find an example below:

```javascript
var foo = 3;
console.log(foo); // 3
```

### Unordered lists

- Unordered or bulleted lists are wrapped by an `ul` element.
- Each element of the list is a `li` element.
  - Sublists can be created adding a `ul` in any `li` following the same principle.
- Unordered lists should be used when order is not relevant.

### Ordered lists

1. This is the first item of an ordered list, indicated by the `ol` element.
2. Ordered lists should be used for:
    1. A list of steps that must be followed in order.
    2. An enumeration where order relates to some other parts of the content.
    3. A list of options available related with the content.
3. Just like the unordered lists, each item is a `li` element.

### Blockquote
Block quotes are pieces of HTML wrapped in a `blockquote` tag. It's recommended to use a paragraph in a blockquote. This pattern should be used to make references to other resources. Like here, quoting Jon Postel.

> "Be conservative in what you do, be liberal on what you accept from others"  
 – _Robustness principle_ by [Jon Postel](https://tools.ietf.org/html/rfc1122#page-12)

### Images

Images should be implemented with an `img` tag, with a `picture` wrapper when necessary. A short description for the image must always be provided in the `alt` attribute.

<img src="//placehold.it/900x300/006699/ffffff?text=Same%20width%20as%20container" alt="A placeholder image to showcase the image pattern">

They also can be wrapped in a `figure` element with a `.u-expand` utility class, which will make the images expand for greater visibility on bigger screens and ignore the margins on small ones. 

<figure class="u-expand">
<img src="//placehold.it/800x250/006699/ffffff?text=Extra%20legroom" alt="A placeholder image to showcase the image pattern">
</figure>

### Embeds

Usually embeds are given in the form of `iframe` elements. If the content is a video, it should be wrapped with a `div` element with the `.c-embed` class. This will make the `iframe` responsive, giving it fluid width an a fixed 16:9 aspect ratio. Here's an example from vimeo: 

<div class="c-embed">
<iframe src="https://player.vimeo.com/video/118146193" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/118146193">The Long Web by Jeremy Keith &ndash; An Event Apart Video</a> from <a href="https://vimeo.com/zeldman">Jeffrey Zeldman</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
</div>

You can combine this class with the `.u-expand` and get the same results we got on images. Here's a YouTube video as an example: 

<div class="c-embed u-expand">
<iframe width="560" height="315" src="https://www.youtube.com/embed/KaOC9danxNo" frameborder="0" allowfullscreen></iframe>
</div>

These two patterns are not only applicable to video embeds, but also other kinds of `iframe` elements like Codepen or JSbin embeds.

### Horizontal rule

The `hr` element represents a separation of sections that may not be connected to each other in any way. It should be used for transitions to other topics within the same content. For example now, we are moving from block elements to inline elements, so it's a perfect use case.

---

## Inline elements 
Inline elements are meant to be used within paragraphs and lists, but in some cases they can be used elsewhere. They should be used to provide a function, either visual or interaction-wise.

### Links
Linked content should be wrapped in an `a` tag and use an `href` attribute with an URL in it. The text in the link should always be related to the content of the linked resource and never a pointer like "this" or "click here". Example: Read more about accesibility on [The A11Y project](http://a11yproject.com).

### Bold and italic
**Bold** content should be wrapped in `strong` tags when semantically relevant or `b` tags in cases of visual differentiation. _Italic_ content follows the same rules with `em` and `i` respectively.

### Inline code 
For inline code, the `code` tag should be used. It should never be used for more than a single word or a `key: value` pair.

