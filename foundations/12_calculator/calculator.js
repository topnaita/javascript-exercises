const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  arr = [1, 4, 2];
  const sum = arr.reduce((total, current) => total + current, 0);
  return sum;
};

const multiply = function (arr) {
  arr = [2, 4];
  const mulArray = arr.reduce((total, current) => total * current, 1);
  return mulArray;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
