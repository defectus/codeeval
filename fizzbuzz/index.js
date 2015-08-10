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
      doFizzBuzz(parseInt(line[0]), parseInt(line[1]), parseInt(line[2]));
   }
});

function doFizzBuzz(fizz, buzz, max) {
   for (var i = 1; i <= max; i++) {
      if (i % fizz === 0) {
         process.stdout.write("F");
      }
      if (i % buzz === 0) {
         process.stdout.write("B");
      }
      if (!(i % fizz === 0 || i % buzz === 0)) {
         process.stdout.write(i.toString());
      }
      process.stdout.write(' ');
   }
}
