function funcons(name, bdate) {
    this.uname = name;
    this.date = new Date(bdate)
    today = new Date()
    // this.age = function () {
    //     return today.getFullYear() - this.date.getFullYear();
    // }
}

funcons.prototype.age = function () {
    return today.getFullYear() - this.date.getFullYear();
}

funcons.prototype.getlast = function (lname) {
    return this.uname + lname;
}

let obj = new funcons('John', '01-28-1989');

console.log('Your age is: ' + obj.age());

str1 = 'hello';
str2 = new String('hello');

num1 = 10;
num2 = new Number(10);

bool1 = true;
bool2 = new Boolean(false)

arr1 = [1, 'new', false];
arr2 = new Array(1, 'new', true);

fun1 = function () {
    return 1 + 1;
}

fun2 = new Function('x', 'y', 'return 1+12');


obj1 = {
    uname: 'john',
    age: 36
}

obj2 = new Object({
    uname: 'Doe',
    age: 63
})

const obj3 = new funcons('person1', 'October 10 2010');
console.log(obj3.date);
const obj4 = new funcons('person2', '03/10/1979')
console.log(obj4.age());

console.log(obj3.getlast(' surname1'));
console.log(obj4);

console.log(obj4.hasOwnProperty);

function person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

const pobj = new person('Ravi', 'Shah');
console.log(`Hello ${pobj.fname} ${pobj.lname} how are you.`);

function customer(fname, lname, email) {
    this.email = email;
    person.call(this, fname, lname)
}
const cobj = new customer('Raj', 'Patel', 'abc@gmail.com');
console.log(cobj.lname);





