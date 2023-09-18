const { sumarNumeros } = require('../sumar.js');

test('Suma prueba', () => {
  const resultado = sumarNumeros(14,16 );
  expect(resultado).toBe(30);
});