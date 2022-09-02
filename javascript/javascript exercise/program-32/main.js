document.getElementById('submit').addEventListener('click', multiplytMatrix);
const showMatrixOne = document.getElementById('showMatrixOne');
const showMatrixTwo = document.getElementById('showMatrixTwo');
const showOutput = document.getElementById('answer');
const rowOne = document.getElementById('rowOne');
const columnOne = document.getElementById('columnOne');
const rowTwo = document.getElementById('rowTwo');
const columnTwo = document.getElementById('columnTwo');

let matrixOne, matrixTwo;

//Add the two matrix
function multiplytMatrix(e) {
    const matrixOneRow = rowOne.value;
    const matrixOneColumn = columnOne.value;
    const matrixTwoRow = rowTwo.value;
    const matrixTwoColumn = columnTwo.value;
    clearError();

    if (validate(matrixOneRow) && validate(matrixOneColumn) && validate(matrixTwoRow) && validate(matrixTwoColumn) && matrixOneColumn === matrixTwoRow) {
        let outputMatrix = new Array(matrixOneRow);
        let output = '';

        createMatrix(1, matrixOneRow, matrixOneColumn);
        createMatrix(2, matrixTwoRow, matrixTwoColumn);

        for (let row = 0; row < matrixOneRow; row++) {
            outputMatrix[row] = new Array(matrixTwoColumn);
            output += '[';

            for (let column = 0; column < matrixTwoColumn; column++) {
                let ans = 0;

                for (let iterator = 0; iterator < matrixOneColumn; iterator++) {
                    ans += matrixOne[row][iterator] * matrixTwo[iterator][column];
                }

                outputMatrix[row][column] = ans;
                output += outputMatrix[row][column];
            }

            output += ']<br>';
        }

        showOutput.innerHTML = output;
        clearInput();
    } else {
        showError('#error-1', matrixOneRow);
        showError('#error-2', matrixOneColumn);
        showError('#error-3', matrixTwoRow);
        showError('#error-4', matrixTwoColumn);

        if (matrixOneColumn !== matrixTwoRow) {
            showMessage('#error-4', 'The number of column in matrix 1 and number of row in matrix 2 must be same');
        }

        clearOutput();
    }
    e.preventDefault();
}

function createMatrix(number, matrixRow, matrixColumns) {
    let showmat = '';
    if (number === 1) {
        matrixOne = new Array(matrixRow);

        //Create matrix
        for (let row = 0; row < matrixRow; row++) {
            showmat += '[';
            matrixOne[row] = new Array(matrixColumns);

            for (let column = 0; column < matrixColumns; column++) {
                matrixOne[row][column] = row + 1;
                showmat += matrixOne[row][column];
            }
            showmat += ']<br>';

        }

        showMatrixOne.innerHTML = showmat;
    } else {
        matrixTwo = new Array(matrixRow);

        //Create matrix
        for (let row = 0; row < matrixRow; row++) {
            showmat += '[';
            matrixTwo[row] = new Array(matrixColumns);

            for (let column = 0; column < matrixColumns; column++) {
                matrixTwo[row][column] = row + 1;
                showmat += matrixTwo[row][column];
            }
            showmat += ']<br>';

        }

        showMatrixTwo.innerHTML = showmat;
    }
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerHTML = message;
}

//Show the error in perticular input if any is there.
function showError(id, value) {
    if (!validate(value)) {
        showMessage(id, 'Please enter positive number greater than one');
    }
}

//Validate the input
function validate(number) {
    return number !== '' && Number(number) >= 1 && Number.isInteger(Number(number));
}

//Clear the error
function clearError() {
    document.getElementById('error-1').innerHTML = '';
    document.getElementById('error-2').innerHTML = '';
    document.getElementById('error-3').innerHTML = '';
    document.getElementById('error-4').innerHTML = '';
}

//Clear the output
function clearOutput() {
    showMatrixOne.innerHTML = '';
    showMatrixTwo.innerHTML = '';
    showOutput.innerHTML = '';
}

//Clear the input
function clearInput() {
    rowOne.value = '';
    columnOne.value = '';
    rowTwo.value = '';
    columnTwo.value = '';
}