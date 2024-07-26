from dateutil import *
from dateutil import parser
from datetime import *


holidays = list(map(parser.parse, [
  "11/07/2022",
  "11/08/2022",
  "11/23/2022",
  "11/24/2022",
  "11/25/2022"
]))
startday = parser.parse("09/06/2022")
lastday = parser.parse("12/12/2022")
daysofweek = [1, 3]  # 0 is monday

day = startday
while day < lastday:
  if day not in holidays: 
    if day.weekday() in daysofweek: 
      print(day.strftime("%m/%d/%y"))

  day += timedelta(days=1)

