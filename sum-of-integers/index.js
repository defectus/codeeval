var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   if (line !== "") {
      line = line.split(',').map(parseFloat);
      var result =Array.apply(0, new Array(line.length)).map(function(_, i) {return i + 1}).map(function(v){
         return sumRanges(v, line);
      }).reduce(function (a, c) {
         var max = c.reduce(function(a, c){return c > a ? c : a}, -1000000000);
         if (max > a) return max; else return a;
      }, -100000000);
      console.log(result);
   }
});

function sumRanges(len, array) {
   var result = [];
   for (var i = 0; i < (array.length - len + 1 ); i++) {
      result.push(array.slice(i, i + len).reduce(function (a, c) {
         return a + parseInt(c);
      }, 0));
   }
   return result;
}

