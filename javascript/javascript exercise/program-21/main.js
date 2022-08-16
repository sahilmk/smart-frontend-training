const input = document.getElementById('number');
document.getElementById('submit').addEventListener('click', findFactors);

function findFactors(e) {
    let number = input.value

    if (validate(number)) {
        let factors = [];
        number = Number(number);

        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                factors.push(i);
            }
        }

        let message = `Factors of ${number}: `;

        if (factors.length !== 0) {
            for (let i = 0; i < factors.length; i++) {
                message += factors[i] + ' ';
            }
        } else {
            message += 'No factors are there';
        }

        showMessage('#show', message);

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
    return number !== '' && !isNaN(newNumber) && Number.isInteger(newNumber);
}