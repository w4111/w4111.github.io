from dateutil import *
from dateutil import parser
from datetime import *


holidays = list(map(parser.parse, [
    "02/17/2025",
    "03/17/2025",
    "03/18/2025",
    "03/19/2025",
    "03/20/2025",
    "03/21/2025"
]))
startday = parser.parse("01/21/2025")
lastday = parser.parse("05/05/2025")
daysofweek = [1, 3]  # 0 is monday

day = startday
while day < lastday:
  if day not in holidays: 
    if day.weekday() in daysofweek: 
      print(day.strftime("%m/%d/%y"))

  day += timedelta(days=1)

