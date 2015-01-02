---
layout: page
title: Newsletters
permalink: /nls/
---

{% for post in site.posts %}
	<p>in for loop! </p>
	{{post.title}}
	{{post.categories}}
	{% if {{post.categories}} == "newsletter" %}
		<p> in if statement! </p>
		{{post.title}}
	{% endif %}

{% endfor %}

<a href="#" class="scrollToTop"><i class="fa fa-angle-up"></i></a>
<!--back to top end-->
{% include javascript_clusterfuck.html %}