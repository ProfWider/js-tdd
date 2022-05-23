function defaultArgs (arg1, arg2 = 42, arg3 = '') {
  return arg1 + arg2 + arg3
}

function transform (list = []) {
  const flattened = list.flatMap(it => it)
  const filtered = flattened.filter(it => typeof it === 'string')
  const chen = filtered.map(it => it + 'chen')
  const concat = chen.reduce((agg, curr) => agg + ' ' + curr)
  return concat
}

function * generator (items, crit) {
  for (const item of items) {
    if (crit.length < 1 ||
      item.name.toLowerCase().includes(crit)) yield item
  }
}

function testFun () {
  const persons = [
    {
      name: 'Arif',
      address: {
        city: 'Berlin',
        zip: '12435'
      }
    }
  ]

  const result = persons[2]?.address?.city?.toLowerCase()

  console.log(result == null) // result is undefined

  return result
}

export default { testFun, defaultArgs, transform, generator }
