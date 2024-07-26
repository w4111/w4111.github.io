"""
Columbia W4111 Intro to databases
Example webserver

To run locally

    python server.py

Go to http://localhost:8111 in your browser


A debugger such as "pdb" may be helpful for debugging.
Read about it online.
"""

import os
from sqlalchemy import *
from sqlalchemy.pool import NullPool
from flask import Flask, request, render_template, g, redirect, Response, jsonify

tmpl_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), './')
app = Flask(__name__, template_folder=tmpl_dir)


#
# The following uses the postgresql test.db -- you can use this for debugging purposes
# However for the project you will need to connect to your Part 2 database in order to use the
# data
#
# XXX: The URI should be in the format of:
#
#     postgresql://USER:PASSWORD@<IP_OF_POSTGRE_SQL_SERVER>/postgres
#
# For example, if you had username ewu2493, password foobar, then the following line would be:
#
#     DATABASEURI = "postgresql://ewu2493:foobar@<IP_OF_POSTGRE_SQL_SERVER>/postgres"
#
# Swap out the URI below with the URI for the database created in part 2
# DATABASEURI = "postgresql://localhost/test"
DATABASEURI = "sqlite:///db.db"


#
# This line creates a database engine that knows how to connect to the URI above
#
engine = create_engine(DATABASEURI)


#
# START SQLITE SETUP CODE
#
# after these statements run, you should see a file test.db in your webserver/ directory
# this is a sqlite database that you can query like psql typing in the shell command line:
#
#     sqlite3 test.db
#
# The following sqlite3 commands may be useful:
#
#     .tables               -- will list the tables in the database
#     .schema <tablename>   -- print CREATE TABLE statement for table
#
# The setup code should be deleted once you switch to using the Part 2 postgresql database
#
engine.execute("""DROP TABLE IF EXISTS test;""")
engine.execute("""CREATE TABLE IF NOT EXISTS test (
  id serial,
  name text
);""")
engine.execute("""INSERT INTO test(name) VALUES ('grace hopper'), ('alan turing'), ('ada lovelace');""")
engine.execute("""DROP TABLE IF EXISTS quiz;""")
engine.execute("""CREATE TABLE IF NOT EXISTS quiz (
  vote text
);""")
#
# END SQLITE SETUP CODE
#



@app.before_request
def before_request():
  """
  This function is run at the beginning of every web request
  (every time you enter an address in the web browser).
  We use it to setup a database connection that can be used throughout the request

  The variable g is globally accessible
  """
  try:
    g.conn = engine.connect()
  except:
    print("uh oh, problem connecting to database")
    import traceback; traceback.print_exc()
    g.conn = None

@app.teardown_request
def teardown_request(exception):
  """
  At the end of the web request, this makes sure to close the database connection.
  If you don't the database could run out of memory!
  """
  try:
    g.conn.close()
  except Exception as e:
    pass






@app.route("/names/new/", methods=["post"])
def names_new():
  """
  Handle form submission of a new name
  """
  print(request.form)
  for key, val in request.form.items():
    g.conn.execute("insert into test(name) values(?)", val)


  return redirect("/")



@app.route("/names/", methods=["post", "get"])
def names():
  """
  Retrieve list of names adde in the database
  """
  print(request.form)
  form = dict(request.form)
  print(form)
  print(request.args)

  print(g.conn)
  data = [(i, val) for i, val in g.conn.execute("select * from test").fetchall()]

  return render_template("index.html", data=data)





@app.route("/")
def index():
  """
  Render Quiz page
  """
  return render_template("quiz.html")

@app.route("/vote/", methods=["get", "post"])
def vote():
  """
  Add vote to database
  """
  print(request.form)
  if not request.form:
    return redirect("/")

  if 'vote' in request.form:
    g.conn.execute("insert into quiz(vote) values(?)", request.form['vote'])
  return redirect("/vote/stats")

@app.route("/vote/stats/", methods=["get"])
def stats():
  """
  Retrieve voting statistics
  Turn statistics into a string of '##' characters for text-based plotting
  """
  cur = g.conn.execute("SELECT vote, count(*) as c from quiz GROUP BY vote ORDER BY vote")
  d = dict()
  total = 0
  maxc = 1
  for row in cur:
      vote,c = tuple(row)
      d[vote] = float(c)
      total += c
      maxc = max(c, maxc)

  ret = []
  for key in d:
    c = d[key]
    # re-scale visualization to 50 # chars
    c = 1 + (d[key]*50 / maxc)
    bar = int(c) * "#"
    ret.append((key, bar, int(d[key])))
  return render_template("quiz.html", stats=ret)

if __name__ == "__main__":
  import click

  @click.command()
  @click.option('--debug', is_flag=True)
  @click.option('--threaded', is_flag=True)
  @click.argument('HOST', default='0.0.0.0')
  @click.argument('PORT', default=8111, type=int)
  def run(debug, threaded, host, port):
    """
    This function handles command line parameters.
    Run the server using

        python server.py

    Show the help text using

        python server.py --help

    """

    HOST, PORT = host, port
    print("running on %s:%d" % (HOST, PORT))
    app.run(host=HOST, port=PORT, debug=debug, threaded=threaded)


  run()
