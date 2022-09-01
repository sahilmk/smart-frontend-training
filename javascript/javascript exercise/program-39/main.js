document.getElementById('submit').addEventListener('click', sortString);
const input = document.getElementById('string');

function sortString(e) {
    let string = input.value;
    let arr = string.split(/[\,]\s/);
    showMessage('#error', '');

    if (validate(arr) && arr.length > 0) {
        let message = `Original String:<br> ${string}<br> Sorted string:<br> `;

        arr = arr.sort(function (a, b) {
            return a.localeCompare(b);

        });

        for (let i = 0; i < arr.length; i++) {
            message += `${arr[i]} `;
            // message.join(arr[i]);
        }

        showMessage('#show', message);
        input.value = '';

    } else {
        showMessage('#error', "Please entar a string with atleast two comma separated words, after comma only one space is allowed ");
        showMessage('#show', '');
    }

    e.preventDefault();
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerHTML = message;
}

//Validation
function validate(arr) {
    const regex = /^\s+$/;
    const regexTwo = /\s+[\w]+/;

    for (let i = 0; i < arr.length; i++) {
        if (string === '' || regex.test(arr[i]) || regexTwo.test(arr[i])) {
            return false;
        }
    }

    return true;
}