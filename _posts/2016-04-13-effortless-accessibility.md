---
title: Effortless accessibility
meta: With only a couple of rules, you can assure some basic accesibility.
---

Everyone thinks accessibility is important. Of course people with disabilities should be able to do as much as they physically can. But maybe makers are disregarding accessibility features due to their own assumptions.

In the case of web developers, I've found people often overlook this topic, maybe due to the open nature of the Web. The only thing most developers often do care about that improves accessibility is HTML5 markup. They don't realise how easy it is to create an accesible experience by default.

Let's see how to do that. We'll be using a Mac for the examples as it's the easiest OS to test on and a device you'll most likely have access to.

## Accessible content

Providing an accessible HTML markup means basic accesibility for screen reader and keyboard navigation users.

A screen reader will process your HTML and try to make some sense out of it. The most popular are [JAWS](http://www.freedomscientific.com/Products/Blindness/JAWS) on Windows and [VoiceOver](http://www.apple.com/accessibility/osx/voiceover/) (which comes embedded in the OS) for Mac. To switch on VoiceOver, use <kbd>&#8984; Cmd</kbd> + <kbd>F5</kbd>.

Keyboard navigation means using only the keyboard to navigate through a site. Even though the commands can get pretty complex, you probably know some if not all of these from filling online forms.

- Press <kbd>&#8677; Tab</kbd> to change focus to the **next** focusable element.
- Press <kbd>&crarr; Enter</kbd> to submit an action (form submit, trigger link, etc).
- Hold <kbd>&uArr; Shift</kbd> and press <kbd>&#8677; Tab</kbd> to focus the **previous** focusable element.



There's only a handful of things you should consider 




- Links should be `a` elements and the `href` attribute always contains a real, browser accesible URL.
- Buttons as `button` or `input type="button"` elements.
- 
