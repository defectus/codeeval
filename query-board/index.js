var fs    = require("fs"),
    array = Array.apply(null, new Array(256)).map(function () {
       return Array.apply(null, new Array(256)).map(function () {
          return 0;
       });
    }),
    dsl   = {
       SetCol  : function (col, val) {
          val = parseInt(val);
          array.forEach(function (v) {
             v[col] = val;
          });
       },
       SetRow  : function (row, val) {
          val        = parseInt(val);
          array[row] = Array.apply(null, new Array(256)).map(function () {
             return val;
          });
       },
       QueryRow: function (row) {
          console.log(array[row].reduce(function (a, c) {
             return a + c;
          }, 0));
       },
       QueryCol: function (col) {
          console.log(array.reduce(function (a, c) {
             return a + c[col];
          }, 0));
       }
    };

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   if (line !== "") {
      line = line.split(' ');
      dsl[line[0]].apply(null, line.slice(1));
   }
});

