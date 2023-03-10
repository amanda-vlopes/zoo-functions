const data = require('../data/zoo_data');

const ids = data.employees.map(({ id }) => id);
const firstNames = data.employees.map(({ firstName }) => firstName);
const lastNames = data.employees.map(({ lastName }) => lastName);
const names = [...firstNames, ...lastNames];

const colaboradores = data.employees.map(({ id, firstName, lastName, responsibleFor }) => {
  const animais = data.species.filter((animal) => responsibleFor.includes(animal.id));
  const objeto = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: animais.map(({ name }) => name),
    locations: animais.map(({ location }) => location),
  };
  return objeto;
});

const verificaID = (objeto) => {
  if (!ids.includes(objeto.id)) {
    throw new Error('Informações inválidas');
  }
  return colaboradores.find(({ id }) => objeto.id === id);
};

const verficaName = (objeto) => {
  if (!names.includes(objeto.name)) {
    throw new Error('Informações inválidas');
  }
  const colaborador = colaboradores.find(({ fullName }) => fullName
    .split(' ').includes(objeto.name));
  return colaborador;
};

const getEmployeesCoverage = (obj) => {
  if (!obj) return colaboradores;
  if (obj.id) return verificaID(obj);
  if (obj.name) return verficaName(obj);
};

console.log(getEmployeesCoverage({ name: 'Nelson' }));

module.exports = getEmployeesCoverage;
