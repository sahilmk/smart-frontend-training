// const print = function () {
//     console.log('Hello');
// }


//Arrow function

// const print = () => {
//     console.log('hello');
// }

//Arrow function shorthand

// const print = () => console.log('hello how are you i am print');

// const re = () => 'hello how are you';

// const re = name => 'hello how are ' + name;

const re = (name, surname) => 'hello how are ' + name + surname;

const arr = ['hello', 'hii', 'hey'];
const lenght = arr.map(name => name.length);

const print = () => ({ country: 'india', code: '+91' });

console.log(print().country);;

console.log(re('sahil', ' kanjariya'));

console.log(lenght);
