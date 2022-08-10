document.getElementById('calculateFibonacci').addEventListener('click', fibonacci);

function fibonacci(e) {
    let lowerBoundry = document.getElementById('number').value;

    getMessage('#error', '');

    if (validate(lowerBoundry)) {
        lowerBoundry = Number(lowerBoundry);

        let series = [];
        let a = 0;
        let b = 1;
        let c;

        if (lowerBoundry === 1) {
            series.push(a);
        } else if (lowerBoundry === 2) {
            series.push(a);
            series.push(b);
        } else if (lowerBoundry > 2) {
            series.push(a);
            series.push(b);
            for (let i = 2; i < lowerBoundry; i++) {
                c = a + b;
                series.push(c);
                a = b;
                b = c;
            }
        }

        let message = `fibonacci numbers: <br>`;
        for (let i = 0; i < lowerBoundry; i++) {
            message += `${series[i]}<br>`
        }

        getMessage('#show', message);
    } else {
        getMessage('#error', "Value must be between 1 to 1450 and it can't be empty");
        document.getElementById('number').value = '';
        getMessage('#show', '')
    }

    e.preventDefault();
}

// Show the output and error messages
function getMessage(messageId, message) {
    document.querySelector(messageId).innerHTML = message;
}

//Validate the inputs
function validate(number) {
    return number !== '' && !isNaN(Number(number)) && Number(number) >= 1 && Number(number) <= 1450 && Number.isInteger(number);
}