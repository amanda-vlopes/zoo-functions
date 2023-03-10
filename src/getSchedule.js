const data = require('../data/zoo_data');

const animais = data.species.map(({ name }) => name);
const horarios = Object.entries(data.hours);
const dias = Object.keys(data.hours);

const callback = (result, [dia, horas]) => {
  const obj = result;
  obj[dia] = {
    officeHour: `Open from ${horas.open}am until ${horas.close}pm`,
    exhibition: data.species.filter(({ availability }) => availability.includes(dia))
      .map(({ name }) => name),
  };
  if (dia === 'Monday') {
    obj[dia] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  return result;
};

const getSchedule = (scheduleTarget) => {
  if (animais.includes(scheduleTarget)) {
    return data.species.find(({ name }) => name === scheduleTarget).availability;
  }
  const agenda = horarios.reduce(callback, {});
  if (dias.includes(scheduleTarget)) {
    const obj = {};
    obj[scheduleTarget] = agenda[scheduleTarget];
    return obj;
  }
  return agenda;
};

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
