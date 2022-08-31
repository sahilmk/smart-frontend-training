document.getElementById('submit').addEventListener('click', countVowelsAndConsonants);

function countVowelsAndConsonants(e) {
    let string = document.getElementById('string').value;
    showMessage('#error', '');

    if (validateInput(string)) {
        const vowelRegex = /[AEIOU]/;
        const consonantRegex = /[BCDFGHJKLMNPQRSTVWXYZ]/;
        let consonant = 0;
        let vowel = 0;
        string = string.toUpperCase();

        for (let i = 0; i < string.length; i++) {
            if (vowelRegex.test(string[i])) {
                vowel++;
            } else if (consonantRegex.test(string[i])) {
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
    const regex = /^\s+$/
    return inputString !== '' && !regex.test(inputString);
}

//Clear the input after clicking the calculate button
function clearInput() {
    document.getElementById('string').value = '';
}   