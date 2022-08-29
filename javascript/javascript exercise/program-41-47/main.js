const showAnswer = document.getElementById('show');
const sortIdButton = document.getElementById('sortbyid');
sortIdButton.keyName = 'id';
const sortFnButton = document.getElementById('sortbyfn');
sortFnButton.keyName = 'firstName';
const sortLnButton = document.getElementById('sortbyln');
sortLnButton.keyName = 'lastName';
const sortGenderButton = document.getElementById('sortbygend');
sortGenderButton.keyName = 'gender';
const sortAgeButton = document.getElementById('sortbyage');
sortAgeButton.keyName = 'age';

sortIdButton.addEventListener('click', sort);
sortFnButton.addEventListener('click', sort);
sortLnButton.addEventListener('click', sort);
sortGenderButton.addEventListener('click', sort);
sortAgeButton.addEventListener('click', sort);
document.getElementById('filterinput').addEventListener('click', filterArray);
document.getElementById('getkey').addEventListener('click', getKey);



//Person object
const person = [
    {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        gender: "Male",
        age: '27'
    },
    {
        id: "2",
        firstName: "Person1",
        lastName: "Surname1",
        gender: "Female",
        age: '25'
    },
    {
        id: "4",
        firstName: "Sahil",
        lastName: "Kanjariya",
        gender: "Male",
        age: '20'
    },
    {
        id: "3",
        firstName: "Person2",
        lastName: "Surname2",
        gender: "Male",
        age: '45'
    }
]

document.addEventListener('DOMContentLoaded', showInitialArray(person));

//Sort array
function sort(e) {
    const attribute = e.currentTarget.keyName;

    function compare(a, b) {
        if (a[attribute] < b[attribute]) {
            return -1;
        }
        if (a[attribute] > b[attribute]) {
            return 1;
        }
        return 0;
    }

    person.sort(compare);
    showInitialArray(person);
}

//Display the key
function getKey() {
    let message = '';
    const objectKeys = Object.keys(person[0]);
    for (let i = 0; i < 5; i++) {
        message += `Key${i + 1}: ${objectKeys[i]} <br>`
    }
    showAnswer.innerHTML = message;
}

//Apply filter to the array
function filterArray() {
    const radiobutton = document.getElementsByName('filterradio');
    let sortMethod;

    for (let i = 0; i < 5; i++) {
        if (radiobutton[i].checked) {
            sortMethod = radiobutton[i].value;
        }
    }

    if (sortMethod) {
        const filterValue = (document.getElementById('input').value).toLowerCase();
        showError('');
        if (filterValue) {
            let output = '';
            switch (sortMethod) {
                case 'id':
                    filter('id', filterValue);
                    break;
                case 'fname':
                    filter('fname', filterValue);
                    break;
                case 'lname':
                    filter('lname', filterValue);
                    break;
                case 'gender':
                    filter('gender', filterValue);
                    break;
                case 'age':
                    filter('age', filterValue);
                    break;
            }
        } else {
            showError('Please enter a filter value')
        }
    } else {
        showError('Please select the filter type');
    }
}

//Filter the array according to the 
function filter(filterKeyName, filterValue) {
    let output = '';

    for (let i = 0; i < 4; i++) {
        if (person[i][filterKeyName].toLowerCase() === filterValue) {
            output += `Id: ${person[i].id}, Fristname: ${person[i].firstName}, Lastname: ${person[i].lastName}, Gender: ${person[i].gender}, Age: ${person[i].age} <br>`;
        }
    }
    if (output === '') {
        output = 'Not Found :(';
    }

    showAnswer.innerHTML = output;
}

//Display the output
function showInitialArray(person) {
    let string = '';

    for (let i = 0; i < 4; i++) {
        string += `Id: ${person[i].id}, Fristname: ${person[i].firstName}, Lastname: ${person[i].lastName}, Gender: ${person[i].gender}, Age: ${person[i].age}<br>`;
    }

    showAnswer.innerHTML = string;
}

//Show the error message
function showError(message) {
    document.getElementById('error').innerText = message;
}