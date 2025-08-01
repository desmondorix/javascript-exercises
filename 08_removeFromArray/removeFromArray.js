const removeFromArray = function (numbers, ...removeFromArray) {
  let result = numbers.filter((word) => !removeFromArray.includes(word));
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
