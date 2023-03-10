const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('verifica se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('verifica se a função é case sensitive, deve retornar null ao passar um parâmetro com letra maiúscula', () => {
    expect(handlerElephants('Count')).toBeNull();
  });
  it('ao receber o argumento count deve retornar 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('ao receber o argumento names deve retornar [Ilana, Orval, Bea, Jefferson]', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('ao receber o argumento averageAge deve retornar 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('ao receber o argumento location deve retornar NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('ao receber o argumento popularity deve retornar 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('ao receber o argumento availability deve retornar [Friday, Saturday, Sunday, Tuesday ]', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('ao receber nenhum argumento deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('ao receber um argumento que não é uma string deve retornar: Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });
});
