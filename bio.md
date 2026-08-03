---
title: Biography and CV
permalink: /bio/
description: Biography, selected exhibitions, experience, and writing by Josh Davila.
---
<section class="section">
  <p class="eyebrow">Biography</p>
  <p class="lede">{{ site.data.profile.one_line_bio }}</p>
  <p>{{ site.data.profile.long_bio }}</p>
</section>

<section class="section">
  <div class="columns">
    <div>
      <h2>Education and experience</h2>
      <ul>
        {% for education in site.data.profile.education %}
          <li>{{ education.credential_status }} in {{ education.field }}, {{ education.institution }}</li>
        {% endfor %}
        {% for experience in site.data.experience %}
          {% if experience.public %}<li>{{ experience.role }} — {{ experience.organization }}</li>{% endif %}
        {% endfor %}
        <li>{{ site.data.profile.military.public_wording }}</li>
      </ul>
    </div>
    <div>
      <h2>Selected exhibitions and features</h2>
      <ul>
      {% for exhibition in site.data.exhibitions %}
        <li>{{ exhibition.title }}, {{ exhibition.year }}{% if exhibition.city %} — {{ exhibition.city }}{% endif %}</li>
      {% endfor %}
      </ul>
    </div>
  </div>
</section>
