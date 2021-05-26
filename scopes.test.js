import Scopes from './scopes';

test('tests scopes', () => {
  expect(Scopes.mv1).toBe('a constant');
  expect(Scopes.mv2).toBe('block scoped');
  expect(Scopes.rv()).toBe('function scoped');
});
