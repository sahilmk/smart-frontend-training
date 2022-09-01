document.getElementById('find').addEventListener('click', vowelOrConsonant);
document.getElementById('character').addEventListener('keyup', validateInput);

let valid;

function vowelOrConsonant(e) {
    let character = document.getElementById('character').value;

    if (valid) {
        character = character.toUpperCase();
        if (character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
            showMessage('show', `${character} is Vowel`);
        } else {
            showMessage('show', `${character} is Consonant`);
        }
    } else {
        showMessage('error', 'Input must be one character alphabet.');
        document.getElementById('show').value = '';
    }

    clearInput();

    e.preventDefault();
}

//Show the output and error messages
function showMessage(messageId = 'error', message = '') {
    document.getElementById(messageId).innerText = message;
}

//Validate input
function validateInput(e) {
    const currentValue = e.target.value;
    const regex = /[a-zA-Z]/;

    if (currentValue !== '' && regex.test(currentValue) && currentValue.length === 1) {
        showMessage();
        valid = true;
    } else {
        if (currentValue === '') {
            showMessage();
        } else {
            showMessage('error', 'Input must be one character alphabet.');
        }
        valid = false;
    }
}

//Clear the input after clicking the calculate button
function clearInput() {
    document.getElementById('character').value = '';
}   