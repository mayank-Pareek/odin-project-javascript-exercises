const ftoc = function(temp) {
  let newTemp=(temp-32)*(5/9);
if(newTemp-newTemp.toFixed(0)!=0){
  newTemp=Number(newTemp.toFixed(1));
}
  return newTemp;
};

const ctof = function(temp) {
  let newTemp=(temp*(9/5))+32;
  if(newTemp-newTemp.toFixed(0)!=0){
    newTemp=Number(newTemp.toFixed(1));
  }
  return newTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
