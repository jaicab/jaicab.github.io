---
title: Style guide
meta: A guide to the collection of components used throught this site.
---

This site has a small style guide (or more precisely, pattern library) due to a focus on reusable components. The patterns have been grouped by scope, making it easy to understand where to use each.

  - [Text scope](/styleguide/text-scope/) — For CMS generated HTML.
- [Global scope](/styleguide/global-scope/) — Every other pattern.

### Guidelines

There's also some guidelines that should be followed when extending the codebase. Check the [colophon](/colophon/) more more technical information.

- All pages use the `page` layout by default. This means that all the content will be in the text scope.  To avoid redundancy, if you just want to create a page then don't specify a layout. Same thing applies to posts with the `post` layout.
- When creating a new layout or pattern, check the style guide to see if you can reuse/extend existing ones. This avoids code duplication and manteinance problems.
- Favour Markdown files (<code>.md</code> by convention) over HTML, so they can be read when accessed on the GitHub repo.
- If a post or page contains code blocks, set `syntax: true` in the front-matter to load syntax highlighting only when necessary.

      
