document.getElementById('findFactorial').addEventListener('click', findFactorial);

function findFactorial(e) {
    let factorialNumber = document.getElementById('number').value;

    getMessage('#error', '');

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

        getMessage('#show', `Factorial of ${factorialNumber}! is: ${factorial}`);
    } else {
        getMessage('#error', "Value must be positive integer and it can't be empty");
        document.getElementById('number').value = '';
        getMessage('#show', '');
    }

    e.preventDefault();
}

// Show the output and error messages
function getMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the inputs
function validate(number) {
    return number !== '' && !isNaN(Number(number)) && Number(number) >= 0 && Number.isInteger(Number(number));
}
