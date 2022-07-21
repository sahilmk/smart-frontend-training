form = document.getElementById('loan-form');

amount = document.getElementById('amount');
interest = document.getElementById('interest');
year = document.getElementById('years');

monthlyp = document.getElementById('monthly-payment');
totalp = document.getElementById('total-payment');
totali = document.getElementById('total-interest');

form.addEventListener('submit', function (e) {
    document.getElementById('results').style.display = 'none';

    document.getElementById('loading').style.display = 'block';

    setTimeout(submit, 2000);
    e.preventDefault();
});




function submit() {
    const lamount = parseFloat(amount.value);
    const minterest = parseFloat(interest.value) / 100 / 12;
    const month = parseFloat(year.value) * 12;

    const x = Math.pow(1 + minterest, month);
    const monthlypayment = (lamount * x * minterest) / (x - 1);

    if (isFinite(monthlypayment)) {
        monthlyp.value = monthlypayment.toFixed(2);
        totalp.value = (monthlypayment * month).toFixed(2);
        totali.value = ((monthlypayment * month) - lamount).toFixed(2);
        document.getElementById('results').style.display = 'block';

        document.getElementById('loading').style.display = 'none';


    }
    else {
        document.getElementById('results').style.display = 'none';

        document.getElementById('loading').style.display = 'none';
        const div = document.createElement('div');

        div.className = 'alert alert-danger';

        div.innerText = "Please check your numbers"

        const card = document.querySelector('.card');
        const heading = document.querySelector('.heading');

        card.insertBefore(div, heading);

        setTimeout(clearError, 3000);
    }
}

function clearError() {
    document.querySelector('.alert').remove();
}