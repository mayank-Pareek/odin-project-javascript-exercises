const getTheTitles = function (book) {
  let titles = [];
  for (let i = 0; i < book.length; i++) {
    titles[i] = book[i].title;
  }
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
