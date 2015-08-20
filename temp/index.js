var a = 'w=9090;a=111;b=222',
   b = 'a=333;c=234';
b = b.split(';').reduce(function(p, c) {
   var t = c.split('=');
   p[t[0]] = t[1];
   return p;
}, {});
a = a.split(';').map(function(v) {
   var t = v.split('=');
   return b[t[0]] ? t[0] + '=' + b[t[0]] : v;
}).join(';');
console.log(a);