//Array Destucturing
const cname = ['red', 'black', 'blue'];

const [col1, col2, col3] = cname;
console.log("color1: " + col1 + " color2: " + col2 + " color3: " + col3);

const [a, ...rest] = cname;
console.log(rest);
console.log("color1: " + col1 + " rest: " + rest);

//Object Destructring

const obj = {
    country: 'India',
    code: '+91',
    continents: 'Asia'
}

const { code, country, continents } = obj;

console.log('Country:' + country + ' Country Code:' + code + ' Country continent:' + continents);

