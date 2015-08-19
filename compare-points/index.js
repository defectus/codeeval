var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var line = line.split(' ').map(parseFloat),
            O = line[0],
            P = line[1],
            Q = line[2],
            R = line[3],
            res = '';
        if (R > P) {
            res = 'N';
        }
        else if (R < P) {
            res = 'S';
        }
        if (Q > O) {
            res += 'E';
        }
        else if (Q < O) {
            res += 'W';
        }
        if (Q === O && R === P) {
            res = 'here'
        }
        console.log(res);
    }
});