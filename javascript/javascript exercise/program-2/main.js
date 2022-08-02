document.getElementById('calculate').addEventListener('click', getQuotientReminder);

function getQuotientReminder() {
    var dividend = parseFloat(document.getElementById('dividend').value);
    var divisor = parseFloat(document.getElementById('divisor').value);

    if (divisor != 0 && !isNaN(dividend) && !isNaN(divisor)) {
        let quotiten = (dividend / divisor).toFixed(2);
        let reminder = (dividend % divisor).toFixed(2);

        getMessage(`Quotiten: ${quotiten} and Reminder: ${reminder}`);
    }
    else {
        getMessage('Please Enter valid input');
    }
}

function getMessage(message) {
    console.log(message);
    document.getElementById('show').innerText = message;
}