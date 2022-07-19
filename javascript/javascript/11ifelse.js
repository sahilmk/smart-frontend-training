x = 67;

if (x > 50) {
    console.log(x + ' is greater than 50');
}
else if (x < 50) {
    console.log(x + ' is less than 50');

}
else {
    console.log(x, 'is equal to 50');
}

if (x == '67') {
    console.log(x + ' is weakly equal to 67');
}
else {
    console.log(x + ' is not equal to 67');
}


if (x === '67') {
    console.log(x + ' is strongly equal to 67');
}
else {
    console.log(x + ' is not strongly equal to 67');
}

((typeof x) == 'Number') ? console.log('Type of x is Number') : console.log('Type of x is not Number');

var fname = 'smith'
var age = '40'

if (fname == 'smith' && age == 40)
    console.log(fname + ' is adult');
else
    console.log(fname + ' is not adult');

if (fname == 'Roy' || age == 40)
    console.log('This people is adult');
else
    console.log('This people is not adult');