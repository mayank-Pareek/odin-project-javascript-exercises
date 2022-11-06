const palindromes = function (str) {
  str = str.replace(/[^\w\']/g, "").toLowerCase();
  let newString = "";
  for (let i = str.length; i > 0; i--) {
    newString += str[i - 1];
  }
  if (str === newString) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
