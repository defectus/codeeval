var fs = require("fs");

var firstLine = true;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   if (line !== "") {
      if (firstLine) {
         firstLine = false;
      } else {
         process.stdout.write("\n");
      }
      line = line.split(' ');
      doStringMask(line[0], line[1]);
   }
});

function doStringMask(string, mask) {
   for (var i = 0; i < string.length; i++) {
      if (mask.charAt(i) === '1') {
         process.stdout.write(string.charAt(i).toUpperCase());
      } else {
         process.stdout.write(string.charAt(i));
      }
   }
}
