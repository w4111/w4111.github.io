
import duckdb
from pygg import *
import dateutil



db = duckdb.connect("./hw0.db")
db.execute("drop table if exists ans")
db.execute("create table ans as SELECT * FROM read_csv_auto('./hw0form.csv')")


data = []
for row in db.execute("select time from ans").fetchall():
  d = dateutil.parser.parse(row[0])
  secs = -(dateutil.parser.parse('01/26/2022 23:59') - d).total_seconds()
  data.append(dict(time=secs / 60.0 / 60.))
print(len(data))
p = ggplot(data, aes(x="time")) + geom_dotplot(binwidth=2)
p += axis_labels("hours before deadline", "")
ggsave("time.png", p, width=8, height=3)

data = db.execute("select help, count(*) as c from ans group by help").fetchdf()
p = ggplot(data, aes(x="help", y="c")) + geom_bar(stat=esc('identity')) + coord_flip() + axis_labels("", "", "discrete")
ggsave("help.png", p, width=6, height=3)

data = db.execute("select trim(fail, ' \n.*') as fail, count(*) as c from ans group by fail").fetchdf()
p = ggplot(data, aes(x="fail", y="c")) + geom_bar(stat=esc('identity')) + coord_flip() + axis_labels("", "", "discrete")
ggsave("fail.png", p, width=8, height=3)


