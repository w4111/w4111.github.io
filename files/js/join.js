
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
      return arr[randInt(0, arr.length-1)];
    }

    function genTable(name) {
      var bHash = randBool();
      var bPBtree = randBool();
      var bSBtree = randBool();
      return {
        name: name,
        npages: randExp(),
        hash: bHash,
        ptree: bPBtree,
        stree: bSBtree
      };
    }
    function genStats(opts) {
      var fillfactor = randItem(opts.fillfactors);
      var tupsize = randItem(opts.tupsizes);
      var pagesize = tupsize * randItem(opts.tupsperpage) / fillfactor;
      var desize = randItem(opts.desizes);
      var tupsperpage = Math.floor((fillfactor*pagesize) / tupsize);
      var desperpage = Math.floor((fillfactor*pagesize) / desize);
 
      return {
        fillfactor: fillfactor,
        desize: desize,
        tupsize: tupsize,
        pagesize: pagesize,
        tupsperpage: tupsperpage,
        desperpage: desperpage
      }
    }
    function log(base, y) {
      return Math.log(y) / Math.log(base);
    }
    function getheight(fanout, n)  {
      var h = 1;
      while (Math.pow(fanout, h) < n) {
        h++;
      }
      return h;
    }

    function solve(tables, stats) {

      // compute access path costs 
      _.each(tables, function(t) { accessCosts(t, stats); });

      var seen = { };

      // bestJoin has the following structure:
      //    { outer: , inner: , jointype: ,cost: , card: }
      // where outer could be another join
      var bestJoin = {};

      // keep track of the sequence of joins that we pick
      var choices = [];

      // Pick the starting Join
      _.each(tables, function(o) {
        _.each(tables, function(i) {
          if (o == i) return;
          var join = joinCost(o, i, stats);
          if (_.isUndefined(bestJoin.cost) || join.cost < bestJoin.cost) {
            var npages = Math.ceil(_.min([o.card, i.card]) * stats.tupsize / (stats.fillfactor*stats.pagesize));
            join.npages = npages;
            bestJoin = join;
          }
        })
      });
      seen[bestJoin.outer.name] = 1;
      seen[bestJoin.inner.name] = 1;
      choices.push(bestJoin)

      // Grow the left-deep join
      while(_.size(seen) < tables.length) {
        // compute cost of every possible inner table
        var opts = _.compact(_.map(tables, function(t) {
          if (t.name in seen) return;
          return joinCost(bestJoin, t, stats);
        }));

        var join = _.min(opts, function(join) { return join.cost; });
        var mincard = _.min([bestJoin.card, join.inner.card]);
        var npages = Math.ceil(mincard * stats.tupsize / (stats.fillfactor*stats.pagesize));
        bestJoin = {
          outer: bestJoin,
          inner: join.inner,
          jointype: join.jointype,
          cost: join.cost,
          npages: npages,
          card: _.min([bestJoin.card, join.inner.card])
        };
        choices.push(_.clone(bestJoin));
        seen[join.inner.name] = 1;
      }
      return {
        bestJoin: bestJoin,
        choices: choices
      };
    }

    function linearizeJoinTree(tree) {
      var ret = [];
      while (!_.isUndefined(tree) && tree.inner) {
        ret.push(tree.inner.name)
        ret.push(tree.jointype)
        tree = tree.outer;
      }
      ret.push(tree.name);
      return ret.reverse()
    }


    function accessCosts(t, stats) {
      var tupsperpage = stats.tupsperpage; //Math.floor((stats.fillfactor*stats.pagesize) / stats.tupsize);
      var desperpage = stats.desperpage; Math.floor((stats.fillfactor*stats.pagesize) / stats.desize);
      t.card = t.npages * tupsperpage;

      if (t.hash) {
        t.hashCost = 1;
      }
      if (t.ptree) {
        var height = Math.ceil(getheight(desperpage, t.npages));
        console.log(desperpage)
        console.log(t.npages)
        console.log(height);
        t.ptreeCost = height + 1;
      }
      if (t.stree) {
        var height = Math.ceil(getheight(desperpage, Math.ceil(t.card/desperpage)));
        t.streeCost = height + 1 + 1;
      }
    }

    // Estimate the join costs
    function joinCost(outer, inner, stats) {
      var pairs = [
        ['Hash-INL', inner['hashCost']],
        ['Primary-BTree-INL', inner['ptreeCost']],
        ['Sec-BTree-INL', inner['streeCost']],
        ['NL', inner['npages']],
        ['HashJoin', 1]
      ];
      var outerCost = outer.cost || outer.npages;
      pairs = _.reject(pairs, function(p) { return _.isNaN(p[1]) || _.isUndefined(p[1]); });
      pairs = _.map(pairs, function(p) {
        if (p[0] == 'HashJoin') {
          return [p[0], outerCost + inner.npages + outer.card * p[1]];
        }
        return [p[0], outerCost + outer.card * p[1]];
      })
      var ret = _.min(pairs, function(p) { return p[1]; });
      return {
        inner: inner,
        outer: outer,
        jointype: ret[0],
        cost: ret[1],
        card: _.min([outer.card, inner.card])
      }
    }

    function genProblem(opts) {
      var tables = _.times(4, function(i) { return genTable("T"+(i+1), opts); });
      var stats = genStats(opts);

      var solution = solve(tables, stats);
      var tree = solution.bestJoin;
      var choices = solution.choices; //linearizeJoinTree(tree)


      //
      // 1. Render the problem 
      //
      $("#problem").html(genHTML("#entry-template", {
        tables: tables,
        stats: stats
      }));


      //
      // 2. Render the solutions
      //

      // 2.1 generate the string representation of the join plan
      var joinStr = [choices[0].outer.name];
      _.each(choices, function(choice) {
        joinStr.push([
          " ", choice.jointype, " ", choice.inner.name, ") "
        ]);
      });
      joinStr.unshift(_.times(choices.length, function(){return "("}));
      joinStr = _.flatten(joinStr).join("");

      // 2.2 generate a list of the joins
      var joins = [];
      _.each(choices, function(choice, idx) {
        var outer = "R"+idx;
        if (idx == 0) outer = choice.outer.name;
        joins.push({
          result: "R"+(idx+1),
          outer: outer,
          inner: choice.inner.name,
          jointype: choice.jointype,
          cardinality: choice.card,
          joincost: choice.cost
        });
      });

      $("#solution").html(genHTML("#sol-template", {
        solution: joinStr,
        card: tree.card,
        cost: tree.cost,
        joins: joins
      }));

      // instrument the button to toggle the solutions
      $("#btn").click(function() {
        $(".sol").toggle();
      })
      //$("#btn").click()
        
    }

    // helper to make using handlerbars easier
    function genHTML(elid, data) {
      var source   = $(elid).html();
      var template = Handlebars.compile(source);
      return template(data);
    }


