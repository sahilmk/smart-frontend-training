var str = 'Hello World!'
var reg = /hello/i;


reg = /^hello/i;
reg = /!$/;
reg = /^hello world!$/i;


reg = /hell. world!/i;
reg = /he*llo world!/i;

reg = /hel?o?x world!/i;
reg = /hello wor\^ld!/i;


var str = 'hex wor^ld!'


console.log(reg.exec(str));

function check() {
    if (reg.test(str)) {
        console.log(`${str} matches the ${reg.source} regular expression`);
    }
    else {
        console.log(`${str} doesn't match the ${reg} regular expression`);
    }
}

check()
