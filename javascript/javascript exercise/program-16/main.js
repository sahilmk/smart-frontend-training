const input = document.getElementById('number');
document.getElementById('submit').addEventListener('click', findPalindrome);

function findPalindrome(e) {
    if (validate(input.value)) {
        let number = Number(input.value);
        let reminder;
        let reverse = 0;

        //Find the reverse number
        while (number != 0) {
            reminder = number % 10;
            reverse = reverse * 10 + reminder;
            if (number > 0) {
                number = Math.floor(number / 10);
            } else {
                number = Math.ceil(number / 10);
            }
        }

        //Compare the both reverse number and original number.
        if (Number(input.value) === reverse) {
            showMessage('#show', `${input.value} is palindrome.`);
        } else {
            showMessage('#show', `${input.value} is not palindrome.`);
        }

        //Remove the error 
        showMessage('#error', '');
        input.value = '';
    } else {
        showMessage('#error', "Value must be integer.");
        showMessage('#show', '');
    }

    e.preventDefault();
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the inputs
function validate(number) {
    let newNumber = Number(number)
    return number !== '' && !isNaN(newNumber) && Number.isInteger(newNumber);
}