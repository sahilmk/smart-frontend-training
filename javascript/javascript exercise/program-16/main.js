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
            getMessage('#show', `${input.value} is palindrome.`);
        } else {
            getMessage('#show', `${input.value} is not palindrome.`);
        }

        //Remove the error 
        getMessage('#error', '');
        input.value = '';
    } else {
        getMessage('#error', "Value must be integer.");
        getMessage('#show', '');
    }

    e.preventDefault();
}

// Show the output and error messages
function getMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the inputs
function validate(number) {
    let newNumber = Number(number)
    return number !== '' && !isNaN(newNumber) && Number.isInteger(newNumber);
}