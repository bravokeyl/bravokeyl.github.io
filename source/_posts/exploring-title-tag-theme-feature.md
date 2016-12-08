---
title: Exploring title_tag theme feature
date: 2015-01-10 23:51:32
schematype: TechArticle
description: Title Tag is a theme feature, first introduced in WordPress version 4.1. We should use add_theme_support() in the functions.php file in order to support title tag.
categories:
- wordpress
- core
tags:
- title_tag
---

It’s close to a month since WordPress 4.1 released , it’s packed with several new awesome features like

- Better Language Support
- Improving [Taxonomy, Date, Meta and Comment queries](https://make.wordpress.org/core/2014/10/20/update-on-query-improvements-in-4-1/)
- Distraction Free Writing
- Better support for`<title>`tag
- [New Template tags](https://make.wordpress.org/core/2014/12/04/new-template-tags-in-4-1/)
- Inline Image Editing
- Customizer API Improvements

Here in this post we are going to explore the new theme feature *`title_tag`*. We can easily add support for *`title_tag`* using.
<!-- more -->
```
function bk_setup() {
 add_theme_support( 'title-tag' );
}
add_action( 'after_setup_theme', 'bk_setup' );
```

This theme feature is available since WordPress 4.1 . To enable support  in existing themes, use

```
if ( ! function_exists( '_wp_render_title_tag' ) ) :
 function bk_render_title() {
?>
  <title><?php wp_title( '|', true, 'right' ); ?></title>
<?php
 }
 add_action( 'wp_head', 'bk_render_title' );
endif;
```

By adding support for *`tilte_tag`* , we are saying that our themes don’t add titles on their own and WordPress should not worry about duplication of titles, which means we being theme authors are not going to add  **`<title>….</title>`** in our document head.

Anyway you can still use wp_title filter to modify the output to meet your taste it’s your choice.You can ask what’s the using of this as  it is just adding title tag which we were doing earlier.

>Well, the benefits of using something like this is basically standardization & reliability.This is the first step in adding a more robust means of generating and outputting the title tag.

Right now, the theme could be doing just about anything to create the document title. We have been trying, for a very long time, to enforce a simpler approach where themes should only include the results of a wp_title() call in the title. By adding a core supported approach for this, a theme can more easily ensure that they are using the same method to create the document title as everybody else.

This standard approach allows a plugin to then be able to reliably modify the document title and know that it will work in any theme using the same standard approach. The benefits are therefore long term, for compatibility all around. By taking it out of the hands of the theme, all the other code can more easily support the standard and allow for more compatible code.

Under the Hood :

Core trac : [#18548](https://core.trac.wordpress.org/ticket/18548)

Files changed:

- default-filters.php
- general-template.php
- theme.php

A new action (**_wp_render_title_tag**) is hooked to wp_head which runs first i.e, before wp_enqueue_scripts.
