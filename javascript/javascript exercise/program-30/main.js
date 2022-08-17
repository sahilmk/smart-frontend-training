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
            let largeNumber = arr[0];
            let smallNumber = arr[0];

            for (let i = 0; i < arrLength; i++) {
                if (arr[i] > largeNumber) {
                    largeNumber = arr[i];
                } else if (arr[i] < smallNumber) {
                    smallNumber = arr[i];
                }
            }

            showMessage('#show', `Array: ${arr} <br> Largest number in array is: ${largeNumber} <br> Smallest number in array is: ${smallNumber}`);
            input.value = '';
        } else {
            showMessage('#error', 'Array elemnt must be numbers.');
            showMessage('#show', '');
        }
    } else {
        showMessage('#error', 'Please enter atleast two element of the array');
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
    return number !== '' && !isNaN(Number(number));
}



