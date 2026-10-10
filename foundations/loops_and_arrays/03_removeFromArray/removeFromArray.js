const removeFromArray = function (arr, ...args) {
  for (const arg of args) {
    while (arr.includes(arg)) {
      // remove argument from array
      arr.splice(arr.indexOf(arg), 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
