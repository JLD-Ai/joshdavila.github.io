---
title: Archive
permalink: /archive/
description: Structured archive of Josh Davila's projects, writing, exhibitions, and intellectual work.
---
<section class="hero">
  <p class="eyebrow">Structured archive</p>
  <h1>One source of truth for the entire practice.</h1>
  <p class="lede">The archive currently records {{ site.data.profile.archive.distinct_works }} distinct intellectual works alongside public essays, projects, exhibitions, and professional milestones.</p>
</section>

<section class="section">
  <div class="columns">
    <div>
      <h2>Projects</h2>
      <ul>
      {% for project in site.data.projects %}
        {% if project.public != false %}
        <li>{{ project.title }} — {{ project.status | replace: "_", " " }}</li>
        {% endif %}
      {% endfor %}
      </ul>
    </div>
    <div>
      <h2>Public writings</h2>
      <ul>
      {% for writing in site.data.writings %}
        <li><a href="{{ writing.url }}" target="_blank" rel="noopener noreferrer">{{ writing.title }}</a></li>
      {% endfor %}
      </ul>
    </div>
  </div>
</section>

<section class="section callout">
  <h2>Philosophical archive</h2>
  <p>{{ site.data.profile.archive.academic_works }} undergraduate and academic projects and {{ site.data.profile.archive.mature_ai_era_writings }} mature AI-era writings have been provisionally reconciled as {{ site.data.profile.archive.distinct_works }} distinct works.</p>
</section>
