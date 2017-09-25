var taskNumber = prompt('Enter the number of task', '1 or 2');
if (taskNumber == 1) {
  console.log('Result is ', Pow());
} else {
  if (taskNumber == 2) {
    alert('Welcome ' + Authorisation());
  } else {
    alert('Invalid task number');
  }
}

function Pow() {
  var num = prompt('Enter the number you want to exponentiation', 'it must be an integer');
  var exp = prompt('Enter the exponent', 'it must be an integer');
  var n = Math.abs(exp);
  var result = 1;
  if ((num % 1 == 0) & (n % 1 == 0)) {
    for (var i = 0; i < n; i++) {
      result *= num;
    }

    if (exp < 0) result = 1 / result;
    return result;
  } else {
    alert("Entered numbers isn't integer. Please enter correct numbers");
    result = 'incorrect';
    return result;
  }
}

function Authorisation() {
  var loginArr = new Array();
  for (var i = 0; i < 5; i++) {
    loginArr.push(prompt('Enter the login'));
  }

  var login = prompt('Please enter your login');
  for (var k = 0; k < loginArr.length; k++) {
    if (login === loginArr[k]) {
      return login;
    }
  }

  alert("Your login isn't valid");
}
