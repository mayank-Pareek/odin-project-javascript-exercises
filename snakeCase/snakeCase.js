const snakeCase = function (str) {
  str = str.replace(/[^\w\s]/g, "").toLowerCase();
  str = str.replace(/[\s]/g, "_");
  console.log(str);
  return str;
};

// Do not edit below this line
module.exports = snakeCase;
