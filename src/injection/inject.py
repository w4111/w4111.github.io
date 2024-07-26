#!/usr/bin/env python3

import os
import re
import time
import json

import sqlite3
from flask import Flask, request, render_template, g, redirect, Response


tmpl_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), './')
app = Flask(__name__, template_folder=tmpl_dir)


#
# XXX: set this to your database
#

con = sqlite3.connect("db.db")
con.execute("""CREATE TABLE if not exists bad_table (
  name text
)""")

@app.route('/', methods=["POST", "GET"])
def index():
  if request.method == "POST":
    name = request.form['name']
    q = "INSERT INTO bad_table(name) VALUES('%s');" % name
    print(q)
    con.executescript(q)

  cursor = con.execute("SELECT name FROM bad_table limit 100")
  rows = cursor.fetchall()
  data = [ dict(zip(['name'], row)) for row in rows ]
  context = dict(data = data)
  return render_template("inject.html", **context)


@app.route('/safe/', methods=["POST", "GET"])
def safe_index():
  if request.method == "POST":
    try:
      name = request.form['name']
      q = "INSERT INTO bad_table(name) VALUES(:name);"
      print(q)
      con.execute(q, dict(name=name))
    except Exception as e:
      print(e)

  cursor = con.execute("SELECT name FROM bad_table limit 100")
  rows = cursor.fetchall()
  data = [ dict(zip(['name'], row)) for row in rows ]
  context = dict(data = data)
  return render_template("inject.html", **context)




if __name__ == "__main__":
  import click

  @click.command()
  @click.option('--debug', is_flag=True)
  @click.option('--threaded', is_flag=True)
  @click.argument('HOST', default='0.0.0.0')
  @click.argument('PORT', default=8111, type=int)
  def run(debug, threaded, host, port):

    HOST, PORT = host, port
    print("running on %s:%d" % (HOST, PORT))
    app.run(host=HOST, port=PORT, debug=debug, threaded=threaded)


  run()
