let string = '';

for (let i = 65; i <= 90; i++) {
    string += String.fromCharCode(i) + ' ';
}

document.getElementById('show').innerText = string;

