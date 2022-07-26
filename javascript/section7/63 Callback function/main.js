const posts = [
    { number: 1, post: 'This is post 1' },
    { number: 2, post: 'This is post 2' }
]

function addpost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback();
    }, 2000);
}

function getpost() {
    setTimeout(() => {
        let st = '';
        posts.forEach(i => {
            st += `<li>${i.number}: ${i.post}</li>`
        });

        document.body.innerHTML = st;
    }, 1000);
}

addpost({ number: 3, post: 'This is post 3' }, getpost);