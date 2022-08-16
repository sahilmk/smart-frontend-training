document.getElementById('findLarge').addEventListener('click', findLargest);

function findLargest(e) {
    let number1 = document.getElementById('number-1').value;
    let number2 = document.getElementById('number-2').value;
    let number3 = document.getElementById('number-3').value;

    hideerror();

    if (validate(number1) && validate(number2) && validate(number3)) {
        number1 = Number(number1);
        number2 = Number(number2);
        number3 = Number(number3);

        let largestNumber = Math.max(number1, number2, number3);

        //Another logic for finding the largest value among three
        // if (number1 > number2) {
        //     if (number3 > number1) {
        //         largestNumber = number3;
        //     } else {
        //         largestNumber = number1;
        //     }
        // } else {
        //     if (number3 > number2) {
        //         largestNumber = number3;
        //     } else {
        //         largestNumber = number2;
        //     }
        // }

        showMessage('#show', `Largest number among the ${number1}, ${number2} and ${number3} is: ${largestNumber}`);

    } else {
        if (!validate(number1)) {
            showMessage('#error-1', "Value must be number and it can't be empty");
            document.getElementById('number-1').value = '';
        }
        if (!validate(number2)) {
            showMessage('#error-2', "Value must be number and it can't be empty");
            document.getElementById('number-2').value = '';
        }
        if (!validate(number3)) {
            showMessage('#error-3', "Value must be number and it can't be empty");
            document.getElementById('number-3').value = '';
        }
    }

    e.preventDefault();
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the inputs
function validate(number) {
    return number !== '' && !isNaN(Number(number));
}

//hide the error
function hideerror() {
    showMessage('#error-1', '');
    showMessage('#error-2', '');
    showMessage('#error-3', '');
}
