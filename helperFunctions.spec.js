import helpers from './helperFunctions'

test('test function...', () => {
  expect(helpers.testFun()).toBe('berlin')
})

test('default args...', () => {
  expect(helpers.defaultArgs(-41)).toBe('1')
})

test('transform...', () => {
  const listOfLists = [
    'Herr',
    [null, 'Frau'],
    [],
    42,
    'Teller'
  ]
  const [a, b, ...rest] = listOfLists
  console.log(a) // Herr
  console.log(b) // [null, Frau]
  console.log(rest) // [[], 42, Teller]

  expect(helpers.transform(listOfLists)).toBe('Herrchen Frauchen Tellerchen')
})
