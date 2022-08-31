document.getElementById('submit').addEventListener('click', showLength);

function showLength(e) {
    const string = document.getElementById('string').value;

    showMessagee('#error', '');

    if (validate(string)) {
        showMessagee('#show', `Length of string: ${string.length}`);
        document.getElementById('string').value = '';

    } else {
        showMessagee('#error', "Please entar a string");
        showMessagee('#show', '');
    }

    e.preventDefault();
}

// Show the output and error messages
function showMessagee(messageId, message) {
    document.querySelector(messageId).innerHTML = message;
}

//Validation
function validate(string) {
    return string !== '';
}