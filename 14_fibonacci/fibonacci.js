const fibonacci = function (num) {
  var intNum = parseInt(num);
  var result = 0;
  var a = 1;
  var b = 1;
  if (intNum < 0) return "OOPS";
  if (intNum === 1 || intNum === 2) return 1;
  for (let i = 3; i <= intNum; i++) {
    let temp = a + b;
    a = b;
    b = temp;
    result = b;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
