const posts = [
    { number: 1, post: 'This is post 1' },
    { number: 2, post: 'This is post 2' }
]

function addpost(post) {
    return new Promise(function (resolve, reject) {
        let err = false;
        if (!err) {
            setTimeout(() => {
                posts.push(post)
                resolve();
            }, 2000);
        } else {
            reject('Something went wrong!');
        }
    })
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

addpost({ number: 3, post: 'This is post 3' }).then(getpost).catch(function (i) {
    console.log(i);
});