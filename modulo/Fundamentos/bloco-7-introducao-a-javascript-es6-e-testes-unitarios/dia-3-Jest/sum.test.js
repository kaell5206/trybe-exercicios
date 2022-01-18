const sum = require('./sum');

test('a soma dos parametros deve ser : 9', () => {
  expect(sum(4, 5)).toBe(9)
}
)
test('a soma dos parametros deve ser : 0 ', () => {
  expect(sum(0, 0)).toBe(0)
}
)
test('Lança um erro quando os parametros são 4 e "5"(string)', () => {
  expect(() => sum(4, "5")).toThrow(new Error('parameters must be numbers'))
})