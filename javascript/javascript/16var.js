var a = 10;
let b = 20;
const c = 30;

function f() {
    var a = 40;
    let b = 50;
    const c = 60;
    console.log(a, b, c);
}

f();

// if (true) {
//     var a = 70;
//     let b = 80;
//     const c = 90;
//     console.log(a, b, c);
// }

// for (i = 0; i < 1; i++) {
//     var a = 100;
//     let b = 110;
//     const c = 120;
//     console.log(a, b, c);
// }



console.log(a, b, c);