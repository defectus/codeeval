var fs  = require("fs");

function toTime(s) {
    s = s.split(':').map(parseFloat);
    return new Date(0,0,0,s[0],s[1],s[2]);
}

function paddingZero(n) {
    return n.toFixed(0).length === 1 ? '0' + n.toFixed(0) : n.toFixed(0);
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var date1 = toTime(line.split(' ')[0]), 
        date2 = toTime(line.split(' ')[1]),
        diff = Math.abs(date1 - date2),
        dateDiff = new Date(diff);
        console.log(paddingZero(dateDiff.getUTCHours()) + ':' +  paddingZero(dateDiff.getUTCMinutes()) + ':' + paddingZero(dateDiff.getUTCSeconds()));
    }
})