const showMatrix1 = document.getElementById('showMatrix1');
const showMatrix2 = document.getElementById('showMatrix2');
const showOutput = document.getElementById('answer');
const row = document.getElementById('row');
const column = document.getElementById('column');

let matrix1, matrix2;


//Add the two matrix
const addMatrix = (e) => {
    const rowNumber = row.value;
    const columnNumber = column.value;

    clearError();
    if (validate(rowNumber) && validate(columnNumber)) {
        createMatrix();

        const outputMatrix = new Array(rowNumber);
        let output = '';

        for (let i = 0; i < rowNumber; i++) {
            outputMatrix[i] = new Array(columnNumber);
        }

        matrix1.map(function (valI, indexI) {
            output += `[`;
            valI.map(function (valJ, indexJ) {
                valI[indexJ] = valJ + matrix2[indexI][indexJ];
                output += `${valI[indexJ]} `;
            });
            output += `]<br>`;
            console.log(valI);
            console.log(valI[indexI]);
        });


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
        showMatrix2.innerHTML = '';
        showOutput.innerHTML = '';
    }
    e.preventDefault();
}

document.getElementById('submit').addEventListener('click', addMatrix);

function createMatrix() {
    const rows = Number(row.value);
    const columns = Number(column.value);
    let showmat1 = '';
    let showmat2 = '';
    matrix1 = new Array(rows);
    matrix2 = new Array(rows);

    //Create matrix
    for (let i = 0; i < rows; i++) {
        matrix1[i] = new Array(columns);
        matrix2[i] = new Array(columns);
        showmat1 += `[`;
        showmat2 += `[`;

        for (let j = 0; j < columns; j++) {
            matrix1[i][j] = i + 1;
            matrix2[i][j] = i + 1;
            showmat1 += `${matrix1[i][j]} `;
            showmat2 += `${matrix2[i][j]} `;
        }

        showmat1 += `]<br>`;
        showmat2 += `]<br>`;
    }

    showMatrix1.innerHTML = showmat1;
    showMatrix2.innerHTML = showmat2;
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