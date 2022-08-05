import { http } from "./easyhttp";
import { ui } from "./ui";

document.addEventListener('DOMContentLoaded', getData);
ui.post.addEventListener('click', addPost);
ui.show.addEventListener('click', deletePost);
ui.show.addEventListener('click', editPost);
ui.cancel.addEventListener('click', cancelPost);


function getData() {
    http.get('http://localhost:3000/posts').then((posts) => {
        ui.showPost(posts);
    }).catch((err) => console.log(err));
}

function addPost(e) {
    const title = ui.title.value;
    const body = ui.body.value;

    if (title === '' || body === '') {
        ui.showAlert('Please enter the all necessary details.', 'alert alert-danger')
    } else {
        const data = {
            title,
            body
        }
        const id = document.getElementById('id').value;
        if (id !== '') {
            http.put(`http://localhost:3000/posts/${id}`, data)
                .then(replay => {
                    ui.stateChange('add');
                    ui.showAlert('Post is updated', 'alert alert-success');
                    getData();
                }).catch(err => console.log(err));


        } else {
            http.post(`http://localhost:3000/posts`, data)
                .then(replay => {
                    ui.showAlert('Post is added', 'alert alert-success');
                    ui.clearInputs();
                    getData();
                }).catch(err => console.log(err));
        }

    }

    e.preventDefault();
}

function deletePost(e) {
    if (e.target.classList.contains('fa-remove')) {
        const postId = e.target.parentElement.dataset.id;
        http.delete(`http://localhost:3000/posts/${postId}`)
            .then(() => {
                ui.showAlert('Post is removed', 'alert alert-danger');
                getData();
            })
            .catch(err => console.log(err));
    }
    e.preventDefault();
}

function editPost(e) {
    if (e.target.classList.contains('fa-pencil')) {
        const id = e.target.parentElement.dataset.id;
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        const body = e.target.parentElement.previousElementSibling.textContent;

        ui.fillInput(id, title, body);
    }
    e.preventDefault();
}

function cancelPost(e) {
    if (e.target.classList.contains('post-cancel')) {
        ui.stateChange('add');
    }
    e.preventDefault();
}