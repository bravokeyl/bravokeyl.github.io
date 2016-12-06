---
title: Changing Pagination Text
thumbnail:
date: 2013-12-22 15:52:22
description: Code snippet to change paginantion text in Genesis child theme
categories:
- wordpress
- genesis
tags:
- pagination
keywords: wordpress, pagination, geneis, change, text
---
```
/* Adding Filter to change previous link text */
add_filter(‘genesis_prev_link_text’,’spi_prev_text’);

/* Adding Filter to change next link text */
add_filter(‘genesis_next_link_text’,’spi_next_text’);

function spi_prev_text() {
  $link_text = ‘« Prev’;
  return $link_text;
}

function spi_next_text() {
  $link_text = ‘Next »’;
  return $link_text;
}
```
