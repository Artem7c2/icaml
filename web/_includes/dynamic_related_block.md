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
<a href="{{ post.url }}">{{ post.title }} </a>
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