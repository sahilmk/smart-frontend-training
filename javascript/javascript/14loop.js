//for loop
var x = ['red', 'blue', 'black', 'violate', 'pink']
for (i = 0; i < x.length; i++) {
    console.log(x[i]);
}

//while loop
var a = 85;
while (a <= 100) {
    console.log(a);
    a++;
}

//do while loop
let b = 101
do {
    console.log(b);
    b++;
}
while (b <= 100)

//for loop wiht break
for (i = 10; i > 0; i--) {
    if (i == 6) {
        console.log("6 is minimum");
        break
    }
    console.log(i);
}

list = [
    { country: 'USA', rank: 2 },
    { country: 'INDIA', rank: 1 },
    { country: 'USA', rank: 3 }
]

ex = []
//foreach loop
list.forEach((pos) => {
    ex.push(pos.country);
});

console.log(ex);
//map
abc = list.map((i) => {
    console.log(i.country);
    // return i.country;
});

console.log(abc);

//for in loop
for (let z in list) {
    console.log(list[z].country);
}




