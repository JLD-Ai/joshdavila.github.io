---
title: Timeline
permalink: /timeline/
description: Chronological record of Josh Davila's projects, exhibitions, publications, and professional milestones.
---
<section class="hero">
  <p class="eyebrow">Career timeline</p>
  <h1>A chronological record generated from the master data.</h1>
  <p class="lede">This page expands as records are verified. It is generated from project, writing, exhibition, and experience data rather than edited manually.</p>
</section>

<section class="section">
{% assign years = "2026,2025,2024,2023,2022,2021" | split: "," %}
{% for year in years %}
  <h2>{{ year }}</h2>
  <ul class="timeline">

  {% for project in site.data.projects %}
    {% assign project_start_year = project.start_year | append: "" %}
    {% assign project_end_year = project.end_year | append: "" %}
    {% if project.public != false %}
      {% if project_start_year == year or project_end_year == year %}
        <li>
          <strong>Project:</strong>
          {% if project.page_url %}
            <a href="{{ project.page_url | relative_url }}">{{ project.title }}</a>
          {% else %}
            {{ project.title }}
          {% endif %}
          — {{ project.summary }}
        </li>
      {% endif %}
    {% endif %}
  {% endfor %}

  {% for writing in site.data.writings %}
    {% assign writing_year = writing.publication_year | append: "" %}
    {% if writing_year == year %}
      <li>
        <strong>Writing:</strong>
        <a href="{{ writing.url }}" target="_blank" rel="noopener noreferrer">{{ writing.title }}</a>
      </li>
    {% endif %}
  {% endfor %}

  {% for exhibition in site.data.exhibitions %}
    {% assign exhibition_year = exhibition.year | append: "" %}
    {% if exhibition.public and exhibition_year == year %}
      <li>
        <strong>{{ exhibition.event_type | capitalize }}:</strong>
        {{ exhibition.title }}
        {% if exhibition.city %}, {{ exhibition.city }}{% endif %}
        {% if exhibition.public_note %} — {{ exhibition.public_note }}{% endif %}
      </li>
    {% endif %}
  {% endfor %}

  </ul>
{% endfor %}
</section>
