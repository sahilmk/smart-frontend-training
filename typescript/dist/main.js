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
    age: '100',
    showMessage: function () {
        return "Hello ".concat(obj.uname, " ").concat(obj.surname, " how are you.");
    }
};
console.log(obj);
//Union operator
