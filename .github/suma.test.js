const suma = require('../index');

test('Suma correcta 2 + 3 = 5', () => {
  expect(suma(2, 3)).toBe(5);
});
