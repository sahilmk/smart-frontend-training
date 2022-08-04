document.getElementById('calculate').addEventListener('click', getQuotientReminder);

function getQuotientReminder() {
    var dividend = parseFloat(document.getElementById('dividend').value);
    var divisor = parseFloat(document.getElementById('divisor').value);

    if (divisor !== 0 && divisor > 0) {
        let quotient = Math.floor(dividend / divisor);


        var reminder = (dividend - (divisor * quotient));
        // var reminder2;
        // if (divisor < 0) {
        //     // reminder2 = reminder - divisor;
        //     getMessage(`quotient: ${quotient} and Reminder: ${reminder2}`);
        //     getMessage(`quotient: ${quotient} and Reminder: ${reminder} and also ${reminder2}`);
        // } else {
        getMessage(`quotient: ${quotient} and Reminder: ${reminder}`);
        // }
    }
    else {
        getMessage('Please Enter valid input');
    }
}

function getMessage(message) {
    console.log(message);
    document.getElementById('show').innerText = message;
}