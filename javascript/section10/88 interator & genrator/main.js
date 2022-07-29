// function iterator(string) {
//     var lastindex = 0;


//     return {
//         next: function () {
//             return lastindex < string.length ? { value: string[lastindex++], istatus: false } : { istatus: true }
//         }
//     }
// }

// st = ['red', 'yellow', 'green'];

// const obj = new iterator(st);

// console.log(obj.next().value);
// console.log(obj.next().value);
// console.log(obj.next().value);
// console.log(obj.next().value);

function* generator() {
    let index = 1;

    while (true) {
        yield index++;
    }
}

const generate = generator();

console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next().value);

