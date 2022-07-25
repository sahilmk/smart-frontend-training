function funcons(name, bdate) {
    this.uname = name;
    this.date = new Date(bdate)
    today = new Date()
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




//42 Prototype inheritance
function person(fname, lname, bdate) {
    this.fname = fname;
    this.lname = lname;
    this.bdate = new Date(bdate);
}

person.prototype.greeting = function () {
    return "Person, Greetings";
}

person.prototype.getyear = function () {
    return this.bdate.getFullYear();
}

const pobj = new person('Ravi', 'Shah', '12-10-2022');
console.log(`Hello ${pobj.fname} ${pobj.lname} how are you.`);

function customer(fname, lname, bdate, email) {
    this.email = email;
    person.call(this, fname, lname, bdate)
}


customer.prototype = Object.create(person.prototype);
const cobj = new customer('Raj', 'Patel', '10-10-2010', 'abc@gmail.com');
//To make return type person prototype to customer prototype
// console.log(cobj.greeting());
let pp = cobj.greeting();

customer.prototype.greeting = function () {
    return "Customer, Greetings";
}
customer.prototype.constructor = customer;

console.log(pp);
console.log(cobj.greeting());



//48 Object create
const proto = {
    x: 20,
    hello: function (uname) {
        return 'Hello how are you ' + uname;
    }
}

let var1 = Object.create(proto);
let var2 = Object.create(proto);
var1.x = 30;
var2.x = 50;
console.log(var1.x);
console.log(proto.x);
console.log(var2.x);

//49 ES6 Classes
class c1 {
    constructor(lname) {
        this.lname = lname;
    }
    getname(fname) {
        this.fname = fname;
    }
    setname() {
        return this.fname + this.lname;
    }

    static print() {
        console.log("Hello this is static method");
    }
}

let a = new c1(' Kanjariya');
a.getname('sahil');
console.log(a.setname());
console.log(a);
c1.print();



//50 Sub Classes
class app {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    gm() {
        return `Hello, ${this.fname} ${this.lname} how are you?`
    }
}

class user extends app {
    constructor(fname, lname, email) {
        super(fname, lname);
        this.email = email;
    }

    gm() {
        console.log(super.gm());
        return 'Gretting from the user class';
    }
}

let userobj = new user('Sahil', 'Kanjariya', 'abc@gmail.com');
console.log(userobj.gm());
console.log(app.prototype.gm.call(userobj));







