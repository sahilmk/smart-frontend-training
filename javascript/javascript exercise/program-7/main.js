const input = document.getElementById('number');

let findSum = (e) => {
    let number = input.value;

    showMessage('#error', '');

    if (validate(number)) {
        number = Number(number);
        const sum = number * (number + 1) / 2;

        showMessage('#show', `Sum of 1 to ${number} is: ${sum}`);

    } else {
        showMessage('#error', "Value must be positive integer and it can't be empty");
        showMessage('#show', '');
        document.getElementById('number').value = '';
    }

    e.preventDefault();
}
document.getElementById('findSum').addEventListener('click', findSum);

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the inputs
function validate(number) {
    return number !== '' && !isNaN(Number(number)) && Number(number) > 0 && Number.isInteger(Number(number));
}