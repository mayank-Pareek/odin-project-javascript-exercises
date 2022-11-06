const findTheOldest = function (people) {
  let oldest = people[0];
  for (let i = 0; i < people.length; i++) {
    if(people[i].yearOfDeath===undefined){
        people[i].yearOfDeath=2022;
    }
    if (
      people[i].yearOfDeath - people[i].yearOfBirth >
      oldest.yearOfDeath - oldest.yearOfBirth
    ) {
      oldest = people[i];
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
