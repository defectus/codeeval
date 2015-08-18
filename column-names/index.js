var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var line = parseInt(line),
            fn = (line - 1) % 26,
            sn = (((line - 27) % 676) / 26),
            // tn = ((line - 703) / 702),
            tn = ((line - 703) / 676),
            f = String.fromCharCode(fn + 65),
            s = String.fromCharCode(sn >= 0 ? sn + 65: 32),
            t = String.fromCharCode(tn >= 0 ? tn + 65: 32);

        //console.log(fn + ':' + sn + ':' + tn);
        console.log((t + s + f).trim());
    }
});