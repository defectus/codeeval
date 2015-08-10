var fs = require("fs");

var firstLine = true;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   if (line !== "") {
      if (firstLine) {
         firstLine = false;
      } else {
         process.stdout.write("\n");
      }
      var cols = parseCols(line);
      cols     = flipArray(cols);
      cols     = doSortMatrixColumns(cols);
      cols     = cols.reduce(function (prev, col) {
         prev.push(col.join(' '));
         return prev;
      }, []).join(' | ');
      process.stdout.write(cols);
   }
});

function doSortMatrixColumns(cols) {
   cols.sort(function (a, b) {
      for (var i = 0; i < a.length; i++) {
         if (a[i] !== b[i])
            return a[i] - b[i];
      }
      return 1;
   });
   cols = flipArray(cols);
   return cols;
}

function flipArray(cols) {
   return cols.map(function (_, c) {
      return cols.map(function (r) {
         return r[c];
      });
   });
}

function parseCols(line) {
   var cols = [];
   var rows = line.split(' | ');
   rows.forEach(function (_, i) {
      cols[i] = [];
   });
   for (var i = 0; i < rows.length; i++) {
      var row = rows[i].split(' ');
      for (var j = 0; j < row.length; j++) {
         cols[i].push(parseInt(row[j]));
      }
   }
   return cols;
}
