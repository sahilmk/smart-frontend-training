document.getElementById('submit').addEventListener('click', showPatterns);
const numberOfRow = document.getElementById('row');
const showOutput = document.getElementById('show-1');
const selectedPattern = document.getElementById('select1');

let outputMessage = '';

function showPatterns(e) {
    const rowNumber = numberOfRow.value;
    outputMessage = '';
    const pyramidType = selectedPattern.value;

    switch (pyramidType) {
        case 'halfstartriangle':
            outputMessage = '<h3>Half * Triangle</h3>';
            halfPyramid(rowNumber, true, true);
            break;
        case 'halfdigittriangle':
            outputMessage += '<h3> Half Digit Triangle</h3>';
            halfPyramid(rowNumber, false, true);
            break;
        case 'halfalphabettriangle':
            outputMessage += '<h3> Half Alphabet Triangle</h3>';
            halfAlphabatPyramid(rowNumber);
            break;
        case 'reversehalfstar':
            outputMessage += '<h3> Half Reverse * Triangle</h3>';
            halfPyramid(rowNumber, true, false);
            break;
        case 'reversehalfdigit':
            outputMessage += '<h3> Half Reverse Digit Triangle</h3>';
            halfPyramid(rowNumber, false, false);
            break;
        case 'startriangle':
            outputMessage += '<h3> Full * Triangle</h3>';
            fullPyramid(rowNumber, true);
            break;
        case 'digittriangle':
            outputMessage += '<h3> Full Digit Triangle</h3>';
            digitPyramid(rowNumber);
            break;
        case 'reversestartriangle':
            outputMessage += '<h3> Full Reverse * Triangle</h3>';
            fullPyramid(rowNumber, false);
            break;
        case 'pascaltriangle':
            outputMessage += '<h3> Pascal Triangle</h3>';
            pascalTriangle(rowNumber);
            break;
        case 'incrementnumbertriangle':
            outputMessage += '<h3> Increasing Number Triangle</h3>';
            increasingNumberTriangle(rowNumber);
            break;
    }

    showOutput.innerHTML = outputMessage;
    e.preventDefault();
}

//Halft pyramid for digit and *
function halfPyramid(rowNumber, message, direction) {
    for (let row = 1; row <= rowNumber; row++) {
        for (let column = 1; column <= (direction ? row : ((rowNumber - row) + 1)); column++) {
            outputMessage += (message ? '*' : column);
        }

        outputMessage += '<br>';
    }
}

//Halft pyramid for alphabat
function halfAlphabatPyramid(rowNumber) {
    for (let row = 1; row <= rowNumber; row++) {
        for (let column = 1; column <= row; column++) {
            outputMessage += String.fromCharCode(64 + ((row % 26) === 0 ? 26 : (row % 26)));
        }

        outputMessage += '<br>';
    }
}

//Fullpyramid of star
function fullPyramid(rowNumber, direction) {
    for (let row = 1; row <= rowNumber; row++) {
        for (let space = 1; space <= Number(direction ? rowNumber - row : (row - 1)); space++) {
            outputMessage += '&nbsp&nbsp ';
        }

        for (let column = 0; column < Number(direction ? ((2 * row) - 1) : ((2 * (rowNumber - row)) + 1)); column++) {
            outputMessage += " *";
        }

        outputMessage += '<br>';
    }
}

//Full pyramid of digit
function digitPyramid(rowNumber) {
    let count = 0, count1 = 0;

    for (let row = 1; row <= rowNumber; row++) {
        for (let space = 1; space <= rowNumber - row; space++) {
            outputMessage += '&nbsp&nbsp';
            count++;
        }

        for (let column = 0; column < (2 * row) - 1; column++) {
            if (count <= rowNumber - 1) {
                outputMessage += row + column;
                ++count;
            } else {
                ++count1;
                outputMessage += row + (column - (2 * count1));
            }
        }

        count = count1 = 0;
        outputMessage += '<br>';
    }
}

//Pascal Triangle
function pascalTriangle(rowNumber) {
    let coef = 1;

    for (let row = 0; row < rowNumber; row++) {
        for (let space = 1; space < rowNumber - row; space++) {
            outputMessage += '&nbsp';
        }

        for (let column = 0; column <= row; column++) {
            if (column == 0 || row == 0) {
                coef = 1;
            }
            else {
                coef = coef * (row - column + 1) / column;
            }

            outputMessage += "  " + coef + " ";
        }

        outputMessage += '<br>';
    }


}

//Increasing Number Triangle
function increasingNumberTriangle(rowNumber) {
    let count = 0;

    for (let row = 1; row <= rowNumber; row++) {
        for (let column = 1; column <= row; column++) {
            outputMessage += ++count + '&nbsp';
        }

        outputMessage += '<br>';
    }
}