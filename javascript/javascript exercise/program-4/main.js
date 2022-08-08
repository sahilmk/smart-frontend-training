document.getElementById('submit').addEventListener('click', findOddEven);
document.getElementById('input').addEventListener('keyup', validateInput);

function findOddEven(e) {
    let number = document.getElementById('input').value;

    if (number !== '') {
        number = Number(number)

        if ((number % 2) == 0) {
            showMessage('show', `${number} is even number.`);
        } else {
            showMessage('show', `${number} is odd number.`);
        }

    } else {
        showMessage('error', 'Please enter a number');
    }

    clearInput();

    e.preventDefault();
}

function validateInput(e) {
    if (isNaN(Number(e.target.value))) {
        showMessage('error', 'Only digit is allowed')
    } else {
        document.getElementById('error').innerText = '';
    }
}

function showMessage(targetId, message) {
    document.getElementById(targetId).innerText = message;
}

function clearInput() {
    document.getElementById('input').value = '';
} 