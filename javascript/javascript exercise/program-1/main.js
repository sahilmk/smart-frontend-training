document.querySelector('#submit1').addEventListener('click', doOperation);
document.querySelector('#submit2').addEventListener('click', squareOrQube);


function doOperation(e) {
    number1 = Number(document.getElementById('input1').value);
    number2 = Number(document.getElementById('input2').value);
    operator1 = document.getElementById('select1').value;

    if (!isNaN(number1) && !isNaN(number2)) {
        switch (operator1) {
            case 'addition':
                document.getElementById('show').innerText = `Addition of ${number1} and ${number2} is: ${number1 + number2}`;
                break;
            case 'subtraction':
                document.getElementById('show').innerText = `Subtraction of ${number1} and ${number2} is: ${number1 - number2}`;
                break;

            case 'multiplication':
                document.getElementById('show').innerText = `Multiplication of ${number1} and ${number2} is: ${number1 * number2}`;
                break;

            case 'division':
                if (number2 === 0) {
                    document.getElementById('show').innerText = 'Plese enter valid input';
                }
                else {
                    document.getElementById('show').innerText = `Division of ${number1} and ${number2} is: ${number1 / number2}`;
                }

                break;

            case 'remainder':
                if (number2 === 0) {
                    document.getElementById('show').innerText = 'Plese enter valid input';
                }
                else {
                    document.getElementById('show').innerText = `Remainder of ${number1} and ${number2} is: ${number1 % number2}`;
                }

                break;

        }
    }
    else {
        document.getElementById('show').innerText = 'Plese enter valid input';
    }
    e.preventDefault();
}

function squareOrQube(e) {
    number3 = Number(document.getElementById('input3').value);
    operator2 = document.getElementById('select2').value;

    if (!isNaN(number3)) {
        switch (operator2) {
            case 'square':
                document.getElementById('show').innerText =
                    `Square of ${number3} is: ${Math.pow(number3, 2)}`;
                break;
            case 'cube':
                document.getElementById('show').innerText = `Cube of ${number3} is: ${Math.pow(number3, 3)}`;
                break;
        }
    }
    else {
        document.getElementById('show').innerText = 'Plese enter valid input';
    }

    e.preventDefault();
}
