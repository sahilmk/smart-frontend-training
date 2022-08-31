const inputOne = document.getElementById('stringOne');
const inputTwo = document.getElementById('stringTwo');
document.getElementById('submit').addEventListener('click', concatenateString);

function concatenateString(e) {
    const string1 = inputOne.value;
    const string2 = inputTwo.value;
    hideerror();

    if (validate(string1) && validate(string2)) {
        showMessage('#show', `First string: ${string1}<br> Second string: ${string2}<br> Concatenated string: ${string1 + string2}`);

        clearInputs();
    } else {
        if (!validate(string1)) {
            showMessage('#errorOne', "Please enter a string.");
        }
        if (!validate(string2)) {
            showMessage('#errorTwo', "Please enter a string.");
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
    const regex = /^\s+$/
    return string !== '' && !regex.test(string);
}

//hide the error
function hideerror() {
    showMessage('#errorOne', '');
    showMessage('#errorTwo', '');
}

//Clear the inputs
function clearInputs() {
    inputOne.value = '';
    inputTwo.value = '';
}