const showOutput1 = document.getElementById('show-1');
const showOutput2 = document.getElementById('show-2');
const showOutput3 = document.getElementById('show-3');
const showOutput4 = document.getElementById('show-4');
const showOutput5 = document.getElementById('show-5');
const showOutput6 = document.getElementById('show-6');
const showOutput7 = document.getElementById('show-7');
const showOutput8 = document.getElementById('show-8');
const showOutput9 = document.getElementById('show-9');
const showOutput10 = document.getElementById('show-10');

let message1 = '';
let message2 = '';
let message3 = '';
let message4 = '';
let message5 = '';
let message6 = '';
let message7 = '';
let message8 = '';
let message9 = '';
let message10 = '';

//First pyramid
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i + 1; j++) {
        message1 += `*`;
    }
    message1 += `<br>`;
}

//Second pyramid
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i + 1; j++) {
        message2 += `${j + 1}`;
    }
    message2 += `<br>`;
}

//Third pyramid
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i + 1; j++) {
        message3 += `${String.fromCharCode(65 + i)}`;
    }
    message3 += `<br>`;
}

//Fourth pyramid
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
        message4 += `*`;
    }
    message4 += `<br>`;
}

//Fifth pyramid
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
        message5 += `${j + 1}`;
    }
    message5 += `<br>`;
}

//Sixth pyramid
let k1 = 0;
for (let i = 0; i < 5; i++, k1 = 0) {
    for (let space = 0; space < 5 - (i + 1); space++) {
        message6 += '&nbsp';
    }
    while (k1 != (2 * (i + 1)) - 1) {
        message6 += "*";
        k1++;
    }
    message6 += `<br>`;
}

//Seventh pyramid
let k2 = 0, count = 0, count1 = 0;
for (let i = 0; i < 5; i++, k2 = 0) {
    for (let space = 0; space < 5 - (i + 1); space++) {
        message7 += '&nbsp';
        count++;
    }
    while (k2 != (2 * (i + 1)) - 1) {
        if (count <= 5 - 1) {
            message7 += (i + 1) + k2;
            ++count;
        } else {
            ++count1;
            message7 += (i + 1) + (k2 - (2 * count1));
        }

        k2++;
    }
    count = count1 = 0;
    message7 += `<br>`;
}

//Eighth pyramid
let k3 = 0;
for (let i = 4; i >= 0; i--, k3 = 0) {
    for (let space = 0; space < 5 - (i + 1); space++) {
        message8 += '&nbsp';
    }
    while (k3 != (2 * (i + 1)) - 1) {
        message8 += "*";
        k3++;
    }
    message8 += `<br>`;
}

//Ninth pyramid
let coef = 1;
for (let i = 0; i < 6; i++) {
    for (let space = 1; space < 6 - i; space++) {
        message9 += '&nbsp';
    }
    for (let j = 0; j <= i; j++) {
        if (j == 0 || i == 0) {
            coef = 1;
        }
        else {
            coef = coef * (i - j + 1) / j;
        }
        message9 += "  " + coef + " ";
    }
    message9 += `<br>`;
}

//Last pyramid
let count2;
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
        message10 += ++count + '&nbsp';
    }
    message10 += `<br>`;
}


showOutput1.innerHTML = message1;
showOutput2.innerHTML = message2;
showOutput3.innerHTML = message3;
showOutput4.innerHTML = message4;
showOutput5.innerHTML = message5;
showOutput6.innerHTML = message6;
showOutput7.innerHTML = message7;
showOutput8.innerHTML = message8;
showOutput9.innerHTML = message9;
showOutput10.innerHTML = message10;