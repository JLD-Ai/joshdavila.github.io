---
title: Works
permalink: /works/
description: Selected art projects and exhibitions by Josh Davila.
---
<section class="hero">
  <p class="eyebrow">Selected bodies of work</p>
  <h1>Art as a study of representation, perception, and agency.</h1>
</section>

<section class="section">
  <div class="card-grid">
  {% for project in site.data.projects %}
    {% if project.status != "needs assets" %}
    <article class="card">
      {% if project.hero_image %}<img class="card-media" src="{{ project.hero_image | relative_url }}" alt="{{ project.hero_alt }}">{% endif %}
      <div class="card-body">
        <p class="card-meta">{{ project.date_display }} · {{ project.status }}</p>
        <h2>{{ project.title }}</h2>
        <p>{{ project.summary }}</p>
        {% if project.page_url %}<a class="text-link" href="{{ project.page_url | relative_url }}">View project →</a>{% endif %}
      </div>
    </article>
    {% endif %}
  {% endfor %}
  </div>
</section>

<section class="section callout">
  <h2>Projects in development</h2>
  {% for project in site.data.projects %}
    {% if project.status == "needs assets" %}
      <h3>{{ project.title }}</h3>
      <p>{{ project.summary }}</p>
    {% endif %}
  {% endfor %}
</section>
