function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() { }

UI.prototype.addBookToList = function (book) {

    table = document.getElementById('book-list');

    tr = document.createElement('tr');

    tr.innerHTML = ` 
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `

    table.appendChild(tr);

}

UI.prototype.clear = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}


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

            ui = new UI();
            ui.addBookToList(book);
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
        console.log(bn);
        document.querySelector('.delete').parentElement.parentElement.remove();

        const er = document.querySelector('.success');
        er.style.display = 'block';
        er.innerText = `${bn} is removed! `;

        setTimeout(function () {
            document.querySelector('.success').style.display = 'none';
        }, 3000)
    }
})