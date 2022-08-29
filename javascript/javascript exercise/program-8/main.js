document.getElementById('findFactorial').addEventListener('click', onFindFactorial);

function onFindFactorial(e) {
    let factorialNumber = document.getElementById('number').value;

    showMessage('#error', '');

    if (validate(factorialNumber)) {
        let factorial = 1;
        factorialNumber = Number(factorialNumber);

        if (factorialNumber === 0) {
            factorial = 1;
        } else {
            for (let i = factorialNumber; i > 0; i--) {
                factorial *= i;
            }
        }

        showMessage('#showOutput', `Factorial of ${factorialNumber}! is: ${factorial}`);
    } else {
        if (Number(factorialNumber) > 170) {
            showMessage('#showOutput', `Factorial of ${factorialNumber}! is: infinity`);
        } else {
            showMessage('#error', "Value must be positive integer and it can't be empty");
            document.getElementById('number').value = '';
            showMessage('#showOutput', '');
        }
    }

    e.preventDefault();
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the inputs
function validate(number) {
    return number !== '' && !isNaN(Number(number)) && Number(number) >= 0 && Number(number) <= 170 && Number.isInteger(Number(number));
}
