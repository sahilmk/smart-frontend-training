let dimension1 = document.getElementById('number-1');
let dimension2 = document.getElementById('number-2');
let dimension3 = document.getElementById('number-3');
let dimension4 = document.getElementById('number-4');
let matrix1 = document.getElementById('matrix-1');
let matrix2 = document.getElementById('matrix-2');

document.getElementById('submit').addEventListener('click', addMatrix);

//Create the inputs for the array+
function addMatrix(e) {
    dimension1 = dimension1.value;
    dimension2 = dimension2.value;
    dimension3 = dimension3.value;
    dimension4 = dimension4.value;

    hideError();

    if (validate(dimension1, 1) && validate(dimension2, 2) && validate(dimension3, 3) && validate(dimension4, 4)) {
        dimension1 = Number(dimension1);
        dimension2 = Number(dimension2);
        dimension3 = Number(dimension3);
        dimension4 = Number(dimension4);

        if (dimension1 === dimension3 && dimension2 === dimension4) {
            matrix1 = matrix1.value;
            matrix2 = matrix2.value;

            const arr1 = matrix1.split(',');
            const arr2 = matrix2.split(',');

            if (arr1.length === dimension1 * dimension2 && arr2.length === dimension3 * dimension4) {
                let count1 = 0;
                let count2 = 0;
                for (let i = 0; i < arr1.length; i++) {
                    if (validate(arr1[i])) {
                        count1++;
                    }
                    if (validate(arr2[i])) {
                        count2;
                    }
                }

                if (count1 === arr1.length && count2 === arr2.length) {

                }

            } else {
                showMessage('#error-6', `Please enter ${dimension1 * dimension2} element because you dimention of matrix is ${dimension1}X${dimension2}`)
            }
        } else {
            showMessage('#error-5', 'Dimension of both matrix must be same.')
        }

    }

    e.preventDefault();
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerHTML = message;
}

//Validate the inputs
function validate(number, id) {
    const newNumber = Number(number);

    if (number === '' && isNaN(newNumber)) {
        showMessage(`#error-${id}`, 'Please enter a number');
    } else if (newNumber < 0 && !Number.isInteger(newNumber)) {
        showMessage(`#error-${id}`, 'Number must be positive integer.');
    }

    return number !== '' && !isNaN(newNumber) && newNumber > 0 && Number.isInteger(newNumber);
}

function validateMatrix(string, id) {
    return number !== '' && !isNaN(Number(number));
}

function hideError() {
    for (let i = 1; i <= 7; i++) {
        showMessage(`#error-${i}`, '');
    }
}