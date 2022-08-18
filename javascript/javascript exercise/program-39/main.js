document.getElementById('submit').addEventListener('click', sortString);
const input = document.getElementById('string');

function sortString(e) {
    let string = input.value;

    showMessage('#error', '');

    if (validate(string)) {
        let message = `Original String:<br> ${string}<br> Sorted string:<br> `;
        let arr = string.split(' ');
        arr = arr.sort();
        for (let i = 0; i < arr.length; i++) {
            message += `${arr[i]} `;
        }
        showMessage('#show', message);
        input.value = '';

    } else {
        showMessage('#error', "Please entar a string with atleast two space separated words");
        showMessage('#show', '');
    }

    e.preventDefault();
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerHTML = message;
}

//Validation
function validate(string) {
    const testArray = string.split(' ');
    return string !== '' && testArray.length > 1;
}