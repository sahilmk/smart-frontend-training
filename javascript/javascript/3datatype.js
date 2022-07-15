// PRIMITIVE DATA TYPE
//String
var myName = 'sahil';
console.log(typeof myName)

// Number
const home = 238;
console.log(typeof home)


//Boolean
var graduation = true;
console.log(typeof graduation)


//Null
let a = null;
console.log(typeof a)


//Undefined
let b;
console.log(typeof b)


//Symbol
var s = Symbol();
console.log(typeof s)

//REFERENCE
//Array
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr)

//Object Literal
var loc = {
    city: "Gandhinagar",
    state: "Gujarat",
    country: "India"
}

console.table(loc)
console.log(typeof loc);

//Dates
let today = Date();
console.log(today);
console.log(typeof today)

var aa = { age: 20, name: "sahil" }, bb = { name: "sahil", age: 20 };
console.log(JSON.stringify(aa) == JSON.stringify(bb));
console.log(_.isEqual(aa, bb));








