var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
   if (line !== "") {
      var array = line.split(';')[0].split(',').map(parseFloat),
         n = parseInt(line.split(';')[1]),
         res = [];
      for (var i = 0; i < parseInt(array.length / n); i++) {
         res = res.concat(array.slice(i * n, (i + 1) * n ).reverse());
      }
      res = res.concat(array.slice(parseInt(array.length / n) * n, array.length));
      console.log(res.join(','));
   }
});
