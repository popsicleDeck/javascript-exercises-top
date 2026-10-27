const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, current) => total * current);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let arr = [];
  for (let i = num; i > 0; i--) {
    arr.push(i);
  }
  if (arr != 0) {
    return arr.reduce((total, current) => total * current);
  } else {
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
