class UI {
    constructor() {
        this.show = document.getElementById('posts');
        this.title = document.getElementById('title');
        this.body = document.getElementById('body');
        this.post = document.querySelector('.post-submit');
        this.cancel = document.querySelector('.card-form');
        this.idInput = document.getElementById('id');
        this.state = 'add';
    }

    showPost(posts) {
        let allPost = '';

        posts.forEach(i => {
            allPost += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${i.title}</h4>
                        <p class="card-text">${i.body}</p>
                        <a href="#" class="edit card-link" data-id="${i.id}">
                            <i class="fa fa-pencil"></i>
                        </a>
            
                        <a href="#" class="delete card-link" data-id="${i.id}">
                            <i class="fa fa-remove"></i>
                        </a>
                    </div>
                </div>
            `;
        });

        this.show.innerHTML = allPost;
    }

    fillInput(updateId, updatedTitle, updatedBody) {
        this.idInput.value = updateId;
        this.title.value = updatedTitle;
        this.body.value = updatedBody;


        this.stateChange('edit');
    }

    stateChange(state) {
        if (state === 'edit') {
            this.post.innerText = 'Update Post';
            this.post.className = 'post-submit btn btn-warning btn-block';


            if (!(document.querySelector('.post-cancel'))) {
                const cancelButton = document.createElement('button');
                cancelButton.className = 'post-cancel btn btn-light btn-block';
                cancelButton.innerText = 'Cancel Update';

                const card = document.querySelector('.card');
                const formEnd = document.querySelector('.form-end');

                card.insertBefore(cancelButton, formEnd);
            }
        } else {
            this.post.innerText = 'Post It';
            this.post.className = 'post-submit btn btn-primary btn-block';

            if (document.querySelector('.post-cancel')) {
                document.querySelector('.post-cancel').remove();
            }
            this.IdInput = '';
            this.clearInputs();
        }
    }

    clearInputs() {
        this.title.value = '';
        this.body.value = '';
    }

    showAlert(message, alertClass) {
        this.hideAlert();

        const div = document.createElement('div');
        div.className = alertClass;
        div.textContent = message;

        const upperContainer = document.querySelector('.postsContainer');
        const lowerDiv = document.getElementById('posts');

        console.log(div);

        upperContainer.insertBefore(div, lowerDiv);

        setTimeout(() => {
            this.hideAlert();
        }, 3000)
    }

    hideAlert() {
        const presentAlert = document.querySelector('.alert');

        if (presentAlert) {
            presentAlert.remove();
        }
    }
}

export const ui = new UI;