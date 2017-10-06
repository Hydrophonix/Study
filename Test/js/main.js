// var n = +prompt('ent num');
// function fetD(n) {
//   n =  ~~((n - ~~n) * 1e5) / 1e5;
//   return n;
// }
//
// alert(fetD(n));
//
// var str = prompt('ent text');
// function fCuC(str) {
//   if (!str) return str;
//   str = str[0].toUpperCase() + str.substr(1);
//   return str;
// }
//
// alert(fCuC(str));

// var str = prompt('ent text');
// function sP(str) {
//   str = str.toLowerCase();
//   if (~str.indexOf('xxx') || ~str.indexOf('viagra')) alert('badboy');
//   else alert('goodboy');
// }
//
// sP(str);

// var str = prompt('ent text');
// var len = +prompt('enter lenght number');
// function cut(str, len) {
//   if (str.length > (len - 1)) {
//     str = str.substr(0, (len - 3)) + '...';
//     return str;
//   } else return str;
// }
//
// alert(cut(str, len));

var data = +prompt('enter number');
var arr = [];
var sum = null;
while (!isNaN(data)) {
  arr.push(data);
  data = +prompt('enter number');
}

for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}

alert(sum);
