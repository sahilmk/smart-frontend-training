const lowerNumber = document.getElementById('number-1');
const upperNumber = document.getElementById('number-2');
document.getElementById('submit').addEventListener('click', findPrime);

function findPrime(e) {
    let number1 = lowerNumber.value;
    let number2 = upperNumber.value;
    hideerror();

    if (validate(number1) && validate(number2) && number1 < number2) {
        const primeNumbers = [];
        number1 = Number(number1);
        number2 = Number(number2);

        for (let i = number1; i <= number2; i++) {
            let isPrime = true;

            for (let j = 2; j <= i / 2; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                primeNumbers.push(i);
            }
        }

        let message = `Prime numbers between ${number1} and ${number2} are: `
        if (primeNumbers.length !== 0) {
            message += primeNumbers;
        } else {
            message += 'No numbers are there.'
        }
        showMessage('#show', message);
        clearInputs();
    } else {
        if (!validate(number1)) {
            showMessage('#error-1', "Value must be positive integer");
        }
        if (!validate(number2)) {
            showMessage('#error-2', "Value must be positive integer");
        }
        if (number1 > number2) {
            showMessage('#error-2', "Value of number-2 must be greater than number-1")
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
    const newNumber = Number(number)
    return number !== '' && !isNaN(number) && newNumber >= 1 && Number.isInteger(newNumber);
}

//hide the error
function hideerror() {
    showMessage('#error-1', '');
    showMessage('#error-2', '');
}

//Clear the inputs
function clearInputs() {
    lowerNumber.value = '';
    upperNumber.value = '';
}