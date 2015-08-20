var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
   if (line !== "") {
      var number = line.replace(/\ /g, ''),
         checksum = number.split('').reverse().map(parseFloat).reduce(function(a,c,i){
            return a + (i % 2 ? (c * 2).toString().split('').map(parseFloat).reduce(function(d,e){return d + e}, 0) : c);
         },0);
      console.log(checksum % 10 ? 0 : 1);
   }
});
