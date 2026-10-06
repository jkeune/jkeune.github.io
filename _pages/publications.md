---
layout: page
permalink: /publications/
title: publications
description: Peer-reviewed publications in reversed chronological order.
years: [2026, 2025, 2024, 2023, 2022, 2020, 2019, 2018, 2016, 2015, 2014]
nav: true
---

<!-- _pages/publications.md -->

<p>I have 33 peer-reviewed publications (6 first-authored publications and 27 co-authored publications). </p>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{%- for y in page.years %}

  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
