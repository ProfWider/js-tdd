const myVar1 = 'my string';

function printvar(str) {
  console.log(str);
}

function returnvar(str) {
  return str;
}

export default { pv: printvar, rv: returnvar, mv: myVar1 };
