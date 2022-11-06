const fibonacci = function (num) {
  let num1 = 0,
    num2 = 1,
    num3=1;
  if (num < 0) return "OOPS";
  for (let i = 2; i <= num; i++) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
  }
  return num3;
};

// Do not edit below this line
module.exports = fibonacci;
