  $(function(){
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);

    d3.csv("./schedule.csv")
      .get(function(err, rows) {
        var schedule = { days: rows };

        var html    = template(schedule);
        $("#schedule_body").html(html);

        // Date(year, month, day, hour, minute)
        // month is 0 indexed, strangely day and year is not
        var curClass = new Date(2016,8,7,14,30,0,0);
        console.log(curClass)
        var lastClass = new Date(2016,11,12,14,30,0,0);        
        var holidays = ['11/07/16', '11/08/16', '11/24/16', '11/25/16',  '12/12/16'];

        update_dates(curClass, lastClass, holidays);

      })


});
 


