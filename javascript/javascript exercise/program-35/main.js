document.getElementById('submit').addEventListener('click', vowelandConsonant);

function vowelandConsonant(e) {
    let string = document.getElementById('string').value;
    showMessage('#error', '');

    if (validateInput(string)) {
        string = string.toUpperCase();
        let consonant = 0;
        let vowel = 0;

        for (let i = 0; i < string.length; i++) {
            if (string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U') {
                vowel++;
            } else if (string[i] !== ' ') {
                consonant++;
            }
        }

        showMessage('#show', `String: ${string} <br> Total number of consonants: ${consonant} <br> Total number of vowel: ${vowel}`);
        clearInput();
    } else {
        showMessage('#error', 'Input must be one character alphabet.');
        showMessage('#show', '');
    }
    e.preventDefault();
}

//Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerHTML = message;
}

//Validate input
function validateInput(inputString) {
    const regex = /^([a-zA-Z])+(([ ]([a-zA-Z]+))+)?$/;
    return inputString !== '' && regex.test(inputString);
}

//Clear the input after clicking the calculate button
function clearInput() {
    document.getElementById('string').value = '';
}   