---
title: Writing
permalink: /writing/
description: Selected essays on data ownership, labor, art, AI governance, and institutional power.
---
<section class="hero">
  <p class="eyebrow">Selected public writing</p>
  <h1>Arguments about art, data, and the power of institutions.</h1>
  <p class="lede">These essays ask who controls the systems we use, who creates their value, and what people need to challenge them.</p>
</section>

<section class="section">
  <h2>Start here</h2>
  <div class="writing-featured">
    {% for writing in site.data.writings %}
      {% if writing.site_lead %}
      <article class="card">
        <div class="card-body">
          <p class="card-meta">{{ writing.publication_year }} · {{ writing.type }}</p>
          <h3><a href="{{ writing.url }}" target="_blank" rel="noopener noreferrer">{{ writing.title }}</a></h3>
          <p>{{ writing.summary }}</p>
          <p class="card-meta">Read on {{ writing.platform }} ↗</p>
        </div>
      </article>
      {% endif %}
    {% endfor %}
  </div>
</section>

<section class="section">
  <h2>More writing</h2>
  <div class="article-list">
  {% assign sorted_writings = site.data.writings | sort: "publication_year" | reverse %}
  {% for writing in sorted_writings %}
    {% unless writing.site_lead %}
    <article class="article">
      {% if writing.image %}
      <img src="{{ writing.image | relative_url }}"
           alt="Cover image for {{ writing.title | escape }}"
           loading="lazy"
           decoding="async">
      {% endif %}
      <div>
        <p class="card-meta">{{ writing.publication_year }} · {{ writing.type }} · {{ writing.platform }}</p>
        <h3><a href="{{ writing.url }}" target="_blank" rel="noopener noreferrer">{{ writing.title }}</a></h3>
        <p>{{ writing.summary }}</p>
      </div>
    </article>
    {% endunless %}
  {% endfor %}
  </div>
</section>
