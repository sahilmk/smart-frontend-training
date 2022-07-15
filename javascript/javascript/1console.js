var myname = 'sahil';
var surname = 'kanjariya';

var fullname = ['Sahil', 'Kanjariya'];

var fname = { 'Surname': 'Kanjariya', 'myname': 'Sahil' };

console.time('time');
console.log('Hello my name is ' + myname + ' and my surname is ' + surname + '.');
console.log('My name is', myname, surname + '.')
console.log(fullname);
console.log('My name is', fname.myname);
console.error(fname.myname);
console.warn(fname.Surname)
console.timeEnd('time');
// console.clear();
