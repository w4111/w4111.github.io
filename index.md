---
layout: index
---

#### Overview

The goal of this class is two-fold. First, to introduce you to core database concepts (e.g., data modeling, logical design, SQL) so that you too can build a billion dollar application. Second, to teach enough about database engine internals (e.g., physical database design, query optimization, transaction processing) so you have a good sense of why queries may be running slowly/incorrectly.  We will also discuss their relevance to systems used in industry.

The Data Management Seminar invites interesting database researchers and practitioners to speak.  Students are invited to join in person or on zoom (if available).   We will announce these periodically throughout the semester.

<!--**Advanced Assignments**  There will several [optional extra-credit assignments](https://github.com/w4111/advanced) that will dive deeper into concepts introduced in class.   Some of them will involve extending a simple Python-based database engine with additional functionality!  They are labeled `AA#` in the schedule.  There is no obligation to do these, but they are available if you want to do then in addition to, or in lieu of the normal assignments.-->

<!--
<center><span style="padding: 2em; font-size: 20pt">Please do not ask me about the waitlist</span></center>
-->


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
* [Sign up for Project 1 Part 1 staff meetings!](https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUpOU05mUUpZYXk2fGRlZmF1bHR8YmE0YmE0M2MzNzkyYWZjOTcxYjRkMTBmNDNmNjA1NDc)  One meeting per team.
* Updated lecture 2 slides to clarify constraints over N-way relationships.
-->
* 11/19: uploaded makeup video for lecture 20.  Called "W4111 L20 Selinger" in the course works video library
* 11/11: fixed a bug in data quality slide 37.  The example incorrectly stated that `ACDE` is in BCNF.  It is not because `B` is not in the projection, so `C` does not determine `A`, and is thus not a key.   This has been fixed in the slide.
* 11/1: added [clarification to HW3 Q1.5's prompt ](https://edstem.org/us/courses/28081/discussion/2053185)
* 10/27: updated normalization slides to fix error in BCNF decomposition example.
* 10/24: added a link to [Functional Dependency Exercies](http://w4111.github.io/fd).
* 10/17: added a link to [SQL injection example in class](http://w4111.github.io/inject).
* 10/11: fixed a bug in relational algebra slide 57 so equijoin removes the duplicate attributes.
* 10/6: first [extra credit assignment released](https://github.com/w4111/w4111.github.io/wiki)
* 10/6: Updated the slides for the SQL lectures
* 9/29: Looking for past exams?  [Look no further.  Click here!](https://github.com/w4111/w4111.github.io/tree/main/files/reading)
* 9/29: Link to [SQLTutor](https://cudbg.github.io/sqltutor/)
* 9/27: Notebook examples used in class [can be found here](https://github.com/w4111/w4111.github.io/tree/main/src/notebooks)
* 9/13: Added [Link to Project 1 Part 1 appointment slots](https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUpOU05mUUpZYXk2fGRlZmF1bHR8YmE0YmE0M2MzNzkyYWZjOTcxYjRkMTBmNDNmNjA1NDc)
* 9/8: Added [course gradescope link to webpage](https://www.gradescope.com/courses/436228/)
* 9/8:  HW1 part 1 and Project 1 Part 1 are released
* 9/6: [HW0](https://github.com/w4111/hw0) released.  No Late Days!  Failure to submit on time is a -5% penalty on your final grade.

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


