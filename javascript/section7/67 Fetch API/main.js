document.getElementById('button1').addEventListener('click', gettext);
document.getElementById('button2').addEventListener('click', getjson);
document.getElementById('button3').addEventListener('click', getapi);

function gettext() {
    fetch('hello.txt').then((x) => x.text()).
        then(x => document.getElementById('output').innerText = x).
        catch(err => console.log(err))
}

function getjson() {
    fetch('customers.json').then((x) => x.json()
    ).then(x => {
        let st = '';
        x.forEach(i => {
            st += `<li>The country code of ${i.country} is ${i.code}</li>`;
        });
        document.getElementById('output').innerHTML = st;
    }).catch(err => console.log(err))
}


function getapi() {
    fetch('https://api.github.com/users').then((x) => x.json()
    ).then(x => {
        let st = '';
        x.forEach((i, index) => {
            st += `<li>${index + 1}) User Name: ${i.login}</li>`;
        });
        document.getElementById('output').innerHTML = st;
    }).catch(err => console.log(err))
}
