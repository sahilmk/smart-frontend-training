document.getElementById('findReverse').addEventListener('click', findReverse);

function findReverse(e) {
    const string = document.getElementById('string').value;

    showMessagee('#error', '');

    if (validate(string)) {

        const outputString = reverseString(string);

        showMessagee('#show', `Original string: ${string} <br> Reverse string: ${outputString}`);
        document.getElementById('string').value = '';
    } else {
        showMessagee('#error', "Please enter a string");
        showMessagee('#show', '');
    }

    e.preventDefault();
}

//Recursive function for calculating the factorial of the number.
function reverseString(string) {
    if (string === "") {
        return "";
    } else {
        return reverseString(string.substr(1)) + string.charAt(0);
    }
}

// Show the output and error messages
function showMessagee(messageId, message) {
    document.querySelector(messageId).innerHTML = message;
}

function validate(string) {
    const regex = /^\s+$/;
    return !regex.test(string) && string !== '';
}