const getOpeningHours = require('../src/getOpeningHours');

const open = 'The zoo is open';
const closed = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('verifica se getOpeningHours é uma funçao', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('verifica se o parâmetro de dia da semana é case sensitive', () => {
    expect(getOpeningHours('Tuesday', '10:30-am')).toEqual(getOpeningHours('TUESDAY', '10:30-AM'));
  });
  it('ao receber uma string que não é um dia da semana lança um erro', () => {
    expect(() => getOpeningHours('Segunda', '10:30-AM')).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('ao receber uma hora que tem algum caracter não numérico lança um erro', () => {
    expect(() => getOpeningHours('Friday', '1$:30-AM')).toThrow(new Error('The hour should represent a number'));
  });
  it('ao receber um minuto que tem algum caracter não numérico lança um erro', () => {
    expect(() => getOpeningHours('Friday', '10:d0-AM')).toThrow(new Error('The minutes should represent a number'));
  });
  it('ao receber uma abreviação que não seja AM ou PM lança um erro', () => {
    expect(() => getOpeningHours('Friday', '10:30-AD')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('ao receber uma hora maior que 12 lança um erro', () => {
    expect(() => getOpeningHours('Friday', '17:30-AM')).toThrow(new Error('The hour must be between 0 and 12'));
  });
  it('ao receber minutos maiores que 59 que 0 lança um erro', () => {
    expect(() => getOpeningHours('Friday', '10:70-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });
  it('ao não receber nenhum parâmetro lança os horarios de funcionamento de cada dia', () => {
    const horarios = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(horarios);
  });
  it('ao receber um dia e horário dentro do funcionamento retorna que o zoo está aberto', () => {
    expect(getOpeningHours('Tuesday', '2:30-PM')).toBe(open);
  });
  it('ao receber um dia e horário fora do funcionamento retorna que o zoo está fechado', () => {
    expect(getOpeningHours('Friday', '6:30-AM')).toBe(closed);
  });
  it('ao não receber uma hora definida retorna que o zoo está fechado', () => {
    expect(getOpeningHours('Friday', '00:00-AM')).toBe(closed);
  });
  it('ao receber qualquer hora para Monday retorna que o zoo está fechado', () => {
    expect(getOpeningHours('Monday', '10:00-AM')).toBe(closed);
  });
});
