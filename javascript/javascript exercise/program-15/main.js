const base = document.getElementById('number-1');
const exponent = document.getElementById('number-2');
document.getElementById('submit').addEventListener('click', findPower);

function findPower(e) {
    let number1 = base.value;
    let number2 = exponent.value;
    hideerror();

    if (validate(number1) && validate(number2)) {
        number1 = Number(number1);
        number2 = Number(number2);

        let power = Math.pow(number1, number2);

        showMessage('#show', `${number1} ^ ${number2} : ${power}`);
        clearInputs();
    } else {
        if (!validate(number1)) {
            showMessage('#error-1', "Value must be number.");
        }
        if (!validate(number2)) {
            showMessage('#error-2', "Value must be number.");
        }
        showMessage('#show', '');
    }

    e.preventDefault();
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the inputs
function validate(number) {
    return number !== '' && !isNaN(Number(number));
}

//hide the error
function hideerror() {
    showMessage('#error-1', '');
    showMessage('#error-2', '');
}

//Clear the inputs
function clearInputs() {
    base.value = '';
    exponent.value = '';
}