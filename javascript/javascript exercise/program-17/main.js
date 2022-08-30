const input = document.getElementById('number');
document.getElementById('submit').addEventListener('click', findPrime);

function findPrime(e) {
    let number = input.value

    if (validate(number)) {
        let count = 0;
        number = Number(number);

        let isPrime = true;
        for (let i = 2; i <= number / 2; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            showMessage('#show', `${number} is a prime number`);
        } else {
            showMessage('#show', `${number} is not a prime number`)
        }

        //Remove the error 
        showMessage('#error', '');
        input.value = '';
    } else {
        showMessage('#error', "Value must be positive integer.");
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
    const newNumber = Number(number)
    return number !== '' && !isNaN(number) && Number.isInteger(newNumber) && newNumber >= 1;
}