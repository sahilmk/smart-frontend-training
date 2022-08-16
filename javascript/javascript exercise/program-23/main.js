const input = document.getElementById('number');
document.getElementById('submit').addEventListener('click', findPrimeArmstrong);

function findPrimeArmstrong(e) {
    let number = input.value

    if (validate(number)) {
        number = Number(number);

        if (checkPrime(number)) {
            showMessage('#show-prime', `${number} is a prime number`)
        } else {
            showMessage('#show-prime', `${number} is not a prime number`)
        }

        if (checkArmstrong(number)) {
            showMessage('#show-armstrong', `${number} is a armstrong number`)
        } else {
            showMessage('#show-armstrong', `${number} is not a armstrong number`)
        }

        //Remove the error 
        showMessage('#error', '');
        input.value = '';
    } else {
        showMessage('#error', "Value must be positive integer.");
        showMessage('#show-prime', '');
        showMessage('#show-armstrong', '');
    }

    e.preventDefault();
}

//Function for checking number is prime or not
function checkPrime(number) {
    let count = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        return true;
    } else {
        return false;
    }
}

//Function for checking number is armstrong or not
function checkArmstrong(number) {
    let reminder = 0;
    let sum = 0;
    let store = number;

    //Converting the string to number and finding the lenght of number
    const numberLength = number.toString().length;

    while (number != 0) {
        reminder = number % 10;
        sum += Math.pow(reminder, numberLength);
        number = Math.floor(number / 10);
    }

    if (sum === store) {
        return true;
    } else {
        return false;
    }
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the inputs
function validate(number) {
    let newNumber = Number(number)
    return number !== '' && !isNaN(newNumber) && Number.isInteger(newNumber) && newNumber >= 1;
}