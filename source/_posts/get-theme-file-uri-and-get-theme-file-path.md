---
title: get_theme_file_uri and get_theme_file_path
schematype: TechArticle
date: 2016-12-06 14:44:31
description:
categories:
- WordPress
- Core
tags:
keywords:
---

[WordPress 4.7 "Vaughan"](https://wordpress.org/news/2016/12/vaughan/) comes with a handful of helper functions and filters making theme developers to code child theme file inheritance easily.

The following are enhanced forms of `get_stylesheet_directory_uri`, `get_stylesheet_directory` and it's parent parts `get_template_directory` , `get_template_directory_uri`.

- [get_theme_file_uri()](https://developer.wordpress.org/reference/functions/get_theme_file_uri/)
- [get_parent_theme_file_uri()](https://developer.wordpress.org/reference/functions/get_parent_theme_file_uri/)
- [get_theme_file_path()](https://developer.wordpress.org/reference/functions/get_theme_file_path/)
- [get_parent_theme_file_path()](https://developer.wordpress.org/reference/functions/get_parent_theme_file_path/)

We will explore why these functions are introduced, what they do and where to use them?

When theming, to enqueue scripts or styles we used to do something like this.

**In a child theme**
```
wp_enqueue_script('my-theme-script-slug',
get_stylesheet_directory_uri().'/js/my-script.js',array(), '1.0', true );
```
**In a parent theme**
```
wp_enqueue_script('my-parent-theme-script-slug',
get_template_directory_uri().'/js/my-script.js',array(), '1.0', true );
```
Using `get_stylesheet_directory_uri()` we get the child theme's root directory uri (*/wp-content/themes/child-theme*) and using `get_template_directory_uri()` we get parent theme's root directory uri(*/wp-content/themes/parent-theme*).

-----
But this type of enqueue has an issue when it comes to child theme inheritance and that is we just can't place a script/style file in the child theme with the same name as that of parent theme that automatically override parent theme's file. That means, if a parent theme is enqueuing `script.js` and if we want to override that file in the child theme, we have to dequeue original file and need to enqueue child version of `script.js` which is a little more work to do.
```
// First dequeue script that comes with parent theme with correct handle
wp_dequeue_script('parent-script');

// Next enqueue child theme version of it
wp_enqueue_script('child-script');
```
-----
Now with WP 4.7, there is no need to dequeue and then enqueue just to override a script that is in the parent, we can use `get_theme_file_uri` while enqueuing like so.

```
wp_enqueue_script('handle',get_theme_file_uri( '/sc.js' ),array(), '1.0');
```

`get_theme_file_uri` first looks for the file in the child theme, if it exists then it returns get_stylesheet_directory_uri, else it returns get_template_directory_uri. If we don't pass any file parameter to the function, it returns current theme stylesheet directory url.

`get_parent_theme_file_uri` directly returns url of parent theme directory if no file is given and the url to the file in parent theme if it is given.

-----
get_theme_file_path and get_parent_theme_file_path returns path to the files on the server like `/var/www/website.com/wp-content/themes/mytheme`.

-----
If we want to use the same functionality for WP versions < 4.7, we can place the following snippet(taken from core itself).
```
if(!function_exists('get_theme_file_uri')){
  function get_theme_file_uri( $file = '' ) {
    $file = ltrim( $file, '/' );

    if ( empty( $file ) ) {
        $url = get_stylesheet_directory_uri();
    } elseif ( file_exists( get_stylesheet_directory() . '/' . $file ) ) {
        $url = get_stylesheet_directory_uri() . '/' . $file;
    } else {
        $url = get_template_directory_uri() . '/' . $file;
    }

    return apply_filters( 'theme_file_uri', $url, $file );
  }
}```

It is recommended that we use these functions for great file inheritance inclusion.
