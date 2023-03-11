const data = require('../data/zoo_data');

const localizacaoENomes = (options) =>
  data.species.reduce((result, { location }) => {
    const animais = data.species.filter((animal) => animal.location === location);
    const obj = result;
    obj[location] = animais.map(({ name, residents }) => {
      const objeto = {};
      objeto[name] = residents;
      if (options.sex) {
        objeto[name] = objeto[name].filter((residente) => residente.sex === options.sex);
      }
      objeto[name] = objeto[name].map((residente) => residente.name);
      if (options.sorted) {
        objeto[name] = objeto[name].sort();
      }
      return objeto;
    });
    return result;
  }, {});

const getAnimalMap = (options) => {
  if (options && options.includeNames) return localizacaoENomes(options);
  return data.species.reduce((result, { location }) => {
    const animais = data.species.filter((animal) => animal.location === location)
      .map((especie) => especie.name);
    const obj = result;
    obj[location] = animais;
    return result;
  }, {});
};

module.exports = getAnimalMap;
