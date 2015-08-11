var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   if (line !== "") {
      line = line.split(' ').map(parseFloat).reduce(function (a, c, i, o) {
         if (a.last === c) {
            a.cnt += 1;
            if (i + 1 === o.length) {
               a.text += (typeof a.last === 'undefined') ? '' : a.cnt + ' ' + a.last + ' ';
            }
         } else {
            a.text += (typeof a.last === 'undefined') ? '' : a.cnt + ' ' + a.last + ' ';
            a.cnt  = 1;
            a.last = c;
            if (i + 1 === o.length) {
               a.text += (typeof a.last === 'undefined') ? '' : a.cnt + ' ' + a.last + ' ';
            }
         }
         return a;
      }, {text: '', last: undefined, cnt: 0});
      console.log(line.text.trim());
   }
});

