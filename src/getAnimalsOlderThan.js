const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animais = data.species.filter(({ name }) => name === animal)
    .map(({ residents }) => residents);
  return animais.every((residente) => residente.every((animalZoo) => animalZoo.age >= age));
};

console.log(getAnimalsOlderThan('lions', 13));

module.exports = getAnimalsOlderThan;
