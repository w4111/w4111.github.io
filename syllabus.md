---
layout: page
---

## W4111 Syllabus 


The goal of this class is two-fold.  First, to introduce
you to core database concepts (e.g., data modeling, logical
design, SQL) so that you too can build a billion dollar
application.  Second, to teach enough about database engine
internals (e.g., physical database design, query optimization,
transaction processing) so you have a good sense of why
queries may be running slowly/incorrectly.

Along the way, we will point out connections with modern 
data systems and data engineering concepts in industry,
as the field is moving quickly.


Course website: [http://w4111.github.io/](http://w4111.github.io/)


### Format

Class meets once a week for ~3 hours

* There will be a break in the middle of each lecture
* All lectures will be delivered live.  The first 2 weeks will be virtual (Zoom-only).  In-person will resume based on University guidance.
* All zoom recordings will be on Courseworks.  
* Attending lectures live is not required.  It is encouraged and will give you the change to participate in discussions, practice problems, etc.
* Webcams and mics are not required, though encouraged.
* We will use Ed (rather than courseworks) for discussions.  

Quizzes 

* We will have a handful of multiple choice quizzes during lecture throughout the semester.
* Quizzes are ungraded, and discussed during lecture

### Textbook

*  (Not Required) Silberschatz et al. [Database System Concepts 7th ed.](https://db-book.com/)
  * We include the relevant chapters in the schedule in case you want to read more.


### Prerequisites

Required Prereqs

* COMS W3134, W3137, or W3136 (equivalent courses taken elsewhere are acceptable as well)
* You need to get permission from the instructor if you do not have these prerequisites. 
  This course is intended for both Computer Science majors as well as non-majors.

Background that will help

* Fluency in Python 
  * basic data structures (e.g., linked lists, trees, hashtables)
  * big O notation
* HTML/javascript for the project
* Use of terminal to work with machines in the cloud for the project


If you have used Java before, then use [this Java2Python tutorial](./java2python)
that we have written to see how Java concepts transfer into Python concepts.  It also
contains links to useful tutorials.

### Programming Resources

* See our [Java to Python Quick Guide](./java2python)
* Additional resources
  * [Official Python tutorial](https://docs.python.org/3/tutorial/)
  * [Learn Python in Y Minutes](http://learnxinyminutes.com/docs/python/)
  * [Learn Python The Hard Way](http://learnpythonthehardway.org/book/)
  * [Flask documentation](https://flask.palletsprojects.com/en/2.0.x/)
  * [Flask Tutorial](https://flask.palletsprojects.com/en/2.0.x/tutorial/)
  * [Jinja Template documentation](https://jinja.palletsprojects.com/en/3.0.x/)
  * [Jinja Tutorial](https://realpython.com/blog/python/primer-on-jinja-templating/)



### Assignment Collaboration Policies AKA Cheating

Homeworks

* Homework assignments must be done alone.  
* No collaboration is allowed.  **[Don't do it](http://www.cs.columbia.edu/education/honesty)**

Projects

* Projects are in teams of 2.  
* Both members will recieve the same grade and should collaborate with each other.  
* Collaboration outside of the team is not allowed. **[Don't do it](http://www.cs.columbia.edu/education/honesty)**
* CVN students are also required to have a partner.  The partner can be someone in the main class or flipped classroom.

Collaboration and Cheating

* Cheating is no fun for anyone
* Rampant cheating devaluages the Columbia degree.
* **Any *hint* of cheating will be reported to student affairs.**
* If you are struggling to keep up in the course, come see the instructor during office hours.
* Cheating is a slippery slope -- it may be enticing, but goes against the values in this course.

**[If you have _any_ doubt, see Columbia's description of academic honesty](http://www.cs.columbia.edu/education/honesty) and talk to the Professor**




## Homeworks

* Auditors: feel free to come to lectures.  Only students registered for course units may turn in work to be graded.
* CVN students:
  * If you have a local teammate, the local teammates can turn in the assignment on behalf of the group. 
  * If both teammates are remote, let the staff know and we can set up electronic submission for you.

#### Grading

Grading Policy

* Homeworks <small>15%</small>
* Project 1 <small>15%</small>
* Project 2 <small>5%</small>
* Midterm 1 <small>25%</small>
* Midterm 2 <small>40%</small>

<!--
* [Advanced Assignments](https://github.com/w4111/advanced-public)  <small>[Extra Credit](#ec)</small>
* Scribe Notes  <small>[Extra Credit](#ec)</small>
-->

Notes on grading (please read):
<a name="cheating"></a>

* We will not publish exact scoring criteria.
* The percentages are subject to change as circumstances dictate. 
* Active participation in discussion and/or OH can positively affect your final grade.
* I intend to keep the definition of "A+: Exceed expectations" meaningful.
* Since exams are the main indicators we have of individual grasp of the material, we reserve the right to adjust final letter grades based on exam performance.
* Extra credit is added in a way that _only benefits_ the recipients and _does not_ harm others in the course.  In other words, you are NOT penalized in any way if you do not recieve extra credit.
* Work that you submit must be your own (or for two-person projects, the team's).  We will run the standard software duplication checkers on submitted assignments.
* Don't cheat.  It's not worth it.


<a name="ec"/>
#### Extra Credit

Extra credit is a way for students to illustrate their understanding of the course material in ways beyond formal assignments and exams.  **There is NO PENALTY for not doing extra credit** because it is added to the final grade **after computing any curves**.  

1. We first grade cut-offs using scores that **do not** include any extra credit
2. Then we add extra credit points.  
3. This includes all extra credit -- standalone, on assignments/projects, and on exams.

Due to the additional work that the staff must take to assess and manage extra credit opportunities, we have **strict deadlines** for extra credit opportunities (aka no late days).



### Grace Days

#### Grace Days for Homeworks

Unless otherwise specified, you are allowed 5 penalty free late days to use throughout the semester for _homework only_.  

* One late day equals one 24 hour period after the due date of the assignment.  
* Even 1 minute late equals the use of a late day.
* Once you have used your late days, there will be a 25% penalty for each day an assignment is late.  
* You do not need to explictly declare the use of late days;  we will assign them to you in a way that is optimal for your grade, based on the worth of an assignment and your score on the assignment.


**In some cases, we will specify that an assignment will not accept late submissions beyond a certain day**.
This is so that we have time to release solutions (say, before an exam).


* HW0 does not accept late submissions.
* Homeworks do not accept ANY late submissions once the solution is released (thus grace days do not apply once the solution is released).
* Unless specified otherwise, the hard deadline for using grace days is five days (120 hours) after the initial deadline.


#### Grace Days for Projects 

For projects, you are allowed 3 penalty free late days to be used only for projects.   

* Same deal as homeworks
* One late day equals one 24 hour period after the due date of the assignment.  
* Even 1 minute late equals the use of a late day.
* Once you have used your late days, there will be a 25% penalty for each day an assignment is late.  
* You do not need to explictly declare the use of late days;  we will assign them to you in a way that is optimal for your grade when different assignments are worth different numbers of points.   
* **TEAMS**: _both_ members of the team are deducted late days for each day the assignment is late.  
  If either member is out of late days, your grade will be deducted as per above.

#### Additional Grace Day Rules

* Late days are nontransferrable between homeworks and projects
* To use a late day for a project, both team partners must have a project grace day available each, and they will both be deducted one project grace day each. If you change team partners and your new partner does not have any project grace days left, then unfortunately you will not be able to use any grace days for the project.
* Grace days do not apply to extra credit assignments


#### Procedures to submit late homework:

* **(Most Preferred)** Bring to any TA's office hours.
* **(Preferred)** Bring to class.
* **(Least preferred)** Submit to Professor Wu's office: 421 Mudd in the DSI space: [map](http://eugenewu.net/files/images/map.png)

When planning to use grace days, note that homeworks tend to get harder later in the course.



### Communication

<a name="help"></a>
Checklist when asking for help:

0. Search google and see if it answers your question.  Then tell us:
1. What are you trying to do?
2. What steps did you think would work and which have you tried?
3. How did it fail and why do you think it failed (OK to say I don't know why it failed)?
4. What error did it produce?

Methods of communication:

* **(Most Preferred)**: [Ed Discussion](https://edstem.org/us/courses/17037/discussion/)
* **(Least Preferred)**: Email course staff.  There are too many people in the course for this to be a primary option!
* Announcements will be on website and via emails using Piazza


