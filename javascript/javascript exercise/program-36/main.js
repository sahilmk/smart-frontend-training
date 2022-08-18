document.getElementById('submit').addEventListener('click', showAlphabat);

function showAlphabat(e) {
    const string = document.getElementById('string').value;
    let secondString = string;

    showMessagee('#error', '');

    if (validate(secondString)) {
        const regex = /[a-zA-Z]/;

        for (let i = 0; i < string.length; i++) {
            if (!regex.test(string[i])) {

                secondString = secondString.replace(string[i], '');
            }
        }

        showMessagee('#show', `Before removing character except alphabat from string:<br> ${string}<br><br> After removing character except alphabat from string:<br> ${secondString}`);
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