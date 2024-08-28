  function update_dates(curClass, lastClass, holidays) {
      var now = new Date();
      var spans = document.getElementsByClassName("date");
      var lastClassWasBefore = true;
      var tostr = function(dt) { return dateFormat(dt, 'dddd<br/>m/d') };
      var toholiday = function(dt) { return dateFormat(dt, 'm/dd/yy') };
      var nextClassFunc = (function() {
        var gap = 5;
        return function(dt) {
          var newdt = new Date(dt.getTime() + (24 * 60 * 60 * gap * 1000));
          gap = (gap === 5)? 2: 5;
          return newdt;
        };
      })();

      for (i = 0; i < spans.length; i++) {
          var dayString = tostr(curClass);
          console.log(toholiday(curClass));
          if (_.contains(holidays, toholiday(curClass))) {
            curClass = nextClassFunc(curClass);
            dayString = tostr(curClass);
          }

          if (0) {
            var holiday = false;   
            do {
                holiday = false;
                for (j = 0; j < holidays.length; j++) {
                    if (holidays[j] == dayString)
                        holiday = true;
                }
                if (holiday) {
                    curClass = new Date(curClass.getTime() + (24 * 60 * 60 * gap * 1000));
                    if (gap == 5) { gap = 2; } else { gap = 5; }
                    dayString = dateFormat(curClass,'m/d/yy');
                }
            } while (holiday);
          }
          spans[i].innerHTML = dayString;
          if (lastClassWasBefore && curClass.getTime() > now) { // this is the next class
              var tr = $(spans[i]).parent().parent().parent();
              tr.addClass("current");
              tr.before("<tr><td class='nextclass' colspan=5><div><a name='schedule'></a>Next Class!</div></td></tr>");
              lastClassWasBefore = false;
          }
          curClass = nextClassFunc(curClass);
      }
  }

Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);
        
    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
    }[operator];
});
    

