var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   if (line !== "") {
      line = line.split(',');
      console.log(!!line[0].match(new RegExp(line[1].replace(/\*/g, '.*').replace(/\\\.\*/g, '\\*'))));
   }
});
