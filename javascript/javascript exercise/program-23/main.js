const input = document.getElementById('number');
document.getElementById('submit').addEventListener('click', findPrimeArmstrong);

function findPrimeArmstrong(e) {
    let number = input.value

    if (validate(number)) {
        number = Number(number);

        checkPrime(number) ? showMessage('#show-prime', `${number} is a prime number`) : showMessage('#show-prime', `${number} is not a prime number`);

        checkArmstrong(number) ? showMessage('#show-armstrong', `${number} is a armstrong number`) : showMessage('#show-armstrong', `${number} is not a armstrong number`);

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
    let count = true;

    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            count = false;
        }
    }

    return count;
}

//Function for checking number is armstrong or not
function checkArmstrong(number) {
    let reminder = 0, sum = 0;
    const store = number;

    //Converting the string to number and finding the lenght of number
    const numberLength = number.toString().length;

    while (number != 0) {
        reminder = number % 10;
        sum += Math.pow(reminder, numberLength);
        number = Math.floor(number / 10);
    }

    return (sum === store) ? true : false;
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