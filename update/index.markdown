---
author: ddie
comments: false
date: 2012-11-27 16:13:55+00:00
layout: page
slug: update
title: Updates
wordpress_id: 637
---

<ul>
  {% for post in site.posts %}
    <li>
       <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
