var fs = require("fs");

var firstLine = true;
const arrow1  = '>>-->', arrow2 = '<--<<';

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   if (line !== "") {
      if (firstLine) {
         firstLine = false;
      } else {
         process.stdout.write("\n");
      }
      doStringsAndArrows(line);
   }
});

function doStringsAndArrows(string) {
   var arrowCount = 0, i;
   for (i = 0; i < string.length; i++) {
      var arrow1Index = string.indexOf(arrow1, i);
      if (arrow1Index > -1) {
         arrowCount++;
         i = arrow1Index
      }
   }
   for (i = 0; i < string.length; i++) {
      var arrow2Index = string.indexOf(arrow2, i);
      if (arrow2Index > -1) {
         arrowCount++;
         i = arrow2Index;
      }
   }
   process.stdout.write(arrowCount.toString());
}
