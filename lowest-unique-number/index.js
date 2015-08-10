var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   if (line !== "") {
      line = line.replace(/\ /g, '');
      console.log(line.indexOf(line.split('').reduce(function(a, c){a.unique.indexOf(c) === -1 ? a.unique.push(c) : []; a.counts[c] ? a.counts[c] += 1 : a.counts[c] = 1; a.counts[c] > 1 ? a.unique.splice(a.unique.indexOf(c),1) : null;return a}, {counts:{}, unique:[]}).unique.sort().slice(0)[0]) + 1);
   }
});
