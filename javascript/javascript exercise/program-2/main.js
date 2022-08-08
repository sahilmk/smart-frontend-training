document.getElementById('calculate').addEventListener('click', getQuotientReminder);

function getQuotientReminder() {
    let dividend = parseFloat(document.getElementById('dividend').value);
    let divisor = parseFloat(document.getElementById('divisor').value);

    if (!isNaN(dividend) && !isNaN(divisor) && divisor !== 0 && divisor > 0) {
        const quotient = Math.floor(dividend / divisor);
        const reminder = (dividend - (divisor * quotient));

        getMessage(`quotient: ${quotient} and Reminder: ${reminder}`);
    } else {
        getMessage('Divisor must be number and greater than 0 and positive.');
    }

    clearInput();
}

//Show the output and error messages
function getMessage(message) {
    document.getElementById('show').innerText = message;
}

//Clear the input after clicking the calculate button
function clearInput() {
    document.getElementById('dividend').value = '';
    document.getElementById('divisor').value = '';
}   