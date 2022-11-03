const repeatString = function(str, num) {
let finalStr='';
if(num<0) finalStr='ERROR';
for(let i=0;i<num;i++){
    finalStr+=str;
}
return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
