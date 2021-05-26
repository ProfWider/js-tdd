const myVar1 = 'a constant';
let myVar2 = 'block scoped';

function printarg(str) {
  console.log(str);
}

function returnvar(str) {
  for (var i = 0; i < 2; i ++) {
    var myVar3 = 'function scoped';
  }
  return myVar3;
}

export default {
  pv: printarg, rv: returnvar, mv1: myVar1, mv2: myVar2,
};
