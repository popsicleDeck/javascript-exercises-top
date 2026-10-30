const palindromes = function (inp) {
  let formatted = inp.toLowerCase().replace(/[.?!, ]/g, "");
  let reverse = formatted.split("").toReversed().join("");
  return formatted === reverse;
};

// Do not edit below this line
module.exports = palindromes;
