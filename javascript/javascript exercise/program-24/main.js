document.getElementById('findSum').addEventListener('click', findSum);

function findSum(e) {
    let number = document.getElementById('number').value;

    showMessage('#error', '');

    if (validate(number)) {
        number = Number(number);
        const sum = naturalSum(number);

        showMessage('#show', `Sum of 1 to ${number} is: ${sum}`);
        document.getElementById('number').value = '';

    } else {
        showMessage('#error', "Value must be positive integer.");
        showMessage('#show', '');
    }

    e.preventDefault();
}

function naturalSum(number) {
    if (number === 0) {
        return number;
    }

    return number + naturalSum(number - 1);
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the inputs
function validate(number) {
    return number !== '' && !isNaN(Number(number)) && Number(number) > 0 && Number.isInteger(Number(number));;
}