date1 = new Date();

console.log(date1.getMonth());
console.log(date1.getDate());
console.log(date1.getFullYear());
console.log(date1.getTime());
console.log(date1.getDay());
console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.getSeconds());

console.log(date1.setMonth(5));
console.log(date1.setMonth(11));
console.log(date1.setDate(10));
console.log(date1.setHours(23));
console.log(date1.setMinutes(23));
console.log(date1.setSeconds(23));

date1 = new Date('02-02-1948 23:48:56');
date1 = new Date('02/02/1948 23:48:56');
date1 = new Date('February 02 1948 23:48:56');


console.log(date1.getDay());
console.log(date1);
