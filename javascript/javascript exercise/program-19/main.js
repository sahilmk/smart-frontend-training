const input = document.getElementById('number');
document.getElementById('submit').addEventListener('click', findArmstrong);

function findArmstrong(e) {
    let number = input.value

    if (validate(number)) {
        let reminder = 0;
        let sum = 0;

        //Converting the string to number and finding the lenght of number
        number = Number(number);
        const numberLength = number.toString().length;

        while (number != 0) {
            reminder = number % 10;
            sum += Math.pow(reminder, numberLength);
            number = Math.floor(number / 10);
        }

        if (sum === Number(input.value)) {
            showMessage('#show', `${input.value} is a armstrong`);
        } else {
            showMessage('#show', `${input.value} is not a armstrong`)
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
    let newNumber = Number(number)
    return number !== '' && !isNaN(newNumber) && Number.isInteger(newNumber) && newNumber >= 1;
}