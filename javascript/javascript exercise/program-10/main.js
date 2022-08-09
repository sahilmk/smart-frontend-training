document.getElementById('submit').addEventListener('click', findGcd);

function findGcd(e) {
    let number1 = document.getElementById('number-1').value;
    let number2 = document.getElementById('number-2').value;

    hideerror();

    if (validate(number1) && validate(number2)) {
        number1 = Number(number1);
        number2 = Number(number2);

        let gcd = Math.max(number1, number2);

        while (gcd > 0) {
            if (number1 % gcd === 0 && number2 % gcd === 0) {
                break;
            }
            gcd--;
        }

        getMessage('#show', `Gcd of ${number1}, ${number2} is: ${gcd}`);
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