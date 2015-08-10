var fs        = require("fs");

lines = fs.readFileSync(process.argv[2]).toString().split('\n');

lines.slice(1).sort(function (a, b) {
   return b.length - a.length;
}).slice(0, parseInt(lines[0])).forEach(function (line) {
   console.log(line);
});

