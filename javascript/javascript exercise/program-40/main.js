document.getElementById('submit').addEventListener('click', showPatterns);
const numberOfRow = document.getElementById('row');
const showOutput = document.getElementById('show-1');
const selectedPattern = document.getElementById('select');
const error = document.getElementById('error');

let outputMessage = '';

function showPatterns(e) {
    let rowNumber = numberOfRow.value;

    if (validate(rowNumber)) {
        const pyramidType = selectedPattern.value;
        rowNumber = Number(rowNumber);
        outputMessage = '';

        switch (pyramidType) {
            case 'halfstartriangle':
                outputMessage = '<h3>Half * Triangle</h3>';
                halfPyramid(rowNumber, 'star', 'straight');
                break;
            case 'halfdigittriangle':
                outputMessage += '<h3> Half Digit Triangle</h3>';
                halfPyramid(rowNumber, 'digit', 'straight');
                break;
            case 'halfalphabettriangle':
                outputMessage += '<h3> Half Alphabet Triangle</h3>';
                halfAlphabatPyramid(rowNumber);
                break;
            case 'reversehalfstar':
                outputMessage += '<h3> Half Reverse * Triangle</h3>';
                halfPyramid(rowNumber, 'star', 'reverse');
                break;
            case 'reversehalfdigit':
                outputMessage += '<h3> Half Reverse Digit Triangle</h3>';
                halfPyramid(rowNumber, 'digit', 'reverse');
                break;
            case 'startriangle':
                outputMessage += '<h3> Full * Triangle</h3>';
                fullPyramid(rowNumber, 'straight');
                break;
            case 'digittriangle':
                outputMessage += '<h3> Full Digit Triangle</h3>';
                digitPyramid(rowNumber);
                break;
            case 'reversestartriangle':
                outputMessage += '<h3> Full Reverse * Triangle</h3>';
                fullPyramid(rowNumber, 'reverse');
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
    } else {
        error.innerText = 'Please enter positive integer';
    }

    e.preventDefault();
}

//Halft pyramid for digit and *
function halfPyramid(rowNumber, message = 'star', direction = 'straight') {
    for (let row = 1; row <= rowNumber; row++) {
        for (let column = 1; column <= (direction === 'straight' ? row : ((rowNumber - row) + 1)); column++) {
            outputMessage += (message === 'star' ? '*' : column);
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
function fullPyramid(rowNumber, direction = 'straight') {
    for (let row = 1; row <= rowNumber; row++) {
        outputMessage += '&nbsp'.repeat(Number(direction === 'straight' ? rowNumber - row : (row - 1)) * 3);

        for (let column = 0; column < Number(direction === 'straight' ? ((2 * row) - 1) : ((2 * (rowNumber - row)) + 1)); column++) {
            outputMessage += " *";
        }

        outputMessage += '<br>';
    }
}

//Full pyramid of digit
function digitPyramid(rowNumber) {
    let count = 0, count1 = 0;

    for (let row = 1; row <= rowNumber; row++) {
        outputMessage += '&nbsp'.repeat((rowNumber - row) * 2);

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
        outputMessage += '&nbsp'.repeat((rowNumber - row));

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

//Validate the input
function validate(number) {
    return number !== '' && Number.isInteger(Number(number)) && Number(number) > 0;
}