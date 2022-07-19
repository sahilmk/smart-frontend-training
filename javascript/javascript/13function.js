function squ(x = 1) {
    return x * x;
}

console.log(squ(13));

var x = function (name = 'unknown') {
    return "Hello, " + name + " how are you?"
};

console.log(x('sahil'));

(function (x) {
    console.log("hello " + x);
})('sahil');

let obj = {
    fname: 'unknown',
    lname: 'undefine',
    age: function (year) {
        return 2022 - year
    }
}

console.log(obj.age(2002));