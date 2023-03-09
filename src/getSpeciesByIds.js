const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  data.species.filter(({ id }) => ids.some((idParam) => id === idParam));

module.exports = getSpeciesByIds;
