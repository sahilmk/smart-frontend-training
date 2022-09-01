document.querySelector('#submit1').addEventListener('click', doOperation);
document.getElementById('select1').addEventListener('click', disableOneInput);

//Diable the second input when user want calculate the cube and square
function disableOneInput(e) {
    const operator1 = document.getElementById('select1').value;

    if (operator1 === 'square' || operator1 === 'cube') {
        document.getElementById('input2').style.display = 'none';
        document.querySelector('label[for=input2]').style.display = 'none';
    } else {
        document.getElementById('input2').style.display = 'inline';
        document.querySelector('label[for=input2]').style.display = 'inline';
    }

    e.preventDefault();
}



function doOperation(e) {
    const operator1 = document.getElementById('select1').value;

    if (operator1 !== 'square' && operator1 !== 'cube') {
        let number1 = document.getElementById('input1').value;
        let number2 = document.getElementById('input2').value;

        //Calculate the addition, subtraction, division, multiplicatoin and remainder.
        if (number1 !== '' && number2 !== '') {
            //Converting the string to number
            number1 = Number(number1);
            number2 = Number(number2);

            if (!isNaN(number1) && !isNaN(number2)) {
                switch (operator1) {
                    case 'addition':
                        showMessage(`Addition of ${number1} and ${number2} is: ${(number1 + number2).toFixed(2)}`);
                        break;
                    case 'subtraction':
                        showMessage(`Subtraction of ${number1} and ${number2} is: ${(number1 - number2).toFixed(2)}`);
                        break;

                    case 'multiplication':
                        showMessage(`Multiplication of ${number1} and ${number2} is: ${(number1 * number2).toFixed(2)}`);
                        break;

                    case 'division':
                        if (number2 === 0) {
                            showMessage('0 as divisor not allowed please enter  non-zeor value');
                        } else {
                            showMessage(`Division of ${number1} and ${number2} is: ${(number1 / number2).toFixed(2)}`);
                        }
                        break;

                    case 'remainder':
                        if (number2 === 0) {
                            showMessage('Plese enter valid input');
                        } else {
                            showMessage(`Remainder of ${number1} and ${number2} is: ${(number1 % number2).toFixed(2)}`);
                        }
                        break;
                }
            } else {
                showMessage('Only number is allowed, please enter numbers');
            }


        } else {
            showMessage('Please fill the both inputs');
        }

    } else {
        let number1 = document.getElementById('input1').value;

        //Calculate the square and cube
        if (number1 != '') {
            number1 = Number(number1);
            if (!isNaN(number1)) {
                switch (operator1) {
                    case 'square':
                        showMessage(`Square of ${number1} is: ${(Math.pow(number1, 2)).toFixed(2)}`);
                        break;
                    case 'cube':
                        document.getElementById('show').innerText = `Cube of ${number1} is: ${(Math.pow(number1, 3)).toFixed(2)}`;
                        break;
                }
            } else {
                showMessage('Input must be numbers');
            }

        } else {
            showMessage('Plese enter the value');
        }
    }


    //Clear the inputs after user click the submit button
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    e.preventDefault();
}

//Show the error messag and also the output.
function showMessage(message) {
    document.getElementById('show').innerText = message;
}
