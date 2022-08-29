document.getElementById('findLarge').addEventListener('click', findLargest);

function findLargest(e) {
    let inputOne = document.getElementById('numberOne').value;
    let inputTwo = document.getElementById('numberTwo').value;
    let inputThree = document.getElementById('numberThree').value;

    hideerror();

    if (validate(inputOne) && validate(inputTwo) && validate(inputThree)) {
        inputOne = Number(inputOne);
        inputTwo = Number(inputTwo);
        inputThree = Number(inputThree);

        let largestNumber = Math.max(inputOne, inputTwo, inputThree);

        //Another logic for finding the largest value among three
        // if (inputOne > inputTwo) {
        //     if (inputThree > inputOne) {
        //         largestNumber = inputThree;
        //     } else {
        //         largestNumber = inputOne;
        //     }
        // } else {
        //     if (inputThree > inputTwo) {
        //         largestNumber = inputThree;
        //     } else {
        //         largestNumber = inputTwo;
        //     }
        // }

        showMessage('#show', `Largest number among the ${inputOne}, ${inputTwo} and ${inputThree} is: ${largestNumber}`);

    } else {
        if (!validate(inputOne)) {
            showMessage('#errorOne', "Value must be number and it can't be empty");
            document.getElementById('numberOne').value = '';
        }
        if (!validate(inputTwo)) {
            showMessage('#errorTwo', "Value must be number and it can't be empty");
            document.getElementById('numberTwo').value = '';
        }
        if (!validate(inputThree)) {
            showMessage('#errorThree', "Value must be number and it can't be empty");
            document.getElementById('numberThree').value = '';
        }
    }

    e.preventDefault();
}

// Show the output and error messages
function showMessage(messageId, message) {
    document.querySelector(messageId).innerText = message;
}

//Validate the inputs
function validate(number) {
    return number !== '' && !isNaN(Number(number));
}

//hide the error
function hideerror() {
    showMessage('#errorOne', '');
    showMessage('#errorTwo', '');
    showMessage('#errorThree', '');
}
