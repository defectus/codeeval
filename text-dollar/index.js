var fs = require("fs"),
    numbers = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
        '100': 'hundred',
        '1000': 'thousand',
        '1000000': 'million',
        '1000000000': 'billion'
    };

function textifyNumber(group, exponents, index) {
   if (index === exponents.length) {
      return group.reduce(function (a, c) {
         return a + numbers[c];
      }, 0);
   }
   var exponent = group.indexOf(exponents[index].key);
   if (exponent > -1) {
      return textifyNumber(group.slice(0, exponent), exponents, index + 1) * exponents[index].value +
              textifyNumber(group.slice(exponent + 1), exponents, index + 1);
   } else {
      return textifyNumber(group, exponents, index + 1);
   }
}

function t(number) {
    var subResult = textifyNumber(number, [{
        key: 'billion',
        value: 1000000000
    }, {
        key: 'million',
        value: 1000000
    }, {
        key: 'thousand',
        value: 1000
    }, {
        key: 'hundred',
        value: 100
    }], 0);
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        console.log(t(line.split('')));
    }
});
