const add = function (num1, num2) {
  var result = num1 + num2;
  return result;
};

const subtract = function (num1, num2) {
  var result = num1 - num2;
  return result;
};

const sum = function (nums) {
  var result = 0;
  for (var num of nums) {
    result += num;
  }
  return result;
};

const multiply = function (nums) {
  let result = nums[0];
  for (var i = 1; i < nums.length; i++) {
    result = result * nums[i];
  }
  return result;
};

const power = function (num1, power) {
  var result = num1 ** power;
  return result;
};

const factorial = function (num) {
  var result = num;
  if (num === 0) {
    return 1;
  } else if (num > 0) {
    for (let i = num - 1; i > 0; i--) {
      result = result * i;
    }
    return result;
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
