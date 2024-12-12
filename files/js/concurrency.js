
function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randBool() {
  return Math.random() >= 0.5;
}
function randExp() {
  return Math.pow(10, randInt(1, 6));
}
function randItem(arr) {
  return arr[randInt(0, arr.length)];
}

function sum(numbers) {
  return _.reduce(numbers, function(v1, v2) { return v1+v2; }, 0)
}

function genTransaction(opts) {
  var xact = opts.xact;
  var nobjs = opts.nobjs || 2;
  var nopts = opts.nopts || 5;
  //nopts = randInt(3, nopts);
  objs = _.times(nobjs, function(i) { return i; });

  return _.times(nopts, function() {
    return {
      xact: xact,
      obj: "ABCDEF"[randItem(objs)],
      op: randItem(["R", "W"]),
      val: null
    }
  });
}

function genTransactions(opts) {
  var ops = _.flatten(_.times(2, function(idx) {
    var o = _.clone(opts);
    o.xact = "T"+(idx+1);
    return genTransaction(o);
  }));
  _.each(ops, function(op, i) {
    if (op.op == "W") {
      op.val = i;
    }
  });
  return ops;
}

function genSchedule(schedule) {
  var t1 = pickXact(schedule, "T1"),
      t2 = pickXact(schedule, "T2");
  var ret = [];
  while(_.size(t1) > 0 && _.size(t2) > 0) {
    var t = randItem([t1, t2]);
    ret.push(t.shift())
  }
  ret = _.flatten(ret.concat(_.shuffle([t1, t2])));
  return ret;
}

function genInitDB(schedule) {
  var db = {};
  _.each(schedule, function(op) {
    if (!(op.obj in db)) {
      db[op.obj] = randInt(0, 50);
    }
  });
  return db;
}

function execute(schedule, dbstate) {
  dbstate = _.clone(dbstate);
  _.each(schedule, function(op) {
    if (op.op == "W") {
      dbstate[op.obj] = op.val;
    }
  });
  return dbstate;
}

function pickXact(schedule, xact) {
  return _.filter(schedule, function(op) { return op.xact == xact; });
}


function isConflictSerializable(schedule) {
  var graph = {};
  _.each(schedule, function(op1, idx1) {
    _.each(schedule, function(op2, idx2) {
      if (idx2 <= idx1) return;
      if (op1.xact != op2.xact &&
          op1.obj == op2.obj &&
          (op1.op == "W" || op2.op == "W")) {
        graph[op1.xact] = op2.xact;
      }
    })
  });
  return _.size(graph) <= 1;
}

function getConflicts(schedule) {
  var rwconflicts = [];
  var wrconflicts = [];
  var wwconflicts = [];
  var rwrconflicts = [];
  var graph = {};
  schedule = R.zip(schedule, _.times(schedule.length, (i) => i));

  console.log(R.xprod(schedule, schedule))
  R.xprod(schedule, schedule).forEach(([
    [{xact: xact1, op: op1, obj: obj1},idx1], 
    [{xact: xact2, op: op2, obj:obj2},idx2]]) => {
    if (xact1 == xact2 || obj1 != obj2) return;
    msg = `${idx1},${idx2}(${obj1})`
    if (op1 == "W" && op2 == "W") wwconflicts.push(msg);
    if (op1 == "W" && op2 == "R" && idx1 < idx2) wrconflicts.push(msg);
    if (op1 == "R" && op2 == "W" && idx1 < idx2) rwconflicts.push(msg);
  })


//  _.each(schedule, function(op1, idx1) {
//    _.each(schedule, function(op2, idx2) {
//      if (idx2 <= idx1) return;
//      if (op1.xact != op2.xact && op1.obj == op2.obj) {
//        msg = idx1 + "," + idx2 + " on " + op1.obj;
//        if (op1.op == "W" && op2.op == "W") {
//          wwconflicts.push(msg);
//        }
//        if (op1.op == "W" && op2.op == "R") {
//          wrconflicts.push(msg);
//        }
//      }
//    })
//  });
//
  _.each(schedule, function(op1, idx1) {
    if (op1.op != "R") return;
    _.each(schedule, function(op2, idx2) {
      if (idx2 <= idx1) return;
      if (op2.op != "W" || op2.obj != op1.obj || op2.xact == op1.xact) return;
      _.each(schedule, function(op3, idx3) {
        if (idx3 <= idx2) return;
        if (op3.op != "R" || op3.obj != op1.obj || op3.xact == op2.xact) return;
        var msg = `${idx1},${idx2},${idx3}(${obj1})`
        rwrconflicts.push(msg)
      });
    });
  });
 
  return {
    rw: {
      name: "RW Conflict",
      conflicts: rwconflicts
    },
    wr: {
      name: "WR Conflict: Read uncommited data",
      conflicts: wrconflicts
    },
    ww: {
      name: "WW Conflict: First write is lost",
      conflicts: wwconflicts
    },
    rwr: {
      name: "RWR: First read is unrepeatable",
      conflicts: rwrconflicts
    }
  };
}



function isSerializable(schedule, serialSchedule) {
  function isEqual(dbstate, s1, s2) {
    var res1 = execute(s1, _.clone(dbstate)),
        res2 = execute(s2, _.clone(dbstate));
    return _.isEqual(res1, res2);
  };
  var dbStates = _.times(10, function() {
    return genInitDB(schedule); });
  var t1 = pickXact(schedule, "T1"),
      t2 = pickXact(schedule, "T2");
  var ser1 = _.flatten([t1, t2]),
      ser2 = _.flatten([t2, t1]);
  var equals = _.map([ser1, ser2], function(ser) {
    return _.all(dbStates, function(state) {
      return isEqual(state, schedule, ser);
    });
  })
  return _.any(equals);
}

function LockManager() {
  var _locks = this._locks = {};
  var getLocks = this.getLocks = function(obj) {
    if (obj in _locks) {
      return _locks[obj];
    };
    return [];
  }

  var release = this.release = function(xact, obj) {
    if (obj != null) {
      var locks = getLocks(obj);
      _locks[obj] = _.filter(locks, function(l) { return l.xact != xact; });
      //console.log(JSON.stringify(["release", xact, obj, locks.length, _locks[obj].length]))
    } else {
      _.each(_locks, function(v, k) { release(xact, k); });
    }
  }

  var isCompatible = this.isCompatible = function(xact, type, locks) {
    // if some other transaction has incompatible lock, then no
    if (locks.length == 0) return true;
    var isBad = _.any(locks, function(lock) {
      return (lock.xact != xact && (lock.type == "X" || type == "X"));
    });
    return !isBad;
  }


  var acquire = this.acquire = function(xact, obj, type) {
    var locks = getLocks(obj);
    //console.log([xact, obj, type, locks.length, isCompatible(xact, type, locks)]);
    if (isCompatible(xact, type, locks)) {
      locks.push({ xact: xact, obj: obj, type: type });
      _locks[obj] = locks;
      return true;
    }
    return false;
  }
  return this;
}

function isS2PL(schedule) {
  var locks = new LockManager;

  function isLastOp(xact, idx) {
    return _.size(_.filter(schedule, function(op, i) {
      return i > idx && op.xact == xact;
    })) == 0;
  }

  return _.all(schedule, function(op, idx) {
    var type = (op.op == "W")? "X" : "S";
    if (!locks.acquire(op.xact, op.obj, type)) return false;
    if (isLastOp(op.xact, idx)) 
      locks.release(op.xact);
    return true;
  });
}

function findAnomalies(schedule) {
}

function scheduleToTable(schedule) {
   var table = _.times(2, function(idx) {
     return _.times(_.size(schedule), function() { 
       return {xact: "T"+(idx+1)}; 
     })
   });
   _.each(schedule, function(op, cidx) {
     var ridx = (op.xact == "T1")? 0 : 1;
     table[ridx][cidx] = op;
   });
   return table;
}

function genProblem(opts) {
  var oidx = 0;
  var schedule = null;
  var isCS = randItem([true, false]);
  var isSer = isCS || randItem([true, false]);

  while(oidx < 70) {
    oidx ++;
    var serial = genTransactions(opts);
    var idx = 0;

    while(idx < 500) {
      idx ++;
      var tmpschedule = genSchedule(serial);
      if (isConflictSerializable(tmpschedule) == isCS &&
          isSerializable(tmpschedule) == isSer) {
        schedule = tmpschedule;
        break;
      }
    }

    if (schedule != null) break;
  }
  if (!schedule) {
    $("#problem").html("<h1>Failed to generate problem :(</h1>");
    return;
  }

  var data = { 
    header: _.times(_.size(schedule), function(i) {return i;}),
    schedule: scheduleToTable(schedule),
    isSerializable: isSerializable(schedule),
    isConflictSerializable: isConflictSerializable(schedule),
    isS2PL: isS2PL(schedule),
    conflicts: getConflicts(schedule)
  };
  $("#problem").html(
      genHTML("#schedule-template", data)
  );

  $("#solution").html(genHTML("#sol-template", data));

}

// helper to make using handlerbars easier
function genHTML(elid, data) {
  var source   = $(elid).html();
  var template = Handlebars.compile(source);
  return template(data);
}


