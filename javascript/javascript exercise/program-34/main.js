document.getElementById('findFrequency').addEventListener('click', findFrequencyOfElement);

function findFrequencyOfElement(e) {
    const string = document.getElementById('string').value;

    showMessagee('#error', '');

    if (validate(string)) {

        let lowerCaseString = string.toLowerCase();
        const stringLength = lowerCaseString.length;
        const frequency = [];

        for (let i = 0; i < stringLength; i++) {
            frequency[i] = 1;
            for (let j = i + 1; j < stringLength; j++) {
                if (lowerCaseString[i] === lowerCaseString[j]) {
                    frequency[i]++;
                    lowerCaseString = setCharAt(lowerCaseString, j, ' ');
                }
            }
        }

        let message = `String is: ${string}<br>Characters and their corresponding frequencies ${string}<br>`;
        for (let i = 0; i < stringLength; i++) {
            if (lowerCaseString[i] != ' ')
                message += `${lowerCaseString[i]}-${frequency[i]} <br>`;
        }

        showMessagee('#show', message);
        document.getElementById('string').value = '';
    } else {
        showMessagee('#error', "Please enter string");
        showMessagee('#show', '');
    }

    e.preventDefault();
}

function setCharAt(changeString, index, replacement) {
    if (index > (changeString.length - 1)) {
        return changeString;
    }

    return changeString.substring(0, index) + replacement + changeString.substring(index + 1);
}

// Show the output and error messages
function showMessagee(messageId, message) {
    document.querySelector(messageId).innerHTML = message;
}

//Validate string
function validate(string) {
    const regex = /^\s+$/;
    return string !== '' && !regex.test(string);
}