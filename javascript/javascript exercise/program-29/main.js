document.getElementById('submit').addEventListener('click', calculateAverage);
const input = document.getElementById('number');

//Create the inputs for the array+
function calculateAverage(e) {
    let number = input.value;
    const arr = number.split(',');
    const arrLength = arr.length;

    showMessage('#error', '');

    if (arrLength > 1) {
        let count = 0;

        for (let i = 0; i < arrLength; i++) {
            if (validate(arr[i])) {
                count++;
            }
        }

        if (count === arrLength) {
            let sum = 0;

            for (let i = 0; i < arrLength; i++) {
                sum += Number(arr[i]);
            }

            const average = (sum / arrLength).toFixed(2);
            showMessage('#show', `Array elements: ${arr} <br> Average of array element: ${average}`);
            input.value = '';
        } else {
            showMessage('#error', 'Array elemnt must be numbers.');
            showMessage('#show', '');
        }
    } else {
        showMessage('#error', 'Please enter aleast two element of the array');
        showMessage('#show', '');
    }

    e.preventDefault();
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerHTML = message;
}

//Validate the inputs
function validate(number) {
    const regex = /^\s+$/;
    return number !== '' && !isNaN(Number(number)) && !regex.test(number);
}
