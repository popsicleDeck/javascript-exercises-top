const fibonacci = function (count) {
  let preprev = 0;
  let prev = 1;
  let current = 0;
  for (let i = 1; i < count; i++) {
    current = preprev + prev;
    preprev = prev;
    prev = current;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
