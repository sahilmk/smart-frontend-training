out1 = document.getElementById('customer');
document.getElementById('button1').addEventListener('click', getcustomer);

out2 = document.getElementById('customers');
document.getElementById('button2').addEventListener('click', getcustomers);

function getcustomer() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {
        const data = JSON.parse(this.responseText);

        let html = `
            <ul>
                <li>Country Name: ${data.country}</li>
                <li>Country Code: ${data.code}</li>
            </ul>
        `
        out1.innerHTML = html;
    }

    xhr.send();
}

function getcustomers() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);

    xhr.onload = function () {
        const data = JSON.parse(this.responseText);
        var st = '';

        data.forEach(i => {
            st += `
            <ul>
                <li>Country Name: ${i.country}</li>
                <li>Country Code: ${i.code}</li>
            </ul>
        `
        });


        out2.innerHTML = st;
    }

    xhr.send();
}

