document.getElementById('submit').addEventListener('click', findGcd);

function findGcd(e) {
    let number1 = document.getElementById('number-1').value;
    let number2 = document.getElementById('number-2').value;

    hideerror();

    if (validate(number1) && validate(number2)) {
        number1 = Number(number1);
        number2 = Number(number2);

        let gcd = calculateGCD(number1, number2);

        showMessage('#show', `Gcd of ${number1}, ${number2} is: ${gcd}`);
        clearInputs();
    } else {
        if (!validate(number1)) {
            showMessage('#error-1', "Value must be non-zero integer positive number");
            document.getElementById('number-1').value = '';
        }
        if (!validate(number2)) {
            showMessage('#error-2', "Value must be non-zero integer positive number");
            document.getElementById('number-2').value = '';
        }
        showMessage('#show', '')
    }

    e.preventDefault();
}

function calculateGCD(number1, number2) {
    if (number2 !== 0) {
        return calculateGCD(number2, number1 % number2);
    } else {
        return number1;
    }
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the inputs
function validate(number) {
    const regex = /\./
    return number !== '' && !isNaN(Number(number)) && number > 0 && !regex.test(number);
}

//hide the error
function hideerror() {
    showMessage('#error-1', '');
    showMessage('#error-2', '');
}

//Clear the inputs
function clearInputs() {
    document.getElementById('number-1').value = '';
    document.getElementById('number-2').value = '';
}