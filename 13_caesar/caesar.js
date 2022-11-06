const caesar = function (str, shift) {
  let charCode;
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode += shift;
      while (charCode > 90) {
        charCode = 64 + (charCode - 90);
      }
      while (charCode < 65) {
        charCode = 91 - (65 - charCode);
      }
    } else if (charCode >= 97 && charCode <= 122) {
      charCode += shift;
      while (charCode > 122) {
        charCode = 96 + (charCode - 122);
      }
      while (charCode < 97) {
        charCode = 123 - (97 - charCode);
      }
    }
    newString += String.fromCharCode(charCode);
  }
  return newString;
};

// Do not edit below this line
module.exports = caesar;
