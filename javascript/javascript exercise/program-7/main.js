document.getElementById('findSum').addEventListener('click', findSum);

function findSum(e) {
    const number = document.getElementById('number').value;

    getMessage('#error', '');

    if (validate(number)) {
        const sum = number * (number - 1) / 2;

        getMessage('#show', `Sum of 1 to ${number} is: ${sum}`);

    } else {
        getMessage('#error', "Value must be number and it greater than 0 and it can't be empty");
        getMessage('#show', '');
        document.getElementById('number').value = '';

    }

    e.preventDefault();
}

// Show the output and error messages
function getMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the inputs
function validate(number) {
    return number !== '' && !isNaN(Number(number)) && Number(number) > 0;
}