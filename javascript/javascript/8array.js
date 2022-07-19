let arr = [1, 5, 8, 83, 0];
let arr2 = [34, 54, 234, 67, 98];
let arr3 = new Array(10, 'hello', { city: 'rajkot', state: 'gujarat' }, 200);

console.log(Array.isArray(arr3));

console.log(arr2[2]);
console.log(arr3.indexOf(200));

console.log(arr.length);


console.log(arr.splice(1, 3));

arr2.push(100)
console.log(arr2);

arr2.unshift(10);
console.log(arr2);

arr2.pop();
console.log(arr2);

arr2.shift();
console.log(arr2);

arr2.sort()
console.log(arr2);

//sort array reverse order
arr2.sort(function (x, y) {
    return (y - x);
})
console.log(arr2);


arr2.sort(function (x, y) {
    return (x - y);
})
console.log(arr2);

//find number greater than 75
function over75(num) {
    return num > 75;
}
console.log(arr2.find(over75));

console.log(arr2.reverse());

console.log(arr2.concat(arr));







