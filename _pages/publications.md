---
layout: page
permalink: /publications/
title: publications
description: Peer-reviewed publications in reversed chronological order.
years: [2026, 2025, 2024, 2023, 2022, 2020, 2019, 2018, 2016, 2015, 2014]
nav: true
---

<!-- _pages/publications.md -->

<p>I have 33 peer-reviewed publications (6 first-authored publications and 27 co-authored publications) and contributed to 3 reports.</p>

<!-- Bibsearch Feature -->

<script src="{{ '/assets/js/publication-filter.js' | relative_url | bust_file_cache }}" type="module"></script>
<div class="bibsearch-controls">
<input type="text" id="bibsearch" spellcheck="false" autocomplete="off" class="search bibsearch-form-input" placeholder="Type to filter">
<div class="bibsearch-filters" role="group" aria-label="Filter publications">
{%- for publication_type in site.bib_publication_types %}
<label>
<input type="checkbox" class="bibsearch-type-filter" value="{{ publication_type.id }}" checked>
{{ publication_type.label }}
</label>{% unless forloop.last %}&nbsp;{% endunless %}
{%- endfor %}
</div>
</div>

<div class="publications">

{%- for y in page.years %}

{% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
