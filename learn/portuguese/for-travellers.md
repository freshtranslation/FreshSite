---
layout: master
theme: main
thirds: production
flawless: production
title: Learning Portuguese
header_title: Learning Portuguese
wrap-section: no
---
<div class="intro constrained" style="padding-top: 80px;">
	<div class="thirds-content">
			
		<div class="two-thirds normal-read two-columns">
{% if page.wrap-section %}<section>{% endif %}

<h2>Portuguese for Travellers</h2>

<a style="position:absolute; left:0;" href="https://itunes.apple.com/us/book/portuguese-for-travelers/id568515833" target="_new">
<img width="186" height="186" src="/images/Portuguese for Travelers.png"></a>

<p style="padding-left:200px;">
Are you traveling to <b>Portugal</b> or <b>Brazil</b> and want to learn enough <b>Portuguese</b> to get by? Then this book is for you. Written as an interactive <b>multi-touch</b> book for beginners, it brings the language and the situations alive for you.</p><p style="padding-left:200px;">It takes you through the common situations that you will be in on your trip and gives you interactive exercises for learning the right vocabulary. </p><p style="padding-left:200px;">It comes with integrated audio so you can learn the right <b>pronunciation</b>. </p><p style="padding-left:200px;">It is a good way to prepare before you travel, but it is also the perfect companion to bring on your trip to help you when you are in the situation and need help saying the right thing.
</p>
<p>The book is just out, there are no corrections yet.</p>

	<h2>More Portuguese</h2>

	We are working on the next book.
	




{% if page.wrap-section %}</section>{% endif %}
		</div>


		<aside class="third splash normal-read two-columns">
{% include about-katty-teaching.html %}
		</aside>
</div></div> 

<div class="main constrained">
	<div class="thirds-content" style="display:none;">
			
		<div class="three-thirds normal-read">
			{% for post in site.posts limit:10 %}
			<article class="wide-third">
			<details>
				<summary>
					<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
					<time class="postdate">
						<span class="postmonth">{{ post.date | date: "%b" }}</span>
						<span class="postday">{{ post.date | date: "%d" }}</span>
					</time>
					{% if post.image %}<img src="{{ post.image }}" class="principal">{% endif %}
					<p>{% if post.summary %}{{ post.summary | truncatewords:50 }}{% endif %}</p>
					<a href="{{ post.url }}">More</a>
				</summary>
			</details>
			</article>
			{% endfor %}
		</div>
</div></div> 

<footer class="constrained">{% include page-footer-etc.html %}{% include page-footer-copyright.html %}
</footer>


