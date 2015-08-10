var fs        = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   if (line !== "") {
      var string = line.split(',')[0];
      line.split(',')[1].trim().split('').forEach(function (char) {
         string = string.replace(new RegExp(char, 'g'), '');
      });
      console.log(string);
   }
});
