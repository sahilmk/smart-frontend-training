document.getElementById('submit').addEventListener('click', findLcm);

function findLcm(e) {
    let number1 = document.getElementById('number-1').value;
    let number2 = document.getElementById('number-2').value;

    hideerror();

    if (validate(number1) && validate(number2)) {
        number1 = Number(number1);
        number2 = Number(number2);

        const lcm = (number1 / gcd(number1, number2)) * number2;

        getMessage('#show', `Gcd of ${number1}, ${number2} is: ${lcm}`);
        clearInputs();
    } else {
        if (!validate(number1)) {
            getMessage('#error-1', "Value must be non-zero integer positive number");
            document.getElementById('number-1').value = '';
        }
        if (!validate(number2)) {
            getMessage('#error-2', "Value must be non-zero integer positive number");
            document.getElementById('number-2').value = '';
        }
        getMessage('#show', '')
        clearInputs();
    }

    e.preventDefault();
}

//Find the gcd
function gcd(number1, number2) {
    if (number2 === 0) {
        return number1;
    }
    return gcd(number2, number1 % number2)
}

// Show the output and error messages
function getMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the inputs
function validate(number) {
    const regex = /\./
    return number !== '' && !isNaN(Number(number)) && number > 0 && !regex.test(number);
}

//hide the error
function hideerror() {
    getMessage('#error-1', '');
    getMessage('#error-2', '');
}

//Clear the inputs
function clearInputs(number1, number2) {
    document.getElementById('number-1').value = '';
    document.getElementById('number-2').value = '';
}