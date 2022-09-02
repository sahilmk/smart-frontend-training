document.getElementById('submit').addEventListener('click', multiplytMatrix);
const showMatrix1 = document.getElementById('showMatrix1');
const showMatrix2 = document.getElementById('showMatrix2');
const showOutput = document.getElementById('answer');
const rowOne = document.getElementById('rowOne');
const columnOne = document.getElementById('columnOne');
const rowTwo = document.getElementById('rowTwo');
const columnTwo = document.getElementById('columnTwo');

let matrix1, matrix2;

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

        for (let i = 0; i < matrixOneRow; i++) {
            outputMatrix[i] = new Array(matrixTwoColumn);
            output += '[';

            for (let j = 0; j < matrixTwoColumn; j++) {
                let ans = 0;

                for (let k = 0; k < matrixOneColumn; k++) {
                    ans += matrix1[i][k] * matrix2[k][j];
                }

                outputMatrix[i][j] = ans;
                output += outputMatrix[i][j];
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
        matrix1 = new Array(matrixRow);

        //Create matrix
        for (let i = 0; i < matrixRow; i++) {
            showmat += '[';
            matrix1[i] = new Array(matrixColumns);

            for (let j = 0; j < matrixColumns; j++) {
                matrix1[i][j] = i + 1;
                showmat += matrix1[i][j];
            }
            showmat += ']<br>';

        }

        showMatrix1.innerHTML = showmat;
    } else {
        matrix2 = new Array(matrixRow);

        //Create matrix
        for (let i = 0; i < matrixRow; i++) {
            showmat += '[';
            matrix2[i] = new Array(matrixColumns);

            for (let j = 0; j < matrixColumns; j++) {
                matrix2[i][j] = i + 1;
                showmat += matrix2[i][j];
            }
            showmat += ']<br>';

        }

        showMatrix2.innerHTML = showmat;
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
    showMatrix1.innerHTML = '';
    showMatrix2.innerHTML = '';
    showOutput.innerHTML = '';
}

//Clear the input
function clearInput() {
    rowOne.value = '';
    columnOne.value = '';
    rowTwo.value = '';
    columnTwo.value = '';
}