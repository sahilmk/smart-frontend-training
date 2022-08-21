const showAnswer = document.getElementById('show');
document.getElementById('sortbyid').addEventListener('click', sortById);
document.getElementById('sortbyfn').addEventListener('click', sortByFn);
document.getElementById('sortbyln').addEventListener('click', sortByLn);
document.getElementById('sortbygend').addEventListener('click', sortByGend);
document.getElementById('sortbyage').addEventListener('click', sortByAge);
document.getElementById('filterinput').addEventListener('click', filterArray);
document.getElementById('getkey').addEventListener('click', getKey);

//Person object
const person = [
    {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        gender: "Male",
        age: 27
    },
    {
        id: "2",
        firstName: "person1",
        lastName: "surname1",
        gender: "Female",
        age: 25
    },
    {
        id: "4",
        firstName: "Sahil",
        lastName: "Kanjariya",
        gender: "Male",
        age: 20
    },
    {
        id: "3",
        firstName: "person2",
        lastName: "surname2",
        gender: "Male",
        age: 45
    }
]

document.addEventListener('DOMContentLoaded', showInitialArray(person));

//sort array by object id
function sortById() {
    function compare(a, b) {
        if (a.id < b.id) {
            return -1;
        }
        if (a.id > b.id) {
            return 1;
        }
        return 0;
    }

    person.sort(compare);
    showInitialArray(person);
}

//sort array by first name
function sortByFn() {
    function compare(a, b) {
        if (a.firstName < b.firstName) {
            return -1;
        }
        if (a.firstName > b.firstName) {
            return 1;
        }
        return 0;
    }

    person.sort(compare);
    showInitialArray(person);
}

//sort array by last name
function sortByLn() {
    function compare(a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        }
        if (a.lastName > b.lastName) {
            return 1;
        }
        return 0;
    }

    person.sort(compare);
    showInitialArray(person);
}

//sort array by gender
function sortByGend() {
    function compare(a, b) {
        if (a.gender < b.gender) {
            return -1;
        }
        if (a.gender > b.gender) {
            return 1;
        }
        return 0;
    }

    person.sort(compare);
    showInitialArray(person);
}

//sort array by age
function sortByAge() {
    function compare(a, b) {
        if (a.age < b.age) {
            return -1;
        }
        if (a.age > b.age) {
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
                    for (let i = 0; i < 4; i++) {
                        if (person[i].id === filterValue) {
                            output += `Id: ${person[i].id}, Fristname: ${person[i].firstName}, Lastname: ${person[i].lastName}, Gender: ${person[i].gender}, Age: ${person[i].age} <br>`;
                        }
                    }
                    if (output === '') {
                        output = 'Not Found :(';
                    }

                    showAnswer.innerHTML = output;
                    break;
                case 'fname':
                    for (let i = 0; i < 4; i++) {
                        if ((person[i].firstName).toLowerCase() === filterValue) {
                            output += `Id: ${person[i].id}, Fristname: ${person[i].firstName}, Lastname: ${person[i].lastName}, Gender: ${person[i].gender}, Age: ${person[i].age} <br>`;
                        }
                    }
                    if (output === '') {
                        output = 'Not Found :(';
                    }

                    showAnswer.innerHTML = output;
                    break;
                case 'lname':
                    for (let i = 0; i < 4; i++) {
                        if ((person[i].lastName).toLowerCase() === filterValue) {
                            output += `Id: ${person[i].id}, Fristname: ${person[i].firstName}, Lastname: ${person[i].lastName}, Gender: ${person[i].gender}, Age: ${person[i].age} <br>`;
                        }
                    }
                    if (output === '') {
                        output = 'Not Found :(';
                    }

                    showAnswer.innerHTML = output;
                    break;
                case 'gender':
                    for (let i = 0; i < 4; i++) {
                        if ((person[i].gender).toLowerCase() === filterValue) {
                            output += `Id: ${person[i].id}, Fristname: ${person[i].firstName}, Lastname: ${person[i].lastName}, Gender: ${person[i].gender}, Age: ${person[i].age} <br>`;
                        }
                    }
                    if (output === '') {
                        output = 'Not Found :(';
                    }

                    showAnswer.innerHTML = output;
                    break;
                case 'age':
                    for (let i = 0; i < 4; i++) {
                        if (String(person[i].age) === filterValue) {
                            output += `Id: ${person[i].id}, Fristname: ${person[i].firstName}, Lastname: ${person[i].lastName}, Gender: ${person[i].gender}, Age: ${person[i].age} <br>`;
                        }
                    }
                    if (output === '') {
                        output = 'Not Found :(';
                    }

                    showAnswer.innerHTML = output;
                    break;
            }
        } else {
            showError('Please enter a filter value')
        }
    } else {
        showError('Please select the filter type');
    }
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