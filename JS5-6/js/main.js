const display = document.getElementById('display');
const start = document.getElementById('start');
const split = document.getElementById('split');
const reset = document.getElementById('reset');
const splitBlock = document.getElementById('splits');

let [n, time, startingPoint, timerID] = [0];

const stringTemplate = time =>
`${makeNumbers(time.getUTCHours())}:${makeNumbers(time.getMinutes())}:${makeNumbers(time.getSeconds())}:${makeNumbers((time.getMilliseconds() / 10).toFixed())}`;

const blockTemplate = (type, time) => `<div>${++n} ${type} ${stringTemplate(time)}</div>`

const timer = func => setInterval(func, 10);

const getDiff = () => new Date(new Date() - startingPoint);

const makeNumbers = number => {
  const newId = `0${number}`;
  return newId.substr(newId.length - 2, 2);
}

const iteration = () => {
  time = getDiff();
  display.textContent = stringTemplate(time);
}

const startTimer = () => {
  if (!startingPoint) {
    startingPoint = new Date();
  } else {
    startingPoint = getDiff();
  }
  if (start.textContent === 'start') {
    timerID = timer(iteration);
    start.textContent = 'stop';
    start.classList.add('active');
  } else {
    clearInterval(timerID);
    start.textContent = 'start';
    start.classList.remove('active');
    splitBlock.insertAdjacentHTML('beforeEnd', blockTemplate('stop\u00A0', time));
  }
}

const splitTimer = () => {
  splitBlock.insertAdjacentHTML('beforeEnd', blockTemplate('split', time));
}

const resetTimer = () => {
  clearInterval(timerID);
  [startingPoint, n]  = [0, 0];
  display.textContent = stringTemplate(new Date(0));
  start.textContent = 'start';
  start.classList.remove('active');
  splitBlock.innerHTML = '';
}

display.textContent = stringTemplate(new Date(0));
start.addEventListener('click', startTimer);
reset.addEventListener('click', resetTimer);
split.addEventListener('click', splitTimer);
