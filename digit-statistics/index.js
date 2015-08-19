var fs = require("fs");

function getLastDigit(number) {
   return number % 10;
}

function getCycle(number) {
   var cycle = [],
      current = number,
      initial = number;
   while (cycle.indexOf(current) === -1) {
      cycle.push(current);
      current = getLastDigit(number *= initial);
   }
   return cycle;
}

function getStats(laps, additional, cycle) {
   var stats = new Array(10);
   for (var index = 0; index < 10; index++)
      stats[index] = cycle.indexOf(index) > -1 ? laps : 0;
   for (index = 0; index < additional; index++) {
      var current = cycle[index];
      stats[current]++;
   }
   var builder = "";
   for (index = 0; index < 10; index++)
      builder += ", " + index + ": " + parseInt(stats[index]);
   return builder.substring(2);
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
   if (line !== "") {
      var line = line.split(' ').map(parseFloat),
         number = line[0],
         exp = line[1];

      var cycle = getCycle(number),
         cycleSize = cycle.length,
         laps = parseInt(exp / cycleSize),
         diff = laps * cycleSize,
         additional = exp - diff;

      console.log(getStats(laps, additional, cycle));
   }
});
