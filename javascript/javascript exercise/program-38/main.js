const input1 = document.getElementById('string-1');
const input2 = document.getElementById('string-2');
document.getElementById('submit').addEventListener('click', concatenateString);

function concatenateString(e) {
    const string1 = input1.value;
    const string2 = input2.value;
    hideerror();

    if (validate(string1) && validate(string2)) {

        showMessage('#show', `First string: ${string1}<br> Second string: ${string2}<br> Concatenated string: ${string1 + string2}`);
        clearInputs();
    } else {
        if (!validate(string1)) {
            showMessage('#error-1', "Please enter a string.");
        }
        if (!validate(string2)) {
            showMessage('#error-2', "Please enter a string.");
        }
        showMessage('#show', '');
    }

    e.preventDefault();
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerHTML = message;
}

//Validate the inputs
function validate(string) {
    return string !== '';
}

//hide the error
function hideerror() {
    showMessage('#error-1', '');
    showMessage('#error-2', '');
}

//Clear the inputs
function clearInputs() {
    input1.value = '';
    input2.value = '';
}