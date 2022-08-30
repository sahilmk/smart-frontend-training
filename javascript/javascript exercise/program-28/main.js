const base = document.getElementById('number-1');
const exponent = document.getElementById('number-2');
document.getElementById('submit').addEventListener('click', findPower);

function findPower(e) {
    let number1 = base.value;
    let number2 = exponent.value;
    hideerror();

    if (validate(number1) && validate(number2) && Number.isInteger(Number(number2))) {
        number1 = Number(number1);
        number2 = Number(number2);

        if (number1 === 0 && number2 === 0) {
            showMessage('#error-2', "Base and exponent both can't be zero.")
        } else {
            let power;
            if (number2 >= 0) {
                power = calculatePower(number1, number2);
            } else {
                power = 1 / calculatePower(number1, Math.abs(number2))
            }

            showMessage('#show', `${number1} ^ ${number2} : ${power}`);
            clearInputs();
        }
    } else {
        showError(number1, '#error-1');
        showError(number2, '#error-2');
        showMessage('#show', '');
    }

    e.preventDefault();
}

function calculatePower(number1, number2) {
    if (number2 === 0) {
        return 1;
    }
    return number1 * calculatePower(number1, number2 - 1);
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Show the errors in particular output
function showError(number, id) {
    if (!validate(number)) {
        showMessage(id, "Value must be number.");
    }
    if (!Number.isInteger(Number(number))) {
        showMessage(id, "Value must be Interger")
    }
}

//Validate the inputs
function validate(number) {
    return number !== '' && !isNaN(number);
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