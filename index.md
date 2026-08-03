---
title:
description: Artist, philosopher, veteran, and independent researcher examining institutional legitimacy, representation, agency, and technological power.
---
<section class="hero">
  <p class="eyebrow">Art · Philosophy · AI · Institutional Research</p>
  <h1>Art and research about how systems represent, classify, and exercise power over human beings.</h1>
  <p class="lede">{{ site.data.profile.short_bio }}</p>
  <div class="link-row">
    <a class="button" href="{{ '/works/' | relative_url }}">View selected art</a>
    <a class="button" href="{{ '/research/' | relative_url }}">Explore the research</a>
    <a class="button" href="{{ '/writing/' | relative_url }}">Read selected writing</a>
  </div>
</section>

<section class="section callout">
  <h2>Central inquiry</h2>
  <p>{{ site.data.profile.central_question }}</p>
</section>

<section class="section">
  <h2>Featured work</h2>
  <div class="card-grid">
  {% assign featured = site.data.projects | where: "priority", "flagship" %}
  {% for project in featured %}
    <article class="card">
      {% if project.hero_image %}<img class="card-media" src="{{ project.hero_image | relative_url }}" alt="{{ project.hero_alt }}">{% endif %}
      <div class="card-body">
        <p class="card-meta">{{ project.date_display }}</p>
        <h3>{{ project.title }}</h3>
        <p>{{ project.summary }}</p>
        {% if project.page_url %}<a class="text-link" href="{{ project.page_url | relative_url }}">View project →</a>{% endif %}
      </div>
    </article>
  {% endfor %}
  </div>
</section>
