var fs = require("fs");

function rotateString(s) {
    return s.substring(1) + s.charAt(0);
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var a = line.split(',')[0],
            b = line.split(',')[1];
        if (a.length !== b.length) {
            console.log('False');
            return;
        }
        for (var i = 0; i < b.length; i++) {
            if (b === a) {
                console.log('True');
                return;
            }
            b = rotateString(b);
        }
        console.log('False');
    }
});
