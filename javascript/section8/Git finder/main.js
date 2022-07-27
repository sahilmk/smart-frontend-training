const input = document.getElementById('view');


const github = new Github;
const ui = new UI;

input.addEventListener('click', find);

function find() {
    const invalue = document.getElementById('searchUser').value;
    if (invalue !== '') {
        github.finduser(invalue)
            .then((x) => {
                if (x.userdata.message === 'Not Found') {
                    ui.showalert('User is not found! ', 'alert alert-danger');
                } else {
                    ui.showdata(x.userdata);
                    ui.showrepo(x.userrepo);
                    invalue.value = '';
                }
            })
    } else {
        ui.showalert('Please enter the username', 'alert alert-danger');
    }
}