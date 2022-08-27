document.getElementById('findFactorial').addEventListener('click', findFactorial);

function findFactorial(e) {
    let factorialNumber = document.getElementById('number').value;

    showMessagee('#error', '');

    if (validate(factorialNumber)) {
        factorialNumber = Number(factorialNumber);

        const factorial = calculateFactorial(factorialNumber);

        showMessagee('#show', `Factorial of ${factorialNumber}! is: ${factorial}`);
        document.getElementById('number').value = '';
    } else {
        showMessagee('#error', "Value must be positive number and it can't be empty");
        showMessagee('#show', '');
    }

    e.preventDefault();
}

//Recursive function for calculating the factorial of the number.
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    return number * calculateFactorial(number - 1);
}

// Show the output and error messages
function showMessagee(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the inputs
function validate(number) {
    return number !== '' && Number(number) >= 0 && Number.isInteger(Number(number));
}