import Rectangle from './classes';

const square = new Rectangle(42, 42);

test('should calculate area', () => {
  expect(square.calcArea()).toBe(1764);
});
