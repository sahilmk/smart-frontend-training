document.getElementById('submit').addEventListener('click', findGcd);

function findGcd(e) {
    let number1 = document.getElementById('number-1').value;
    let number2 = document.getElementById('number-2').value;

    hideError();
    1
    if (validate(number1) && validate(number2)) {
        number1 = Number(number1);
        number2 = Number(number2);

        const gcd = GCD(Math.abs(number1), Math.abs(number2));

        showMessage('#show', `Gcd of ${number1}, ${number2} is: ${gcd}`);
        clearInputs();
    } else {
        validateAndShowError(number1, '#error-1');
        validateAndShowError(number2, '#error-2');
        showMessage('#show', '')
    }

    e.preventDefault();
}

function GCD(number1, number2) {
    if (number2 !== 0) {
        return GCD(number2, (number1 % number2));
    } else {
        return number1;
    }
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the individual inputs
function validateAndShowError(number, id) {
    if (!validate(number)) {
        showMessage(id, "Value must be integer");
    }
}

//Validate the inputs
validate = (number) => number !== '' && Number.isInteger(Number(number)) && !number.includes('e');

//hide the error
function hideError() {
    showMessage('#error-1', '');
    showMessage('#error-2', '');
}

//Clear the inputs
function clearInputs() {
    document.getElementById('number-1').value = '';
    document.getElementById('number-2').value = '';
}

