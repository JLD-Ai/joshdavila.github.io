---
title: Support
permalink: /support/
description: Collect, commission, license, collaborate with, or support Josh Davila's independent art and research.
---
<section class="hero">
  <p class="eyebrow">Collect, commission, and support</p>
  <h1>Support the art and independent research behind it.</h1>
</section>

<section class="section">
  <div class="support-grid">
  {% for item in site.data.support.collect %}
    <div class="support-card">
      <h2>{{ item.label }}</h2>
      <a class="text-link" href="{{ item.url }}" target="_blank" rel="noopener noreferrer">Visit →</a>
    </div>
  {% endfor %}
    <div class="support-card">
      <h2>Professional inquiries</h2>
      <p>{{ site.data.support.professional.services | join: ", " }}</p>
      <a class="text-link" href="mailto:{{ site.data.support.professional.email }}">{{ site.data.support.professional.email }}</a>
    </div>
  </div>
</section>
