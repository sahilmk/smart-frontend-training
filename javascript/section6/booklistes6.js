class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {

    addBookToList(book) {
        let table = document.getElementById('book-list');

        let tr = document.createElement('tr');

        tr.innerHTML = ` 
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `

        table.appendChild(tr);
    }

    clear() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

}

class store {
    static getbooks() {
        let book;
        if (localStorage.getItem('books') === null) {
            book = [];
        } else {
            book = JSON.parse(localStorage.getItem('books'));
        }
        return book;
    }
    static sotrebooks(book) {
        const books = store.getbooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static displaybooks() {
        const books = store.getbooks();

        books.forEach(i => {
            const ui = new UI();
            ui.addBookToList(i);
        });
    }
    static removebook(isbn) {
        console.log(isbn);
        const books = store.getbooks();
        books.forEach(function (i, index) {
            if (i.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}


document.addEventListener('DOMContentLoaded', store.displaybooks);


document.getElementById('book-form').addEventListener('submit',
    function (e) {
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;

        if (title === '' || author === '' || isbn === '') {
            const er = document.querySelector('.error');
            er.style.display = 'block';
            er.innerText = 'Please enter valid input';

            setTimeout(function () {
                document.querySelector('.error').style.display =
                    'none';
            }, 3000)
        }
        else {
            const book = new Book(title, author, isbn);

            let ui = new UI();
            ui.addBookToList(book);
            store.sotrebooks(book);
            ui.clear();

            const er = document.querySelector('.success');
            er.style.display = 'block';
            er.innerText = `${title} is Added`;

            setTimeout(function () {
                document.querySelector('.success').style.display = 'none';
            }, 3000)
        }


        e.preventDefault();
    });

document.getElementById('book-list').addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        let bn = document.querySelector('.delete').parentElement.parentElement.firstElementChild.innerText;
        store.removebook(document.querySelector('.delete').parentElement.previousElementSibling.textContent);
        document.querySelector('.delete').parentElement.parentElement.remove();


        const er = document.querySelector('.success');
        er.style.display = 'block';
        er.innerText = `${bn} is removed! `;

        setTimeout(function () {
            document.querySelector('.success').style.display = 'none';
        }, 3000)
    }
})