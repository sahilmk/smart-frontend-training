const regex = /hello/i;
const string = 'Hello World';
const string1 = 'hii hello';
const string2 = 'hii, how are you';

console.log('Source: ');
console.log(regex);
console.log(regex.source);

console.log('Exec: ');
console.log(regex.exec(string));
console.log(regex.exec(string).input);

console.log('Test: ');
console.log(regex.test('Hello, how are you'));
console.log(regex.test('Hii how are you'));

console.log('Match: ');
console.log(string.match(regex));
console.log(string.match(regex).length);

console.log('Search: ');
console.log(string.search(regex));
console.log(string1.search(regex));
console.log(string2.search(regex) + ": means string don't have the word");

