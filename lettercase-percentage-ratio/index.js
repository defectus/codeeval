var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var r = line.split('').reduce(function(a, c){
            if (!c.match(/[a-zA-Z]/))
                return a;
            if (c.toUpperCase() === c) 
                a.u += 1;
            else 
                a.l += 1
            return a;
        },{l:0,u:0});
        console.log("lowercase: " + (r.l / line.length * 100).toFixed(2) + " uppercase: " + (r.u / line.length * 100).toFixed(2));
    }
});