function funcons(name) {
    this.uname = name;
}

let obj = new funcons('sahil');

console.log(obj.uname);

var x = 10;
function f() {
    var x = 20;
    console.log(this.x);
}
f();