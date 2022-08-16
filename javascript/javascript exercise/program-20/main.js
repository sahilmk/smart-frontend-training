const lowerNumber = document.getElementById('number-1');
const upperNumber = document.getElementById('number-2');
document.getElementById('submit').addEventListener('click', findArmstrong);

function findArmstrong(e) {
    let number1 = lowerNumber.value;
    let number2 = upperNumber.value;
    hideerror();

    if (validate(number1) && validate(number2)) {
        let armstrongNumbers = [];
        number1 = Number(number1);
        number2 = Number(number2);

        if (number1 < number2) {
            for (let i = number1; i <= number2; i++) {
                const numberLength = i.toString().length;
                let number = i;
                let reminder = 0;
                let sum = 0;

                while (number != 0) {
                    reminder = number % 10;
                    sum += Math.pow(reminder, numberLength);
                    number = Math.floor(number / 10);
                }

                if (sum === i) {
                    armstrongNumbers.push(i);
                }
            }

            let message = `Armstrong numbers between ${number1} and ${number2} are: `;
            if (armstrongNumbers.length !== 0) {
                for (let i = 0; i < armstrongNumbers.length; i++) {
                    message += armstrongNumbers[i] + " ";
                }
            } else {
                message += 'No numbers are there.'
            }

            showMessage('#show', message);
            clearInputs();
        } else {
            showMessage('#error-2', "Value of number-2 must be greater than number-1")
        }

    } else {
        if (!validate(number1)) {
            showMessage('#error-1', "Value must be positive integer");
        }
        if (!validate(number2)) {
            showMessage('#error-2', "Value must be positive integer");
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
    return number !== '' && !isNaN(newNumber) && newNumber >= 1 && Number.isInteger(newNumber);
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