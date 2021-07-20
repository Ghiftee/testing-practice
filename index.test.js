const stringLength = require('./index');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('should equal the length of the string', () => {
  expect(stringLength('conditioner')).toBe(11);
});