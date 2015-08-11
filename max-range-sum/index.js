var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   if (line !== "") {
      line = line.split(';');
      console.log(sumRanges(parseInt(line[0]), line[1].split(' ')).reduce(function (a, c) {
         if (c > a) return c; else return a;
      }, 0));
   }
});

function sumRanges(noDays, stockMovements) {
   var result = [];
   for (var i = 0; i < (stockMovements.length - noDays + 1 ); i++) {
      result.push(stockMovements.slice(i, i + noDays).reduce(function (a, c) {
         return a + parseInt(c);
      }, 0));
   }
   return result;
}

