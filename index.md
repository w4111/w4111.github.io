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

* Here is a [link to another DB course's database recovery simulator](https://mwhittaker.github.io/aries/) (ARIES protocol).  It is more in depth than what we discussed in class, but is nice if you are interested in the details.
-->

#### Announcements

* 11/07: extended project 1 part 3 deadline to 11/14, hw4 and project 2 to 12/1.
* 11/05: released [extra credit: data as art](https://edstem.org/us/courses/61495/discussion/5648132)
* 10/31: updated lecture 8 (files and indexes) and removed slides 71 and 72, which were from a previous year.
* 10/24: link to [sql injection example](https://w4111.github.io/inject) and [the source code](https://github.com/w4111/w4111.github.io/tree/main/src/injection)
* 10/21: updated lecture 7 slides with semantic profiling and LLM discussion
* 10/17: [Functional dependency exercises](./fd)
* 10/3: [This folder contains notebooks of examples from class](https://github.com/w4111/w4111.github.io/tree/main/src/notebooks).   Click on "Open in Colab" on the line with sql_private.ipynb
* 9/29: An [external Relation Algebra calculator](http://dbis-uibk.github.io/relax/calc.htm#) that might help you write and understand relational algebra.
* 9/25: [link to all past midterms](https://github.com/w4111/w4111.github.io/tree/main/files/reading).  Midterm 1 is comparable to this semester's midterm 1, and midterm 2 is comparable to this semester's final.
* 9/23: Notebook examples used in class [can be found here](https://colab.research.google.com/github/w4111/w4111.github.io/blob/master/src/notebooks/ertosql_private.ipynb).   Click on "Open in Colab" on the line with ertosql_private.ipynb

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


<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&mode=WEEK&src=NDExMWYyNEBnbWFpbC5jb20&color=%23039BE5" style="border:solid 1px #777" width="100%" height="600" frameborder="0" scrolling="no"></iframe>


