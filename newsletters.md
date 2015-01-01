---
layout: page
title: Newsletters
permalink: /nls/
---
{% for post in site.posts %}
	{% if post.categories == 'newsletter' %}
		<p> in if statement! </p>
		{{site.posts[post]}}
	{% endif %}

{% endfor %}

<a href="#" class="scrollToTop"><i class="fa fa-angle-up"></i></a>
<!--back to top end-->
{% include javascript_clusterfuck.html %}