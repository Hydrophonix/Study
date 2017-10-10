var n = +prompt('ent num');
function fetD(n) {
  n =  ~~((n - ~~n) * 1e9) / 1e9;
  return n;
}

alert(fetD(n));
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

// var data = +prompt('enter number');
// var arr = [];
// var sum = null;
// while (!isNaN(data)) {
//   arr.push(data);
//   data = +prompt('enter number');
// }
//
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
//
// alert(sum);

//                                ERATHOSPHEN

// var arr = [];
// var n = +prompt('Please enter integer nubmer under 10000');
// function createArr(n) {
//   if (n > 0 && n <= 10000 && (n % 1 == 0)) {
//     for (var j = 1; j < n + 1; j++) {
//       arr.push(j);
//     }
//   }
// }
//
// function Erathosphen(arr, n) {
//   for (var i = 1; i * i <= n; i++) {
//     for (var k = i + 1; k < arr.length; k++) {
//       if (arr[k] % arr[i] === 0) arr[k] = 0;
//     }
//   }
// }
//
// function Calculate(arr) {
//   var result = 0;
//   for (var l = 0; l < arr.length; l++) {
//     result += arr[l];
//   }
//
//   return result;
// }
//
// createArr(n);
// Erathosphen(arr, n);
// console.log(arr);
// console.log(Calculate(arr));
