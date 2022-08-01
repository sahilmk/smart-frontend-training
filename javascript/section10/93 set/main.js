const set = new Set;

console.log(set);

set.add('hello');
set.add(['red', 'blue']);
set.add(200);
set.add(false);
set.add({ uname: 'person1' });

console.log(set);

console.log(set.size);

console.log(set.has('hello'));
console.log(set.has({ uname: 'person1' }));

set.delete(200);
console.log(set);


//We need the reference to delete the object from the set.
set.forEach(ref => {
    if (ref.uname === 'person1') {
        set.delete(ref)
    }
});

console.log(set);

//For in loop
for (let i of set) {
    console.log(i);
}

const arr = Array.from(set);
console.log(arr);

