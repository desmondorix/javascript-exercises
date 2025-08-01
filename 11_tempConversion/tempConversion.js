const convertToCelsius = function (temp) {
  temp = (temp - 32) * (5 / 9);
  if (temp % 1 !== 0) {
    temp = Number(temp.toFixed(1));
  }
  return temp;
};

const convertToFahrenheit = function (temp) {
  temp = temp * (9 / 5) + 32;
  if (temp % 1 !== 0) {
    temp = Number(temp.toFixed(1));
  }
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
