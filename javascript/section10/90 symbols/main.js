const sym1 = Symbol();
const sym2 = Symbol('hello');

console.log(sym1);
console.log(typeof sym2);
console.log(sym2.toString());
console.log('Comparing two symbol: ' + (sym1 === sym2));

const obj = {};

obj[sym1] = 'p1';
obj[sym2] = 'p2';
obj.sym3 = 'p3';
obj.sym4 = 'p4';
console.log(obj);

for (i in obj) {
    console.log(i + ': ' + obj[i]);
}

console.log(JSON.stringify(sym1)); //It will 
