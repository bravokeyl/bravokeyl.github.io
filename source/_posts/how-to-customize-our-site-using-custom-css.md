---
title: How to customize our site using custom css
date: 2015-05-03 00:47:39
tags:
---

Most of the times even though we have chosen [right theme](https://bravokeyl.com/how-to-choose-right-theme-for-your-site/) for site that suits our needs , we still need more or need a little bit of styling to be changed or little functionality to be changed.

In this article I  explain step by step procedure on how to change your site’s appearance (not functionality) using custom css.

There are two ways to add custom css:

- Creating a Child Theme
- Using Plugins
- Theme Options (Some themes support option for custom css)
<p></p>

### Why Plugins or Child Themes , can’t i just add css in my theme’s style.css ?
<!-- more -->
Simple answer , **No**. Never do that, Please.

Many people i see in forums ask about how to change my header width and menu items color , background-color and so on when they know css that changes the parts they required , they simply put that in the `style.css`  of their theme which is a **very bad** habit why because if the theme is updated that file gets overridden by newer version and so they loose their changes so they have to add their changes again.

#### **Using Custom CSS Plugins:**

Okay, now I know, I should not change any code in my theme`s `style.css`  then how and where to add code and which plugin to choose.

There are many plugins that helps you to add custom css. Most popular ones as of writing this article are Simple Custom CSS by `John Regan` and Jetpack’s Custom CSS module.

Just active either one of these , if you activated Jetpack’s Module you will see And extra menu item under **Appearance** which is **Edit CSS**.

<amp-img src="customcss.png" width="650" height="300" alt="Jetpack Custom CSS"></amp-img>

You just need to add  your code here right after comments.In the screenshot above you see I have added **div.sharedaddy** … right after comments or you can delete that commented code entirely.This module also has revisions each time you click **Save Stylesheet** a revision is saved. this module will store the last 25 revisions made to any theme. These revisions allow you to look back at the recent changes and revert to an earlier version if you need to.

If you are using **Simple Custom CSS** just after activating you see **Custom CSS** menu item under **Appearance**.

<amp-img src="simplecustomcss.png" width="650" height="300" alt="Simple Custom CSS"></amp-img>

If you click on that new link you see like above but without any code added with just a comment saying  `/* Enter Your Custom CSS Here */`.

You need to add your code here and click on Update CSS button.That’s it , you have now added css.

For these changes you need to know little bit of CSS , it’s not scary you can learn with in no time . If you don’t have time or if you are not into learning then you can find what you ask in support forums or I can help you with that , just hit me here

For example let me show tagline on mobile devices when I’m using **Twenty Fifteen** Theme , by default this theme does not show tagline on mobile devices.

```
.site-description {
     display: block;
 }```

If I add this  after activating either of the plugins you chose..site’s tagline shows up on mobile devices also.
