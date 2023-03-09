const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const animais = data.species.reduce((obj, { name, residents }) => {
    const objRetornado = obj;
    objRetornado[name] = residents.length;
    if (animal && animal.species && animal.sex) {
      objRetornado[name] = residents.filter(({ sex }) => sex === animal.sex).length;
    }
    return obj;
  }, {});
  if (animal && animal.species) {
    return animais[animal.species];
  }
  return animais;
};

console.log(countAnimals({ species: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
