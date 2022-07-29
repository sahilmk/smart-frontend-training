var str = 'Hello World!'
var reg = /hello/i;


reg = /^hello/i;
reg = /!$/;
reg = /^hello world!$/i;


reg = /hell. world!/i;
reg = /he*llo world!/i;

reg = /hel?o?x world!/i;
reg = /hello wor\^ld!/i;


//Brackets [] -Character Sets
//{} - time occurrence
reg = /^[hgt]{1}ello world!/i;
reg = /[^hgt]ello world!/i;
reg = /^[H]ello world!/;
reg = /^[A-Z]ello world!/;
reg = /^[A-Z][0-9]ello world!$/; //Exctely match the string from the end and start

//{} - time occurrence
reg = /^Hello world![0-9]{1,4}$/;
reg = /^Hello world![0-9]{3,}/;
reg = /^Hello world![0-9]{3,}$/;
//()for cathes the string
reg = /^(Hello){2,} world![0-9]{3,}$/i;


//Shorthand Character Classes
reg = /\w/; // Word Character(alphanumeric)
reg = /\W+/; // NON-Word Character(alphanumeric)
reg = /\d+/; // Word Character(alphanumeric)
reg = /^\D+/; // Word Character(alphanumeric)
reg = /\s+/; // Word Character(alphanumeric)
reg = /\S+/; // Word Character(alphanumeric)
reg = /world\b/;

//Assertions
reg = /(world)(?=!)/; // world follwed by the character
reg = /(world)(?!!)/; // world dosen't follwed by the charater

// reg = /\w+(\s+)?\w+/; // Word Character(alphanumeric)

var str = 'HellohELlo world!123hi world'

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
