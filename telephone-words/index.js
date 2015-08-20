var fs = require("fs"),
    numbers = {
        '0': ['0'],
        '1': ['1'],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

function permutateNumber(number, current, n, res) {
    numbers[number[n]].forEach(function(v) {
        if (n + 1 < number.length) {
            permutateNumber(number, current + v, n + 1, res);
        }
        else {
            res.push(current + v);
        }
    });
    return res;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        console.log(permutateNumber(line.split(''), '', 0, []).sort().join(','));
    }
});
