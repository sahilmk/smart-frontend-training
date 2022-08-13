const input = document.getElementById('number');
document.getElementById('findDigit').addEventListener('click', findDigit);

function findDigit(e) {
    if (validate(input.value)) {
        let totalDigit = 0;
        let number = Number(input.value);

        while (number != 0) {
            if (number > 0) {
                number = Math.floor(number / 10);
            } else {
                number = Math.ceil(number / 10);
            }
            totalDigit += 1;
        }

        //Display the output and remove the error 
        getMessage('#show', `Total number of digit in  ${input.value} is: ${totalDigit}`);
        getMessage('#error', '');
        input.value = '';
    } else {
        getMessage('#error', "Value must be integer.");
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
    return number !== '' && !isNaN(newNumber) && Number.isInteger(newNumber);
}