document.getElementById('submit').addEventListener('click', transposeMatrix);
const showMatrix1 = document.getElementById('showMatrix1');
const showOutput = document.getElementById('answer');
const row = document.getElementById('row');
const column = document.getElementById('column');

let matrix1;

//Add the two matrix
function transposeMatrix(e) {
    let rowNumber = row.value;
    let columnNumber = column.value;

    clearError();

    if (validate(rowNumber) && validate(columnNumber)) {
        createMatrix();

        if (rowNumber !== columnNumber) {
            let temp = rowNumber;
            rowNumber = columnNumber;
            columnNumber = temp;
        }

        let outputMatrix = new Array(columnNumber);

        for (let i = 0; i < rowNumber; i++) {
            outputMatrix[i] = new Array(rowNumber);
        }

        let output = '';

        for (let i = 0; i < rowNumber; i++) {
            output += `[`;

            for (let j = 0; j < columnNumber; j++) {
                outputMatrix[i][j] = matrix1[j][i];
                output += `${outputMatrix[i][j]} `;
            }

            output += `]`;
            output += `<br>`;
        }

        showOutput.innerHTML = output;
        row.value = '';
        column.value = '';
    } else {
        if (validate(rowNumber)) {
            showMessage('#error-1', 'Please enter positive number greater than one');
        }

        if (validate(columnNumber)) {
            showMessage('#error-2', 'Please enter positive number greater than one');
        }

        showMatrix1.innerHTML = '';
        showOutput.innerHTML = '';
    }
    e.preventDefault();
}

function createMatrix() {
    let rows = Number(row.value);
    let columns = Number(column.value);
    let showmat1 = '';
    matrix1 = new Array(rows);

    //Create matrix
    for (let i = 0; i < rows; i++) {
        matrix1[i] = new Array(columns);
        showmat1 += `[`;

        for (let j = 0; j < columns; j++) {
            matrix1[i][j] = i + 1;
            showmat1 += `${matrix1[i][j]} `;
        }

        showmat1 += `]`;
        showmat1 += `<br>`;
    }

    showMatrix1.innerHTML = showmat1;
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerHTML = message;
}

function validate(number) {
    return number !== '' && Number(number) >= 1 && !isNaN(number);
}

function clearError() {
    document.getElementById('error-1').innerHTML = '';
    document.getElementById('error-2').innerHTML = '';
}