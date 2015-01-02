---
layout: page
title: Newsletters
permalink: /nls/
---

{% for post in site.posts %}
	{% if post.categories contains 'newsletter' %}
		<div class="newsletter container section-padding">
			<div class="row">
		        <div class="col-md-12">
		            <div class="center-heading text-center">
		                <h2 class=" wow animated fadeInUp"  data-wow-duration="700ms" data-wow-delay="100ms">{{page.title}}</h2>
		                <span class="icon"><i class="fa fa-table"></i></span> 
		            </div><!--center heading-->
		        </div>
		    </div>
		    <div class="divided-50"></div>
		    <div class="row">
		        <div class="col-md-12 margin-btm-30">
		            <div class="plan-wrap wow animated fadeInUp"  data-wow-duration="700ms" data-wow-delay="400ms">
		                <div class="price-title center-heading">
		                    <h4>Worship Schedule</h4>
		                </div><!--plan title-->
		                <ul class="plan-features list-unstyled text-center">
		                	{% for wservice in site.data.worship_services %}
		                		{% if wservice.year == page.year and wservice.month contains page.month %}
		                			<li> {{wservice.month}} {{page.month}}
			                    	<li>{{wservice.date}} <i class="fa fa-check"></i> {{wservice.service}} <i class="fa fa-check"></i> {{wservice.celebrant}} </li>
			                    {% endif %}
		                    {% endfor %}
		                </ul><!--WORSHIP SERVICES LIST-->
		            </div><!--plan wrap-->
		        </div><!--plan col-->
		        <div class="col-md-6 margin-btm-30">
		            <div class="plan-wrap popular wow animated fadeInUp"  data-wow-duration="700ms" data-wow-delay="500ms">
		                <div class="price-title center-heading">
		                    <h4>Lectionary</h4>
		                </div><!--plan title-->
		                <ul class="plan-features list-unstyled text-center">
		                	{% for lect in site.data.lectionaries %}
		                		{% if lect.year == page.year and lect.month == page.month %}
		                			<li> {{lect.month}} {{page.month}}
			                    	<li>{{lect.date}} <i class="fa fa-check"></i> {{lect.service}} <i class="fa fa-check"></i> {{lect.celebrant}} </li>
			                    {% endif %}
		                    {% endfor %}
		                </ul><!--LECTIONARY LIST-->
		            </div><!--plan wrap-->
		        </div><!--plan col-->
		        <div class="col-md-6 margin-btm-30">
		            <div class="plan-wrap wow animated fadeInUp"  data-wow-duration="700ms" data-wow-delay="600ms">
		                <div class="price-title center-heading">
		                    <h4>Bible Reading</h4>
		                </div><!--plan title-->
		                <ul class="plan-features list-unstyled text-center">
		                	{% for bibread in site.data.bible_readings %}
		                		{% if bibread.year == page.year and bibread.month == page.month %}
		                			<li> {{bibread.month}} {{page.month}}
			                    	<li>{{bibread.date}} <i class="fa fa-check"></i> {{bibread.service}} <i class="fa fa-check"></i> {{bibread.celebrant}} </li>
			                    {% endif %}
		                    {% endfor %}
		                </ul><!--BIBLE READING LIST-->
		            </div><!--plan wrap-->
		        </div><!--plan col-->
		    </div>
		    <div class="row">
		        <div class="col-md-6 margin-btm-30">
		            <div class="plan-wrap wow animated fadeInUp"  data-wow-duration="700ms" data-wow-delay="400ms">
		                <div class="price-title center-heading">
		                    <h4>Birthdays</h4>
		                </div><!--plan title-->
		                <ul class="plan-features list-unstyled text-center">
		                	{% for bday in site.data.birthdays %}
		                		{% if bday.year == page.year and bday.month == page.month %}
		                			<li> {{bday.month}} {{page.month}}
			                    	<li>{{bday.date}} <i class="fa fa-check"></i> {{bday.service}} <i class="fa fa-check"></i> {{bday.celebrant}} </li>
			                    {% endif %}
		                    {% endfor %}
		                </ul><!--BIRTHDAYS LIST-->
		            </div><!--plan wrap-->
		        </div><!--plan col-->
		        <div class="col-md-6 margin-btm-30">
		            <div class="plan-wrap popular wow animated fadeInUp"  data-wow-duration="700ms" data-wow-delay="500ms">
		                <div class="price-title center-heading">
		                    <h4>Wedding Anniversaries</h4>
		                </div><!--plan title-->
		                <ul class="plan-features list-unstyled text-center">
		                	{% for wedding in site.data.wedding_anniversaries %}
		                		{% if wedding.year == page.year and wedding.month == page.month %}
		                			<li> {{wedding.month}} {{page.month}}
			                    	<li>{{wedding.date}} <i class="fa fa-check"></i> {{wedding.service}} <i class="fa fa-check"></i> {{wedding.celebrant}} </li>
			                    {% endif %}
		                    {% endfor %}
		                </ul><!--WEDDING ANNIVERSARY LIST-->
		            </div><!--plan wrap-->
		        </div><!--plan col-->
		        <div class="col-md-12 margin-btm-30">
		            <div class="plan-wrap wow animated fadeInUp"  data-wow-duration="700ms" data-wow-delay="600ms">
		                <div class="price-title center-heading">
		                    <h4>Prayer Meetings</h4>
		                </div><!--plan title-->
		                <ul class="plan-features list-unstyled text-center">
		                	{% for prayer in site.data.prayer_meetings %}
		                		{% if prayer.year == page.year and prayer.month == page.month %}
		                			<li> {{prayer.month}} {{page.month}}
			                    	<li>{{prayer.date}} <i class="fa fa-check"></i> {{prayer.service}} <i class="fa fa-check"></i> {{prayer.celebrant}} </li>
			                    {% endif %}
		                    {% endfor %}
		                </ul><!--PRAYER MEETING LIST-->
		            </div><!--plan wrap-->
		        </div><!--plan col-->
		    </div> 
		    <div class="row">
		        <div class="col-md-6 margin-btm-30">
		            <div class="plan-wrap wow animated fadeInUp"  data-wow-duration="700ms" data-wow-delay="400ms">
		                <div class="price-title center-heading">
		                    <h4>Bible Study</h4>
		                </div><!--plan title-->
		                <ul class="plan-features list-unstyled text-center">
		                	{% for bibstudy in site.data.bible_studies %}
		                		{% if bibstudy.year == page.year and bibstudy.month == page.month %}
		                			<li> {{bibstudy.month}} {{page.month}}
			                    	<li>{{bibstudy.date}} <i class="fa fa-check"></i> {{bibstudy.service}} <i class="fa fa-check"></i> {{bibstudy.celebrant}} </li>
			                    {% endif %}
		                    {% endfor %}
		                </ul><!--BIBLE STUDY LIST-->
		            </div><!--plan wrap-->
		        </div><!--plan col-->
		        <div class="col-md-6 margin-btm-30">
		            <div class="plan-wrap popular wow animated fadeInUp"  data-wow-duration="700ms" data-wow-delay="500ms">
		                <div class="price-title center-heading">
		                    <h4>Misc</h4>
		                </div><!--plan title-->
		                <ul class="plan-features list-unstyled text-center">
		                	{% for misc in site.data.misc %}
		                		{% if misc.year == page.year and misc.month == page.month %}
		                			<li> {{misc.month}} {{page.month}}
			                    	<li>{{misc.date}} <i class="fa fa-check"></i> {{misc.service}} <i class="fa fa-check"></i> {{misc.celebrant}} </li>
			                    {% endif %}
		                    {% endfor %}
		                </ul><!--MISC LIST-->            </div><!--plan wrap-->
		        </div><!--plan col-->
		    </div>         
		</div>
	{% endif %}

{% endfor %}

<a href="#" class="scrollToTop"><i class="fa fa-angle-up"></i></a>
<!--back to top end-->
{% include javascript_clusterfuck.html %}