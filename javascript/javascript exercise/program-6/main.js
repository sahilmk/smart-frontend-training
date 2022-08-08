document.getElementById('findLarge').addEventListener('click', findLargest);

function findLargest(e) {
    let number1 = document.getElementById('number-1').value;
    let number2 = document.getElementById('number-2').value;
    let number3 = document.getElementById('number-3').value;

    if (validate(number1) && validate(number2) && validate(number3)) {
        number1 = Number(number1);
        number2 = Number(number2);
        number3 = Number(number3);
        let largestNumber;

        if (number1 > number2) {
            if (number3 > number1) {
                largestNumber = number3;
            } else {
                largestNumber = number1;
            }
        } else {
            if (number3 > number2) {
                largestNumber = number3;
            } else {
                largestNumber = number2;
            }
        }

        getMessage('#show', `Largest number among the ${number1}, ${number2} and ${number3} is: ${largestNumber}`)

    } else {
        if (!validate(number1)) {
            getMessage('#error-1', "Value must be number and it can't be empty");
            document.getElementById('number-1').value = '';

            setTimeout(function () {

            }, 3000)
        }
        if (!validate(number2)) {
            getMessage('#error-2', "Value must be number and it can't be empty");
            document.getElementById('number-2').value = '';
        }
        if (!validate(number3)) {
            getMessage('#error-3', "Value must be number and it can't be empty");
            document.getElementById('number-3').value = '';
        }
    }

    e.preventDefault();
}

// Show the output and error messages
function getMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

function validate(number) {
    return number !== '' && !isNaN(Number(number));
}
