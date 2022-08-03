document.getElementById('swap').addEventListener('click', swapNubmer);
validation = (number) => !isNaN(number) && number != '';
function swapNubmer() {
    number1 = document.getElementById('number1').value;
    number2 = document.getElementById('number2').value;

    if (validation(number1) && validation(number2)) {
        getMessage('previous-number', `Before the swapping Number1: ${number1}, Number2: ${number2}`);

        [number1, number2] = [number2, number1]

        getMessage('swapped-number', `After the swapping Number1: ${number1}, Number2: ${number2}`);
    }
    else {
        getMessage('previous-number', 'Please enter valid input');
    }


}

function getMessage(id, message) {
    document.getElementById(id).innerText = message;
}