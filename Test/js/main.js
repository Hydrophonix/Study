// var n = +prompt('ent num');
// function fetD(n) {
//   n =  ~~((n - ~~n) * 1e9) / 1e9;
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
//, 35, -55, 32, 8

//                                                bssss

// var arr = [-150, -100, 3, 10, 3, -5, 1, 2, -3, 4, 3, 2, -4, 6, -200, 5, 100];
// function getMaxSubSum(arr) {
//   var maxSum = 0;
//   var sum2 = 0;
//   var right = 0;
//   var negative = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       if (negative >= 0 || maxSum == 0) {
//         maxSum += arr[i];
//         negative = 0;
//       } else {
//         if ((arr[i] + negative) > 0) {
//           if ((maxSum + negative) > 0) {
//             maxSum = maxSum + negative + arr[i];
//             negative = 0;
//             sum2 = 0;
//           } else {
//             maxSum = arr[i] + sum2;
//             negative = 0;
//           }
//         } else {
//           sum2 += arr[i];
//           negative += arr[i];
//         }
//       }
//     } else {
//       negative += arr[i];
//     }
//
//   }
//
//   return maxSum;
// }
//
// console.log(getMaxSubSum(arr));

// function getMaxSubSum(arr) {
//   var sum = 0;
//   var maxSum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     maxSum = Math.max(sum, maxSum);
//     if (sum < 0) sum = 0;
//   }
//
//   return maxSum;
// }
//
// console.log(getMaxSubSum([100, -2, 3]));
// console.log(getMaxSubSum([1, 2, 3]));
// console.log(getMaxSubSum([-1, -2, -3]));
// console.log(getMaxSubSum([-1, 2, 3, -9]));
// console.log(getMaxSubSum([-1, 2, 3, -9, 3, 11]));
// console.log(getMaxSubSum([-2, -1, 1, 2]));

//                                               Bsss

// var obj = {
//   className: 'open menu',
// };
// function addClass(obj, cls) {
//   var names = obj.className.split(' ');
//   for (var i = 0; i < names.length; i++) {
//     if (names[i] == cls) return;
//   }
//
//   names.push(cls);
//   obj.className = names.join(' ');
// }
//
// console.log(addClass(obj, 'new'), obj.className);
// console.log(addClass(obj, 'open'), obj.className);
// console.log(addClass(obj, 'me'), obj.className);
//
// console.log(obj.className);

//                                        bsssss

// function camelize(str) {
//   var words = str.split('-');
//   for (var i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//   }
//
//   var result = words.join('');
//   console.log(result);
//   return result;
// }
//
// console.log(camelize('background-color'));
// camelize('list-style-image');
// camelize('-webkit-transition');

//                                      bsssssss

// var obj = {
//   className: 'open open wewer menu',
// };
// function removeClass(obj, cls) {
//   var names = obj.className.split(' ');
//   for (var i = 0; i < names.length; i++) {
//     if (names[i] == cls) {
//       names.splice(i, 1);
//       i--;
//     }
//   }
//
//   obj.className = names.join(' ');
// }
//
// console.log(removeClass(obj, 'open'), obj.className);
// console.log(removeClass(obj, 'blabla'), obj.className);
// console.log(removeClass(obj, 'menu'), obj.className);
//
// console.log(obj.className);

//                                      bsssssss

// var arr = [5, 3, 8, 1];
// function filterRangeInPlace(arr, a, b) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i--, 1);
//     }
//   }
// }
//
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

//                                  bsgegsegse

// function fnsort(a, b) {
//   return b - a;
// }
//
// var arr = [5, 2, 1, -10, 8];
// arr.sort(fnsort);
// console.log(arr);

//                                    bbsbbaba
/*jshint esversion: 6 */

// var arr = ['Есть', 'жизнь', 'на', 'Марсе'];
// var nArr = arr.map(obj => obj.length);
// console.log(nArr);

//                                        gwegsegseg

// var arr = [1, 2, 3, 4, 5];
// var total = [];
// var nArr = arr.reduce((first, second) => {
//   total.push(first);
//   return first + second;
// });
// total.push(nArr);
// console.log(total);

//                                         ggggggggg

// let sum = a => b => a + b;
// console.log(sum(6)(4));

//                                          qqqqqqqq

/*
function makeBuffer() {
  let bufferString = '';
  function buff(value) {
    if (arguments.length == 0) {
      return bufferString;
    } else {
      bufferString += value;
    }
  }

  buff.clear = () => bufferString = '';
  return buff;
}

let buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
console.log(buffer());
buffer.clear();
buffer(1);
console.log(buffer());
*/

//                                      qqqqqqqqqq

/*let users = [{
  name: 'Вася',
  surname: 'Иванов',
  age: 20,
}, {
  name: 'Петя',
  surname: 'Чапаев',
  age: 25,
}, {
  name: 'Маша',
  surname: 'Медведева',
  age: 18,
}];

function byField(field) {
  return function (a, b) {
    return a[field] > b[field] ? 1 : -1;
  };
}

users.sort(byField('name'));
users.forEach(function (user) {
  console.log(user.name);
});

users.sort(byField('age'));
users.forEach(function (user) {
  console.log(user.name);
});
*/

//                                    filtering array by func

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
const inBetween = (a, b) => x => (x >= a && x <= b);
const inArray = arr => x => arr.indexOf(x) != -1;
const filter = (arr, func) => {
  let newArr = arr.filter(func);
  return newArr;
};

console.log(filter(arr, function (a) {
  return a % 2 == 0;
}));

console.log(filter(arr, inBetween(3, 6))); // 3,4,5,6
console.log(filter(arr, inArray([1, 2, 10]))); // 1,2
*/

//                                      army of functions
/*
function makeArmy() {
  let shooters = [];
  for (let i = 0; i < 10; i++) {
    shooters[i] = () => {
      console.log(i);
    };
  }

  return shooters;
}

let army = makeArmy();
console.log(makeArmy());
army[0]();
army[5]();
*/

//                                      calculator

/*
let calculator = {
  read: function () {
    this.a = +prompt('Enter the first number');
    this.b = +prompt('Enter the second number');
  },

  sum: function () {
    return this.a + this.b;
  },

  mul: function () {
    return this.a * this.b;
  },
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
*/

//                                    ladder

/*
let ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this;
  },

  down: function () {
    this.step--;
    return this;
  },

  showStep: function () {
    console.log(this.step);
    return this;
  },

};

ladder.up().up().down().up().down().showStep();
*/

//                                      sum2

/*
function sum(a) {
  let sumNow = a;
  function sum2(b) {
    sumNow += b;
    return sum2;
  }

  sum2.toString = () => sumNow;
  return sum2;
}

console.log(sum(6)(4)(7)(10));
*/

//                                     constructor

/*
function Calculator() {
  this.read = function () {
    this.a = +prompt('Enter the first number');
    this.b = +prompt('Enter the second number');
  };

  this.sum = function () {
    return this.a + this.b;
  },

  this.mul = function () {
    return this.a * this.b;
  };
}

let calc = new Calculator();
calc.read();
console.log('Сумма=' + calc.sum());
console.log('Произведение=' + calc.mul());
*/

//                                    accumulator

/*
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt('Enter the number');
  };
}

let accum = new Accumulator(1);
accum.read();
accum.read();
console.log(accum.value);
*/

//                                    calculatorPro

/*
function Calculator() {
  this['+'] = (a, b) => a + b;
  this['-'] = (a, b) => a - b;
  this.calculate = function (str) {
    this.a = +str.slice(0, str.indexOf(' '));
    this.b = +str.slice(str.lastIndexOf(' '));
    this.operator = str.slice(str.indexOf(' ') + 1, str.lastIndexOf(' '));
    return this[this.operator](this.a, this.b);
  };

  this.addMethod = function (name, func) {
    this[name] = func;
  };
}
let proCalc = new Calculator();
console.log(proCalc.calculate('23 + 45'));
proCalc.addMethod('*', (a, b) =>  a * b);
proCalc.addMethod('/', (a, b) =>  a / b);
proCalc.addMethod('**', (a, b) =>  Math.pow(a, b));
console.log(proCalc.calculate('2 ** 3'));
*/

//                                    defineProperties

/*
function User(fullName) {
  this.fullName = fullName;
  Object.defineProperties(this, {
    firstName: {
      get: () => this.fullName.split(' ')[0],
      set: (newFirstName) => this.fullName = newFirstName + ' ' + this.lastName,
    },
    lastName: {
      get: () => this.fullName.split(' ')[1],
      set: (newLastName) => this.fullName = this.firstName + ' ' + newLastName,
    },
  });
}

let vasya = new User('Vasiliy Pupkin');

console.log(vasya.firstName); // Василий
console.log(vasya.lastName); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

console.log(vasya.fullName); // Василий Сидоров
*/

//                                  factoryMethods

/*
function Article() {
  this.created = new Date();
  Article.last = this.created;
  Article.count++;
}

Article.count = 0;
Article.showStats = function () {
  console.log('last date is ' + this.last + ' from ' + this.count + ' dates');
};

new Article();
new Article();
Article.showStats();
new Article();
Article.showStats();
*/

//                                   call

/*
function sumArgs() {
  return [].reduce.call(arguments, (a, b) =>a + b);
}

let test = sumArgs(1, 2, 3);
console.log(test);
*/

//                                   apply

/*
function sum() {
  return [].reduce.call(arguments, (a, b) => a + b);
}

function mul() {
  return [].reduce.call(arguments, (a, b) => a * b);
}

function applyAll(func) {
  return func.apply(this, [].slice.call(arguments, 1));
}

console.log(applyAll(sum, 1, 2, 3));
console.log(applyAll(mul, 2, 3, 4));
console.log(applyAll(Math.max, 2, -2, 3));
console.log(applyAll(Math.min, 2, -2, 3));
*/

//                                    time

/*
function printNumbersInterval() {
  let number = 1;
  let timerId = setInterval(function () {
    console.log(number);
    if (number == 20) clearInterval(timerId);
    number++;
  }, 100);
}

printNumbersInterval();
*/

//                                    loging decorator

/*
function work(a) {
  console.log(a * 2);
}

let logs = [];
function makeLogging(f, log) {
  return function () {
    log.push(arguments[0]);
    return f.apply(this, arguments);
  };
}

let works = makeLogging(work, logs);
works(1);
works(5);

console.log(logs);
*/

//                                  logging decorator 2

/*
function work(a, b) {
  console.log(a + b);
}

let logs2 = [];
let logs = [];
function makeLogging(f, log, log2) {
  return function () {
    [].forEach.call(arguments, item => log.push(item));
    log2.push([].slice.call(arguments));
    return f.apply(this, arguments);
  };
}

let works = makeLogging(work, logs, logs2);
works(1, 2);
works(5, 3);
works(11, 44);

console.log(logs);
logs2.forEach(i => console.log(i.join(',')));
*/

//                                  caching decorator

/*
function f(x) {
  return Math.random() * x;
}

function makeCaching(f) {
  let results = {};
  return function (x) {
    if (!(x in results)) {
      results[x] = f.call(this, x);
    }

    return results[x];
  };
}

let fu = makeCaching(f);
let a = fu(1);
let b = fu(1);
console.log(a == b);
b = fu(2);
console.log(a == b);
*/

//                                  polymorph function

/*
const formatDate = date => {
  const OPTIONS = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  };
  switch ({}.toString.call(date).slice(8, -1)) {
    case 'String':
      return new Date(date).toLocaleString('ru', OPTIONS);
    case 'Number':
      return new Date(date * 1000).toLocaleString('ru', OPTIONS);
    case 'Array':
      return new Date(date[0], date[1], date[2]).toLocaleString('ru', OPTIONS);
    case 'Date':
      return date.toLocaleString('ru', OPTIONS);
    default:
      return 'Something went wrong';
  }
};

console.log('Date is: ' + formatDate('2011-10-02'));
console.log('Date is: ' + formatDate(1234567890));
console.log('Date is: ' + formatDate([2014, 0, 1]));
console.log('Date is: ' + formatDate(new Date(2014, 0, 1)));

// var 2

const formatDate2 = date => {
  const type = {}.toString.call(date).slice(8, -1);
  const options = new Intl.DateTimeFormat('ru', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });
  const functions = {
    String: x => new Date(x),
    Number: x =>  new Date(x * 1000),
    Array: (args) =>  new Date(...args),
    Date: x => x,
  };

  return options.format(functions[type](date));
};

console.log('Date is: ' + formatDate2('2011-10-02'));
console.log('Date is: ' + formatDate2(1234567890));
console.log('Date is: ' + formatDate2([2014, 0, 1]));
console.log('Date is: ' + formatDate2(new Date(2014, 0, 1)));
*/

//                                  JSON

/*
let leader = {
  name: 'Василий Иванович',
  age: 35,
};

let jsonStr = JSON.stringify(leader);
console.log(jsonStr);
let normalStr = JSON.parse(jsonStr);
console.log(normalStr);
*/

//                                  timeDecorator

/*
const work = x => console.log(x + ' seconds');
const delay = (func, msDelay) => function () {
    let _this = this;
    let args = arguments;
    setTimeout(function () {
      func.apply(_this, args); }, msDelay);
  };

delay(work, 2000)(2);
delay(work, 3000)(3);
*/

//                                   debounce

/*
const work = x => console.log(x);
const debounce = (f, ms) => {
  let state = null;
  const COOLDOWN = 1;

  return function () {
    if (state) return;
    f.apply(this, arguments);
    state = COOLDOWN;
    setTimeout(function () { state = null; }, ms);
  };

};

let f = debounce(work, 1000);

f(1);
f(2);
setTimeout(() => f(3), 100);
setTimeout(() => f(4), 1100);
setTimeout(() => f(5), 1500);
*/

//                                    OOP

/*
function User() {
  let firstName;
  let surname;
  this.setFirstName = name => firstName = name;
  this.setSurname = name => surname = name;
  this.getFullName = () => firstName + ' ' + surname;
}

const userok = new User();
userok.setFirstName('Vasyan');
userok.setSurname('LOLpro');
console.log(userok.getFullName());
*/

//                                    coffeMachine

/*
function Machine(power) {
  this._enabled = false;
  this._power = power;
  this.enable = () => this._enabled = true;
  this.disable = () => this._enabled = false;
}

function CoffeMachine(power, capacity) {
  Machine.call(this, arguments[0]);
  let waterAmount = 0;
  let onReady = () => console.log('Кофе готов!');
  let timerId;
  const WATER_HEAT_CAPACITY = 4200;
  const BOIL_TIME = () => (waterAmount * WATER_HEAT_CAPACITY * 80 / this._power);
  const disableProtected = this.disable;
  this.disable = () => {
    clearTimeout(timerId);
    disableProtected.call(this);
  };

  this.setWaterAmount = amount => {
    if (amount < 0) {
      throw new Error('Значение должно быть положительным');
    }

    if (amount > capacity) {
      throw new Error('Нельзя залить воды больше, чем ' + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = () => waterAmount;
  this.getPower = () => this._power;
  this.run = () => !this._enabled ? console.log('Кофеварка выключена' + this._enabled)
    : (timerId = setTimeout(() => onReady(), BOIL_TIME()));
  this.addWater = amount => this.setWaterAmount(waterAmount + amount);
  this.setOnReady = newOnReady => onReady = newOnReady;
  this.isRunning = () => !!timerId;
}

const kafei = new CoffeMachine(100000, 2500);

kafei.setWaterAmount(1750);
console.log(kafei.getPower());

// kafei.addWater(250);
// kafei.setOnReady(function () {
  // var amount = kafei.getWaterAmount();
  // alert('Готов кофе: ' + amount + 'мл');
// });

// kafei.run();
// console.log(kafei.isRunning());

const machine = new Machine(2);
kafei.run();
machine.enable();
console.log(machine._enabled);
kafei.enable();
console.log(kafei._enabled);
kafei.run();
kafei.disable();
console.log(kafei._enabled);
*/

//                                      fridge

/*
function Machine(power) {
  this._enabled = false;
  this._power = power;
  this.enable = () => this._enabled = true;
  this.disable = () => this._enabled = false;
}

function Fridge(power) {
  Machine.call(this, arguments[0]);
  let _disable = this.disable;
  let food = [];
  this.disable = () => food.length ? console.log('cant off with food') : _disable();
  this.addFood = function () {
    !this._enabled ?
    console.log('Fridge is disabled. Please switch on' + arguments) :
    ((this._power / 100) > food.length + arguments.length) ?
    (food = food.concat([].slice.call(arguments))) :
    console.log('Too much items');
  };

  this.filterFood = function (filter) {
    return food.filter(filter);
  };

  this.getFood = () => food.slice();
  this.removeFood = item => food.indexOf(item) ?
  food.splice(food.indexOf(item), 1) :
  console.log('there is no this item');
}

const fridge = new Fridge(500);

fridge.enable();

fridge.addFood({
  title: 'котлета',
  calories: 100,
});
fridge.addFood({
  title: 'сок',
  calories: 30,
});
fridge.addFood({
  title: 'зелень',
  calories: 10,
});
fridge.addFood({
  title: 'варенье',
  calories: 150,
});

console.log(fridge.getFood().length);

let dietItems = fridge.filterFood(function (item) {
  return item.calories < 50;
});

dietItems.forEach(function (item) {
  console.log(item.title);
  fridge.removeFood(item);
});

console.log(fridge.getFood());
fridge.disable();
*/

//                                            prototype

/*
function CoffeeMachine(power) {
  this._waterAmount = 0;
  this._power = power;
  CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

  CoffeeMachine.prototype.getTimeToBoil = () =>
  this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;

  CoffeeMachine.prototype.run = () =>
  setTimeout(() => console.log('Кофе готов!'), this.getTimeToBoil());

  CoffeeMachine.prototype.setWaterAmount = amount => this._waterAmount = amount;
}

const coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();
*/

//                                        hadlebarsshit

// const newArr = data.reduce((gStr, item, i) => {
//   gStr = gStr + '<tr>';
//   for (let prop in item) {
//     gStr += `<td>${item[prop]}</td>`;
//   };
//   gStr += '</tr>';
//
//   return gStr;
// }, '')

//                                            clockProto

function Clock(options) {
  this._template = options.template;
}

Clock.prototype._render = function () {
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  let min = date.getMinutes();
  if (min < 10) min = '0' + min;

  let sec = date.getSeconds();
  if (sec < 10) sec = '0' + sec;

  const output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

  console.log(output);
};

Clock.prototype.start = function () {
  this._render();
  const _this = this;
  this._timer = setInterval(() => _this._render, 1000);
};

Clock.prototype.stop = function () { clearInterval(this._timer); };

const clock = new Clock({
  template: 'h:m:s',
});

clock.start();
