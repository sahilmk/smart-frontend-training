document.getElementById('swap').addEventListener('click', swapNubmer);

//Validation functoin validate the inputs
const validation = (number) => !isNaN(number) && number !== '';

function swapNubmer() {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;

    if (validation(number1) && validation(number2)) {
        showMessage('previous-number', `Before the swapping Number1: ${number1}, Number2: ${number2}`);

        [number1, number2] = [number2, number1];

        showMessage('swapped-number', `After the swapping Number1: ${number1}, Number2: ${number2}`);
    } else {
        showMessage('previous-number', "Input must be in digit, and it can't be empty");
    }
}

//Show the output and error message.
function showMessage(id, message) {
    document.getElementById(id).innerText = message;
}