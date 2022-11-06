function pigLatin(string) {
  let newString = "";
  let wordArray = string.split(" ");

  console.log(wordArray);
  for (let i = 0; i < wordArray.length; i++) {
    let vowel = wordArray[i].match(/[aeio]/);
    let index = wordArray[i].indexOf(vowel);
    if (index > 0) {
      newString +=
        wordArray[i].slice(index) + wordArray[i].slice(0, index) + "ay";
    } else newString += wordArray[i] + "ay";

    if (i != wordArray.length - 1) {
      newString += " ";
    }
  }
  console.log(newString);
  return newString;
}

// Do not edit below this line
module.exports = pigLatin;
