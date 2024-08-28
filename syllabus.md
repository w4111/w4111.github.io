---
layout: page
---

## W4111 Syllabus 

The goal of this class is two-fold.  First, to introduce
you to core database concepts (e.g., data modeling, logical
design, SQL) so that you too can build a billion dollar
application.  Second, to teach enough about database engine
internals (e.g., physical database design, query optimization,
transaction processing) so you can make good decisions when using
a DBMS and debugging slow/incorrect queries.  

Along the way, we will point out connections with modern 
data systems and data engineering concepts in industry,
as the field is moving quickly.

At the completion of this course, the student should be able to

* Perform rapid data modeling using ER diagrams
* Design proper database schemas using database tables, normal forms, and constraints
* Express queries using relational algebra 
* Manage and query data using SQL
* Find common data errors
* Identify common database security flaws and mechanism
* Understand the process of cost-based query optimization
* Understand the basics of transactions and correct data recovery 

Course website: [http://w4111.github.io/](http://w4111.github.io/)




### Waitlist

This course waitlist prioritizes students in the Computer Science department, and is managed by the student services staff.   The instructor does not manage the waitlist.

### Format

Class meets once a week for ~3 hours

* There will be a break in the middle of each lecture
* All lectures will be delivered live.  <!--The first 2 weeks will be virtual (Zoom-only).  In-person will resume based on University guidance.-->
* Recorded lectures will be on Courseworks.  
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

Any part of an assignment or exam that is not created and written by you must be clearly identified and cited.   This includes referring to an external website, asking a colleague, and using GenAI.  Even if you have paraphrased/summarized ideas from elsewhere, you must cite it.  You may not look at another student's solution without permission from the staff, and may not knowingly share your solutions or leave the solutions where they can be seen (physically and digitally).    We use the term GenAI to refer to AI coding assistants (e.g., Github Copilot, Cursor, or Replit) and large language models (e.g., ChatGPT, Anthropic, etc).

The following are examples of behavior that is not allowed:

* Copying (or retyping) homework, project, or exam solutions from another person or source, either in draft or final form, even if permissions are incorrectly set to allow it. This behavior is still clearly inappropriate even if you make modifications from the original source.
* Searching for or viewing a current or past student's homework, project, or exam solution.
* Using a GenAI tool to help you on an assignment or exam. 
* Allowing someone else to view or copy your code, written assignment, quiz, or exam, either in draft or final form.
* Getting help that you do not fully understand or from someone whom you do not acknowledge on your solution.
* Coaching others step-by-step without them understanding your help.
* Writing, using, or submitting a program that attempts to alter or erase grading information or otherwise compromise security of course resources.
* Lying to course staff.
* Making your work publicly available in a way that other students (current or future) can access your solutions, even if others’ access is accidental or incidental to your goals.
* (the above examples are borrowed from [CMU 15-445/645](https://15445.courses.cs.cmu.edu/fall2024/syllabus.html))


The following are examples that are not considered cheating

* clarify vague instructions in assignments,  lectures, lecture notes, 
* help in setting up a computing environment, such as Colab or BigQuery,
* learning how to use a computer system, such as using git, command line, python, etc
* discuss concepts introduced in lecture that is unrelated to the specifics of an assignment.


If you believe you have violated this collaboration policy, you may retroactively retract your submission. If this is done before the staff becomes aware of your conduct, you will receive a zero grade on the submission and we will not consider your conduct to be an academic integrity violation.


Ultimately, cheating is no fun for anyone, and devalues your degree.  Thus, **Any *hint* of cheating will be reported to student affairs.** If you are struggling to keep up in the course, come see the instructor during office hours. Please remember that cheating is a slippery slope -- it may be enticing, but goes against the values in this course.


**[If you have _any_ doubt, see Columbia's description of academic honesty](http://www.cs.columbia.edu/education/honesty) and talk to the Professor**


#### Homeworks

* Homework assignments must be done ALONE and collaboration is not allowed.  
* By default, large language models (e.g., ChatGPT, Sonnet, Mistral, etc) are not permitted.

#### Projects

* Projects are in teams of 2.  
* **Both members will recieve the same grade** and should thus communicate and collaborate with each other.  
* Collaboration outside of the team is not allowed. **[Don't do it](http://www.cs.columbia.edu/education/honesty)**
* CVN students are also required to have a partner.  The partner can be someone in the main class or another CVN student.
* You may use GenAI to aid your development **during Project 1 Part 3 and Project 2**.  You must document the portions of your code that were derived from GenAI, and write a document how it was used (the prompts, how you incorporated and edited the AI outputs).  These should be submitted in a supplementary document.



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
* **(Least Preferred)**: Email course staff.  If it should have bene a Ed post, we will reply to that effect.  <!--  There are too many people in the course for this to be a primary option!-->
* Announcements will be on website and via emails using Ed.






