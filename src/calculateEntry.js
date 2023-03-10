const data = require('../data/zoo_data');

// const countEntrants = (entrants) => {
//   return entrants.reduce((resultado, { age }) => {
//     const obj = resultado;
//     if (age < 18) {
//       obj.child += 1;
//     } else if (age >= 18 && age < 50) {
//       obj.adult += 1;
//     } else if (age >= 50) {
//       obj.senior += 1;
//     }
//     return resultado;
//   }, {});
// };

const countEntrants = (entrants) => {
  let countChild = 0;
  let countAdult = 0;
  let countSenior = 0;
  return entrants.reduce((resultado, { age }) => {
    const obj = resultado;
    if (age < 18) countChild += 1;
    if (age >= 18 && age < 50) countAdult += 1;
    if (age >= 50) countSenior += 1;
    obj.child = countChild;
    obj.adult = countAdult;
    obj.senior = countSenior;
    return resultado;
  }, {});
};

const calculateEntry = (entrants) => {
  if (entrants && entrants.length !== 0) {
    const q = (countEntrants(entrants));
    const p = data.prices;
    const sum = (q.child * p.child) + (q.adult * p.adult) + (q.senior * p.senior);
    return sum;
  }
  return 0;
};

// array usado como parâmetro:
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
