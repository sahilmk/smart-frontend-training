let obj = {
    fname: "Roy",
    lname: "nothing",
    age: 40,
    location: {
        city: 'Gandhinagar',
        state: 'Gujarat',
        country: 'India'
    },
    getyear() {
        return 2022 - 40;
    }
}

console.log(obj.fname);
console.log(obj['age']);

console.log(obj.location.country);

console.log(obj.getyear());

let obj2 = [
    { city: 'rajkot', state: 'guj' },
    { city: 'mumbai', state: 'mha' },
    { city: 'bangulu', state: 'guj' }
]

for (i = 0; i < obj2.length; i++) {
    console.log(obj2[i].state);
}




