const data = require('../data/zoo_data');

// const ottersId = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';

const getOldestFromFirstSpecies = (id) => {
  const colaborador = data.employees.filter((pessoa) => pessoa.id === id)
    .map(({ responsibleFor }) => responsibleFor[0]).toString();
  // encontra o primeiro animal que a pessoa colaboradora que possui o id passado é responsável;

  const animais = data.species.find((especie) => especie.id === colaborador).residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  // encontra o animal mais velho dos animais da especie;

  return Object.values(animais);
};

module.exports = getOldestFromFirstSpecies;
