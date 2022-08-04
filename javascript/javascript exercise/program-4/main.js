document.getElementById('submit').addEventListener('click', findOddEven);

function findOddEven(e) {

    number = document.getElementById('input').value;

    if (number !== '') {
        number = Number(number)

        if ((number % 2) == 0) {
            showMessage(`${number} is even number.`);
        } else {
            showMessage(`${number} is odd number.`);
        }

    } else {
        showMessage('Please enter a number');
    }


    e.preventDefault();
}

function showMessage(message) {
    document.getElementById('show').innerText = message;
}