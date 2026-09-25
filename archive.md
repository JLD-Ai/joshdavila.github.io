---
title: Archive
permalink: /archive/
description: A selected public index of Josh Davila's projects and published writing, drawn from a larger provisionally reconciled intellectual archive.
---
<section class="hero">
  <p class="eyebrow">Selected public archive</p>
  <h1>A record of the work I am ready to share.</h1>
  <p class="lede">This page indexes public projects and essays. The larger working archive has been provisionally reconciled to {{ site.data.profile.archive.distinct_works }} distinct intellectual works; most source materials are not published here.</p>
</section>

<section class="section">
  <div class="columns">
    <div>
      <h2>Projects</h2>
      <ul>
      {% for project in site.data.projects %}
        {% if project.public != false %}
        <li>
          {% if project.page_url %}<a href="{{ project.page_url | relative_url }}">{{ project.title }}</a>{% else %}{{ project.title }}{% endif %}
          {% if project.status == "needs assets" %} — in development{% endif %}
        </li>
        {% endif %}
      {% endfor %}
      </ul>
    </div>
    <div>
      <h2>Published essays</h2>
      <ul>
      {% for writing in site.data.writings %}
        <li><a href="{{ writing.url }}" target="_blank" rel="noopener noreferrer">{{ writing.title }}</a></li>
      {% endfor %}
      </ul>
    </div>
  </div>
</section>

<section class="section callout">
  <h2>Explore the ideas behind the work</h2>
  <p>The <a href="{{ '/research/' | relative_url }}">research page</a> traces the questions linking art, data, housing, and institutional accountability.</p>
</section>
