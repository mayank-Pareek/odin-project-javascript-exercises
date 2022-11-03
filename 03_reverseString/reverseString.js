const reverseString = function(str) {
    let newString = "";
    for (let i = str.length; i > 0; i--) {
        newString += str[i-1];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
