var fs        = require("fs"),
    numbers = {
       'negative' : 0,
       'zero'     : 0,
       'one'      : 1,
       'two'      : 2,
       'three'    : 3,
       'four'     : 4,
       'five'     : 5,
       'six'      : 6,
       'seven'    : 7,
       'eight'    : 8,
       'nine'     : 9,
       'ten'      : 10,
       'eleven'   : 11,
       'twelve'   : 12,
       'thirteen' : 13,
       'fourteen' : 14,
       'fifteen'  : 15,
       'sixteen'  : 16,
       'seventeen': 17,
       'eighteen' : 18,
       'nineteen' : 19,
       'twenty'   : 20,
       'thirty'   : 30,
       'forty'    : 40,
       'fifty'    : 50,
       'sixty'    : 60,
       'seventy'  : 70,
       'eighty'   : 80,
       'ninety'   : 90
    };

function traverseNumberText(group, exponents, index) {
   if (index === exponents.length) {
      return group.reduce(function (a, c) {
         return a + numbers[c];
      }, 0);
   }
   var exponent = group.indexOf(exponents[index].key);
   if (exponent > -1) {
      return traverseNumberText(group.slice(0, exponent), exponents, index + 1) * exponents[index].value +
              traverseNumberText(group.slice(exponent + 1), exponents, index + 1);
   } else {
      return traverseNumberText(group, exponents, index + 1);
   }
}

function parseText(line) {
   var subResult = traverseNumberText(line,
           [{key: 'million', value: 1000000}, {key: 'thousand', value: 1000}, {key: 'hundred', value: 100}], 0);
   return line[0] === 'negative' ? subResult * (-1) : subResult;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   if (line !== "") {
      console.log(parseText(line.split(' ')));
   }
});
