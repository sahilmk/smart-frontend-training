const a = { uname: 'person1', email: 'abc@gmail.com' }


try {
    // hello();

    // null.call()

    if (!a.surname) {
        throw 'Suname is required'
    } else {
        console.log(a.surname);
    }

    // eval('hellodflkajfdlk');

} catch (err) {
    console.log(err);
}