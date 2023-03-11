const data = require('../data/zoo_data');

const localizacao = data.species.reduce((result, { location }) => {
  const animais = data.species.filter((animal) => animal.location === location)
    .map((especie) => especie.name);
  const obj = result;
  obj[location] = animais;
  return result;
}, {});

const localizacaoENomes = (options) =>
  data.species.reduce((result, { location }) => {
    const animais = data.species.filter((animal) => animal.location === location);
    const obj = result;
    obj[location] = animais.map(({ name, residents }) => {
      const objeto = {};
      if (options.includeNames) {
        objeto[name] = residents.map((residente) => residente.name);
      }
      if (options.includeNames && options.sorted) {
        objeto[name] = residents.map((residente) => residente.name).sort();
      }
      return objeto;
    });
    return result;
  }, {});

const getAnimalMap = (options) => {
  if (options && options.includeNames) return localizacaoENomes(options);
  return localizacao;
};

// console.log(getAnimalMap({ includeNames: true, sorted: true }));

module.exports = getAnimalMap;
