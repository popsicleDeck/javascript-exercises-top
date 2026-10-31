const findTheOldest = function (arr) {
  ages = arr.map((obj) => {
    if (obj.yearOfDeath) {
      return { name: obj.name, age: obj.yearOfDeath - obj.yearOfBirth };
    } else {
      return {
        name: obj.name,
        age: new Date().getFullYear() - obj.yearOfBirth,
      };
    }
  });
  person = ages.reduce(
    (previous, current) => {
      if (current.age > previous.age) {
        previous = { name: current.name, age: current.age };
      }
      return previous;
    },
    { age: 0 },
  );
  return person;
};

// Do not edit below this line
module.exports = findTheOldest;
