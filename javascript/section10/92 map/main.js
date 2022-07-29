const map1 = new Map();

console.log(map1);
console.log(typeof map1);

const key1 = 'Key1',
    key2 = {},
    key3 = function () { };

map1.set(key1, '11');
map1.set(key2, '22');
map1.set(key3, '33');

console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

for (let key of map1.keys()) {
    console.log(key);
}

//keys
var item = map1.keys();
console.log(item);

for (let [key, value] of map1) {
    console.log(`${key}: ${value}`);
}

map1.forEach(element => {
    console.log(element);
});

const valarr = Array.from(map1.values());
console.log(valarr);

const keyarr = Array.from(map1.keys());
console.log(keyarr);
