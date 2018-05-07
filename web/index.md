---
layout: icaml
title: Interdisciplinary Center for Applied Machine Learning
order: 10
link: Home
categories: homepage
---
# Introduction

The Interdisciplinary Center for Applied Machine Learning aims at increasing the accessibility of machine learning
across disciplines. Therefore, we conduct courses and events, collect and comment information, and provide a flexible
platform for machine learning inside the browser.


We acknowledge the funding from the [Federal Ministry of Education and Research](http://www.bmbf.de).

# News
<ul>
{% for post in site.posts %}
<li>
<a href="{{ post.url }}"><time>{{ post.date | date: "%B %e, %Y" }}</time>: &nbsp;<b>{{ post.title }} </b></a>
{% comment %}
<p>
    {% if p.content contains "<!--content-->" %}
        {% assign extract = p.content | split: "<!--content-->" | last  %}
        {{ extract | strip_html}}
    {% else %}
        {{ post.excerpt | strip_html}}
    {% endif %}
</p>
{% endcomment %}
</li>
 {% endfor %}
 
</ul>


