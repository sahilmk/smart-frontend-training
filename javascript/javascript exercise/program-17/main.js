const input = document.getElementById('number');
document.getElementById('submit').addEventListener('click', findPalindrome);

function findPalindrome(e) {
    let number = input.value

    if (validate(number)) {
        let count = 0;
        number = Number(number);

        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                count++;
            }
        }

        if (count === 2) {
            getMessage('#show', `${number} is a prime number`);
        } else {
            getMessage('#show', `${number} is not a prime number`)
        }

        //Remove the error 
        getMessage('#error', '');
        input.value = '';
    } else {
        getMessage('#error', "Value must be positive integer.");
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
    let newNumber = Number(number)
    return number !== '' && !isNaN(newNumber) && Number.isInteger(newNumber) && newNumber >= 1;
}