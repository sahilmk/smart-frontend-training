document.getElementById('name').addEventListener('blur', checkName);
document.getElementById('zip').addEventListener('blur', checkZip);
document.getElementById('email').addEventListener('blur', checkEmail);
document.getElementById('phone').addEventListener('blur', checkPhone);

function checkName() {
    const uname = document.getElementById('name');
    const reg = /^[a-zA-Z\s]{2,50}$/;
    if (!reg.test(uname.value)) {
        uname.classList.add('is-invalid');
    } else {
        uname.classList.remove('is-invalid');
    }
}

function checkZip() {
    const zip = document.getElementById('zip');
    const reg = /^[0-9]{6}$/;
    if (!reg.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}


function checkEmail() {
    const email = document.getElementById('email');
    const reg = /^([a-zA-Z0-9\.(\!\#\$\%\^\&\*)?]+)@([a-zA-Z0-9(\!\#\$\%\^\&\*)?]+)\.([a-zA-Z]{2,4})$/;
    if (!reg.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function checkPhone() {
    const phone = document.getElementById('phone');
    const reg = /^([0-9]{5})\s?([0-9]{5})$/;
    if (!reg.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}