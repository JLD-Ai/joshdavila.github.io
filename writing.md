---
title: Writing
permalink: /writing/
description: Essays on AI governance, art, data ownership, labor, disclosure, and technological ethics.
---
<section class="hero">
  <p class="eyebrow">Selected public writing</p>
  <h1>AI, art, data, and the legitimacy of technological institutions.</h1>
</section>

<section class="section">
  <div class="article-list">
  {% assign sorted_writings = site.data.writings | sort: "publication_year" | reverse %}
  {% for writing in sorted_writings %}
    <article class="article">
      {% if writing.image %}
      <img src="{{ writing.image | relative_url }}"
           alt="Cover image for {{ writing.title }}"
           loading="lazy"
           decoding="async">
      {% endif %}
      <div>
        <p class="card-meta">{{ writing.publication_year }} · {{ writing.type }} · {{ writing.platform }}</p>
        <h2><a href="{{ writing.url }}" target="_blank" rel="noopener noreferrer">{{ writing.title }}</a></h2>
        <p>{{ writing.summary }}</p>
      </div>
    </article>
  {% endfor %}
  </div>
</section>
