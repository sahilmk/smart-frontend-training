const input = document.getElementById('number');
document.getElementById('reverse').addEventListener('click', findReverse);

function findReverse(e) {
    if (validate(input.value)) {
        let number = Number(input.value);
        let reminder;
        let reverse = 0;

        while (number != 0) {
            reminder = number % 10;
            reverse = reverse * 10 + reminder;

            if (number > 0) {
                number = Math.floor(number / 10);
            } else {
                number = Math.ceil(number / 10);
            }
        }

        //Display the output and remove the error 
        showMessage('#show', `Number before the reverse operation is: ${input.value} after the reverse operation: ${reverse}`);
        showMessage('#error', '');
        input.value = '';
    } else {
        showMessage('#error', "Value must be integer.");
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