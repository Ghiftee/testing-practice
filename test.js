const stringLength = require('./string');
const reverseString = require('./reverse');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('should equal the length of the string', () => {
  expect(stringLength('conditioner')).toBe(11);
});

test('should be greater than 1 and less than 10', () => {
  expect(stringLength('hello')).toBe(true);
});

test('should return reversed string', () => {
  expect(reverseString('hello')).toBe("olleh")
})