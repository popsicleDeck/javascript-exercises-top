const sumAll = function (num1, num2) {
  if (
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }
  let start = 0;
  let end = 0;
  if (num1 > num2) {
    start = num2;
    end = num1;
  } else {
    start = num1;
    end = num2;
  }
  let sum = 0;
  for (start; start <= end; start++) {
    sum += start;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
