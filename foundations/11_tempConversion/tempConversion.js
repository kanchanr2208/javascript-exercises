const convertToCelsius = function(a) {
  let conversion = ((a - 32) * (5/9));
  let final = Number(conversion.toFixed(1));
  return final;
};

const convertToFahrenheit = function(a) {
  let conversion = ((a * (9/5)) + 32);
  let final = Number(conversion.toFixed(1));
  return final;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
