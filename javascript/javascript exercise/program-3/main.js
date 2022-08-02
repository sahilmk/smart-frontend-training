document.getElementById('swap').addEventListener('click', swapNubmer);

function swapNubmer() {
    number1 = Number(document.getElementById('number1').value);
    number2 = Number(document.getElementById('number2').value);

    if (!isNaN(number1) && !isNaN(number2)) {
        getMessage('previous-number', `Before the swapping Number1: ${number1}, Number2: ${number2}`);

        [number1, number2] = [number2, number1]

        getMessage('swapped-number', `After the swapping Number1: ${number1}, Number2: ${number2}`);
    }
    else {
        getMessage('previous-number', 'Please enter valid input');
    }


}

function getMessage(id, message) {
    console.log(message);
    console.log(`'${id}'`);
    document.getElementById(`'${id}'`).innerText = message;
}