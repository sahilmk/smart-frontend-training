const showMessage = document.getElementById('show');

const arr = [12.5, 18.9, 20, 13.923, 15.6];
let sum = 0;
let message = `Array: ${arr}`

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

const avg = (sum / arr.length).toFixed(2);

message += `<br> Average of array element: ${avg}`

showMessage.innerHTML = message;

