document.getElementById('find').addEventListener('click', vowelOrConsonant);
document.getElementById('character').addEventListener('keyup', validateInput);

let valid;

function vowelOrConsonant(e) {
    const character = document.getElementById('character').value;

    if (valid) {
        if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' || character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
            getMessage('show', `${character} is Vowel`);
        } else {
            getMessage('show', `${character} is Consonant`);
        }
    } else {
        getMessage('error', 'Input must be one character alphabet.');
        document.getElementById('show').value = '';
    }

    clearInput();

    e.preventDefault();
}

//Show the output and error messages
function getMessage(messageId = 'error', message = '') {
    document.getElementById(messageId).innerText = message;
}

//Validate input
function validateInput(e) {
    const currentValue = e.target.value;
    const regex = /[a-zA-Z]/;

    if (currentValue !== '' && regex.test(currentValue) && currentValue.length === 1) {
        getMessage();
        valid = true;
    } else {
        if (currentValue !== '') {
            getMessage('error', 'Input must be one character alphabet.');
        } else {
            getMessage();
        }
        valid = false;
    }
}

//Clear the input after clicking the calculate button
function clearInput() {
    document.getElementById('character').value = '';
}   