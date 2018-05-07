---
layout: icaml
title: Introduction to R
tags: r-language
related: r-language,programming
---
# Introduction to R

R is a programming language and originated in the field of statistics. It is widely accepted as the core language of data science.
As the core of the R language is functional, R has powerful features such as
applying algorithms to data in parallel and passing around functionalities. In addition, it adopted an approach in which a generic language
is valid for all objects. For example, calling
```
plot(A)
```
does something different depending on what A actually is. Therefore, packages in R often create canonical and well-suited visualizations and users
get those just by plotting the respective objects.


# Related

## News
{% if site.posts | size > 0 %}
None found...
{% endif %}

<ul>
{% for post in site.posts %}
  {% if post.categories contains 'r-language' %}

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
 {% endif %}
 {% endfor %}
 
</ul>

## Related Pages

{% assign related =  page.related | split :','  %}

<ul>
{% for post in  site.pages  %}
{% if post.url != page.url %}
{% if post.tags | size > 0 %}
  {% for r in related %}
   {% if post.tags contains r %}
<li>
<a href="{{ post.url }}">{{ post.title }} </b></a>
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
   {% endif %}
   {% endfor %}

{% endif %}
{% endif %}
{% endfor %}
 
</ul>



# Online Resources
