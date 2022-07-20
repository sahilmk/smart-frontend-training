form = document.querySelector('form');
taskinput = document.getElementById('task');
ul = document.querySelector('.collection');
error = document.querySelector('.error');
del = document.querySelector('.delete-item');

form.addEventListener('submit', addtask);
document.addEventListener('click', remove);

function addtask(e) {
    error.innerText = "Please Enter the task";
    error.style.background = 'red';
    error.style.color = 'white';
    error.style.padding = '10px';
    if (taskinput.value == '') {
        error.style.display = 'block';
        console.log(error);
    }
    else {
        error.style.display = 'none';
        li = document.createElement('li');
        li.className = 'collection-item';
        li.innerText = taskinput.value;

        a = document.createElement('a');
        a.className = 'delete-item secondary-content';
        a.innerHTML = '<i class="fa fa-remove"></i>';

        li.appendChild(a);

        ul.appendChild(li);



        var tasks;
        if (localStorage.getItem('taskName') == null) {
            tasks = [];
        }
        else {
            tasks = JSON.parse(localStorage.getItem('taskName'));
        }
        tasks.push(taskinput.value);
        localStorage.setItem('taskName', JSON.stringify(tasks));
    }
    taskinput.value = '';
    e.preventDefault();
}

function remove(e) {
    if (e.target.classList.contains('fa-remove')) {
        if (confirm('Are you sure to remove this item')) {
            e.target.parentElement.parentElement.remove();
            var d = e.target.parentElement.parentElement.innerText;
            tasks = JSON.parse(localStorage.getItem('taskName'));
            indexd = tasks.indexOf(d);
            tasks.splice(indexd, 1);
            localStorage.setItem('taskName', JSON.stringify(tasks));
        }
    }
}