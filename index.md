---
layout: index
---

#### Overview

The goal of this class is two-fold. First, to introduce you to core database concepts (e.g., data modeling, logical design, SQL) so that you too can build a billion dollar application. Second, to teach enough about database engine internals (e.g., physical database design, query optimization, transaction processing) so you have a good sense of why queries may be running slowly/incorrectly.  We will also discuss their relevance to systems used in industry.

The Data Management Seminar invites interesting database researchers and practitioners to speak.  Students are invited to join in person or on zoom (if available).   We will announce these periodically throughout the semester.

<!--
#### Automated Exercises/resources

Developed for W4111

* [Transaction scheduling](https://w4111.github.io/concurrency.html)
* [Join optimization problem generator](https://w4111.github.io/join.html)
* Want more functional dependencies?  How about 100!  [Functional Dependency Problem Generator](./fd)

Developed by others:

* An [external Relation Algebra calculator](http://dbis-uibk.github.io/relax/calc.htm#) that might help you write and understand relational algebra.
* Here is a [link to another DB course's database recovery simulator](https://mwhittaker.github.io/aries/) (ARIES protocol).  It is more in depth than what we discussed in class, but is nice if you are interested in the details.
-->

#### Announcements

<!--
* 9/6: [HW0](https://github.com/w4111/hw0) released.  No Late Days!  Failure to submit on time is a -5% penalty on your final grade.
-->

#### Schedule

<table class="table table-striped schedule">
  <thead>
  <tr>
    <th class="idx"></th>
    <th class="date" style="width: 5em; max-width: 5em;"> <p> <span>Date </span> </p> </th>
    <th style="min-width: 20%;"> <p> <span>Topic </span> </p> </th>
    <!--<th style="width: 15%"> <p> <span>Readings </span> </p> </th>-->
    <th style="width: 25%;"> <p> <span>Assigned</span> </p> </th>
    <th style="width: 25%;"> <p> <span>Due</span> </p> </th>
  </tr>
  </thead>
{% assign idx = 0 %}

{% for r in site.data.schedule %}
  {% assign idx = idx | plus: 1  %}
  <tr style="background-color: {{r.color}}; ">
    <td class="idx">L{{idx}}</td>
    <td class="date">{{r.date}}</td>
    <td class="slug">
      {% if r.lshow == "1" %} <a href="{{r.link}}"> {% endif %}
        <b>{{r.slug}}</b>
      {% if r.lshow == "1" %} </a> {% endif %}
      {%if r.title %}: {{r.title}}{% endif %}
      {% if r.optional %}<br/>{{r.optional | safe}}{% endif%}
      
      {% if r.readings %}
        <br/>optional: Textbook {{r.readings | safe}}
      {% endif %}
      </td>
    <!--<td class="readings">{{r.readings | safe}}</td>-->
    <td>{% if 1 or r.ashow == "1" %} {{r.assigned | safe}} {% endif %}</td>
    <td>{% if 1 or r.dshow == "1" %} {{r.due | safe}} {% endif %}</td>
  </tr>
{% endfor %}
</table>


