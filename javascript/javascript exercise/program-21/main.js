const input = document.getElementById('number');
document.getElementById('submit').addEventListener('click', findFactors);

//Find the factors
function findFactors(e) {
    let number = input.value

    if (validate(number)) {
        let factors = [];
        let message = `Factors of ${number}: `;
        positiveNumber = Math.abs(Number(number));

        for (let i = 1; i <= positiveNumber; i++) {
            if (positiveNumber % i === 0) {
                factors.push(i);
            }
        }

        const arrayLength = factors.length;

        //add the negative factors
        if (Number(number) < 0) {
            for (let i = 0; i < arrayLength; i++) {
                factors.push(factors[i] * -1);
            }
        }

        if (factors.length !== 0) {
            message += factors;
        } else {
            message += 'No factors are there.';
        }

        showMessage('#show', message);

        //Remove the error 
        showMessage('#error', '');
        input.value = '';
    } else {
        showMessage('#error', "Value must be integer.");
        showMessage('#show', '');
    }

    e.preventDefault();
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the inputs
validate = (number) => number !== '' && Number.isInteger(Number(number));