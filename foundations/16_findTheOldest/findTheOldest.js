const findTheOldest = function(people) {
  if (!people.length) return undefined;

  return people.reduce((oldest, person) => {
    const currentYear = new Date().getFullYear();

    const currentAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

    return currentAge > oldestAge ? person : oldest;
  });
};


// Do not edit below this line
module.exports = findTheOldest;
