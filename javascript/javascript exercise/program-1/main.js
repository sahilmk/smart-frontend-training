document.querySelector('#submit1').addEventListener('click', doOperation);


document.getElementById('select1').addEventListener('click', disable);

function disable(e) {
    operator1 = document.getElementById('select1').value;
    if (operator1 === 'square' || operator1 === 'cube') {
        document.getElementById('input2').style.display = 'none';
        document.querySelector('label[for=input2]').style.display = 'none';
    }
    else {
        document.getElementById('input2').style.display = 'inline';
        document.querySelector('label[for=input2]').style.display = 'inline';
    }
    e.preventDefault();
}



function doOperation(e) {
    operator1 = document.getElementById('select1').value;
    if (operator1 !== 'square' && operator1 !== 'cube') {
        number1 = document.getElementById('input1').value;
        number2 = document.getElementById('input2').value;
        if (number1 != '' && number2 != '') {
            number1 = Number(number1);
            number2 = Number(number2);
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
        } else {
            document.getElementById('show').innerText = 'Plese enter valid input';
        }

    } else {

        number1 = document.getElementById('input1').value;
        if (number1 != '') {
            number1 = Number(number1);
            switch (operator1) {
                case 'square':
                    document.getElementById('show').innerText =
                        `Square of ${number1} is: ${Math.pow(number1, 2)}`;
                    break;
                case 'cube':
                    document.getElementById('show').innerText = `Cube of ${number1} is: ${Math.pow(number1, 3)}`;
                    break;
            }
        }
        else {
            document.getElementById('show').innerText = 'Plese enter valid input';
        }
    }


    number1 = document.getElementById('input1').value = '';
    number2 = document.getElementById('input2').value = '';
    e.preventDefault();
}


