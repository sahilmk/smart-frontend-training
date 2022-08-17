document.getElementById('findFrequency').addEventListener('click', findFrequency);

function findFrequency(e) {
    const string = document.getElementById('string').value;

    showMessagee('#error', '');

    if (validate(string)) {

        let reserveString = string.toLowerCase();
        const stringLength = reserveString.length;
        let freq = [];

        for (let i = 0; i < stringLength; i++) {
            freq[i] = 1;
            for (let j = i + 1; j < stringLength; j++) {
                if (reserveString[i] === reserveString[j]) {
                    freq[i]++;
                    reserveString = setCharAt(reserveString, j, '0');
                }
            }
        }

        let message = `String is: ${string}<br>Characters and their corresponding frequencies ${string}<br>`;
        for (let i = 0; i < stringLength; i++) {
            if (reserveString[i] != ' ' && reserveString[i] !== '0')
                message += `${reserveString[i]}-${freq[i]} <br>`;
        }

        showMessagee('#show', message);
        document.getElementById('string').value = '';
    } else {
        showMessagee('#error', "Please enter string with character");
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

function validate(string) {
    const regex = /^([a-zA-Z])+(([ ]([a-zA-Z]+))+)?$/;
    return string !== '' && regex.test(string);
}