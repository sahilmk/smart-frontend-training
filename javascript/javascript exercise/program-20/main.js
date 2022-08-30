const lowerNumber = document.getElementById('number-1');
const upperNumber = document.getElementById('number-2');
document.getElementById('submit').addEventListener('click', findArmstrong);

function findArmstrong(e) {
    let lowerLimit = lowerNumber.value;
    let upperLimit = upperNumber.value;
    hideError();

    if (validate(lowerLimit) && validate(upperLimit) && Number(lowerLimit) < Number(upperLimit)) {
        const armstrongNumbers = [];
        lowerLimit = Number(lowerLimit);
        upperLimit = Number(upperLimit);

        for (let i = lowerLimit; i <= upperLimit; i++) {
            const numberLength = i.toString().length;
            let number = i;
            let sum = 0;

            while (number != 0) {
                const reminder = number % 10;
                sum += Math.pow(reminder, numberLength);
                number = Math.floor(number / 10);
            }

            if (sum === i) {
                armstrongNumbers.push(i);
            }
        }

        let message = `Armstrong numbers between ${lowerLimit} and ${upperLimit} are: `;
        if (armstrongNumbers.length !== 0) {
            for (let i = 0; i < armstrongNumbers.length; i++) {
                message += armstrongNumbers[i] + " ";
            }
        } else {
            message += 'No numbers are there.'
        }

        showMessage('#result', message);
        clearInputs();
    } else {
        showError(lowerLimit, '#error-1');
        showError(upperLimit, '#error-2');
        if (Number(lowerLimit) > Number(upperLimit)) {
            showMessage('#error-2', "Value of number-2 must be greater than number-1");
        }
        showMessage('#result', '');
    }

    e.preventDefault();
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

// Show error
function showError(limit, id) {
    if (!validate(limit)) {
        showMessage(id, "Value must be positive integer greater than 0");
    }
}

//Validate the inputs
function validate(number) {
    const newNumber = Number(number)
    return number !== '' && !isNaN(number) && newNumber >= 1 && Number.isInteger(newNumber);
}

//hide the error
function hideError() {
    showMessage('#error-1', '');
    showMessage('#error-2', '');
}

//Clear the inputs
function clearInputs() {
    lowerNumber.value = '';
    upperNumber.value = '';
}