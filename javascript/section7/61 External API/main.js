document.querySelector('.get-jokes').addEventListener('click', listen);
var jokescontainer = document.querySelector('.jokes');

function listen(e) {
    let numbers = document.getElementById('number').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${numbers}`, true)

    xhr.onload = function () {

        if (this.status == 200) {

            let response = JSON.parse(this.responseText);

            var st = '';
            if (response.type === 'success') {
                response.value.forEach((i, index) => {
                    st += `
                <li>${index + 1}: ${i.joke}</li>
                `
                });
                jokescontainer.innerHTML = st;
            }
            else {
                jokescontainer.innerHTML = `<li>Something went wrong</li>`;
            }
        }
    }

    xhr.send();


    e.preventDefault();
}