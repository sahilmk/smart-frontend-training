//Type of variable
var a = 'sahil';
//Return type of function and typeof parameter
var showOutput = function (a) {
    return 'hello this is first typescript program written by ' + a;
    // return true;
};
console.log(showOutput(a));
//Object
var obj = {
    uname: 'Person',
    surname: 'Surname1',
    age: 100,
    showMessage: function () {
        return "Hello ".concat(obj.uname, " ").concat(obj.surname, " how are you.");
    }
};
var stringArray = ['Thing1', 'Thing2'];
console.log(stringArray);
//Void and any type
var voidType = undefined;
var voidTypeTwo = null;
var anyType = ['hi', 205, true, null, undefined];
//never, unkonwn
var neverFunctoin = function () {
    throw 'never';
};
var unVar = '10';
var anyVar = unVar;
//Type conversion
var st = '10';
var num = st;
console.log(typeof num);
//dom
var input = document.getElementById('input');
console.log(input.value);
