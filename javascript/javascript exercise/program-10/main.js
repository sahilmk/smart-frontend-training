document.getElementById('submit').addEventListener('click', findGcd);

function findGcd(e) {
    let number1 = document.getElementById('number-1').value;
    let number2 = document.getElementById('number-2').value;

    hideerror();

    if (validate(number1) && validate(number2)) {
        absNumber1 = Math.abs(Number(number1));
        absNumber2 = Math.abs(Number(number2));

        let gcd = Math.max(absNumber1, absNumber2);

        while (gcd > 0) {
            if (absNumber1 % gcd === 0 && absNumber2 % gcd === 0) {
                break;
            }
            gcd--;
        }

        getMessage('#show', `Gcd of ${number1}, ${number2} is: ${gcd}`);
        clearInputs();
    } else {
        if (!validate(number1)) {
            getMessage('#error-1', "Value must be non-zero integer positive number");
        }
        if (!validate(number2)) {
            getMessage('#error-2', "Value must be non-zero integer positive number");
        }
        getMessage('#show', '')
    }

    e.preventDefault();
}

// Show the output and error messages
function getMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the inputs
function validate(number) {
    let newNumber = Number(number);
    return number !== '' && !isNaN(newNumber) && newNumber !== 0 && Number.isInteger(newNumber);
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