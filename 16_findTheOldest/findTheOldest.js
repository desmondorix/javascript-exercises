const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  var person = people.reduce((oldestPerson, currentPerson) => {
    oldestAge = (oldestPerson.yearOfDeath || currentYear) - oldestPerson.yearOfBirth;
    currentAge = (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth;

    return currentAge > oldestAge ? currentPerson : oldestPerson;
  });
  return person;

  //   var age = 0;
  //   var oldestPerson;
  //   var maxAge = 0;
  //   const currentYear = new Date().getFullYear();
  //   for (var person of people) {
  //     if (person.yearOfDeath) {
  //       age = person.yearOfDeath - person.yearOfBirth;
  //     } else {
  //       age = currentYear - person.yearOfBirth;
  //     }
  //     if (age > maxAge) {
  //       maxAge = age;
  //       oldestPerson = person;
  //     }
  //   }
  //   return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
