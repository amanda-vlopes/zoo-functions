const { hours } = require('../data/zoo_data');

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dayError = 'The day must be valid. Example: Monday';

const isStringRepresentNumber = (string, what) => {
  if (!/^\d+$/.test(string)) { // verifica se caracteres que não são numeros estão presentes; '$2:30-PM'
    throw new Error(`The ${what} should represent a number`);
  }
};

const validateAbbreviation = (abbreviation) => {
  if (!['AM', 'PM'].includes(abbreviation)) { // verifica se o formato possui AM ou PM; '12:30-00'
    throw new Error('The abbreviation must be \'AM\' or \'PM\'');
  }
};

const validateHour = (hour) => {
  const [number, abbreviation] = hour.toUpperCase().split('-');
  const [dataHours, dataMinutes] = number.split(':');
  isStringRepresentNumber(dataHours, 'hour');
  isStringRepresentNumber(dataMinutes, 'minutes');
  validateAbbreviation(abbreviation); // abreviation = PM ou AM;
  switch (false) {
  case Number(dataHours) >= 0 && Number(dataHours) <= 12:
    throw new Error('The hour must be between 0 and 12');
  case Number(dataMinutes) >= 0 && Number(dataMinutes) <= 59:
    throw new Error('The minutes must be between 0 and 59');
  default:
    return null;
  }
};

const validateDay = (day) => {
  if (!weekDays.includes(day)) {
    throw new Error(dayError);
  }
};

const empty = (one, two) => !one && !two;

const fix12 = (hour, open, close) => ({
  h: (hour === 12) ? 0 : hour, // 6
  o: (open === 12) ? 0 : open, // 8
  c: (close === 12) ? 0 : close, // 6
});

const openOrClosed = (period, hour, open, close) => {
  const { o, c, h } = fix12(hour, open, close);
  return (period === 'AM' && h >= o) || (period === 'PM' && h < c);
};

const getOpeningHours = (day, dataHour) => {
  if (empty(day, dataHour)) return hours;
  const adjustedDay = `${day[0].toUpperCase()}${day.slice(1).toLowerCase()}`; // variável para transformar o dia da semana no formato: primeira letra maiuscula, todas as outras letras minusculas(TUESDAY => Tuesday);
  validateDay(adjustedDay); // se não constar o dia nos dias da semana vai lançar um erro;
  validateHour(dataHour);
  const { open, close } = hours[adjustedDay]; // horarios de abertura e fechamento do data base
  if (empty(close, open)) return 'The zoo is closed';
  const period = dataHour.split('-')[1].toUpperCase(); // PM ou AM
  const hour = Number(dataHour.split(':')[0]); // Numero da hora passada
  let message = 'The zoo is ';
  message += openOrClosed(period, hour, open, close) ? 'open' : 'closed';
  return message;
};

console.log(getOpeningHours('Tuesday', '00:00-AM'));

module.exports = getOpeningHours;
