const obj = new easyHTTP;

const posts = obj.get('https://jsonplaceholder.typicode.com/posts/1', function (err, posts) {
    if (err) {
        console.log(err);
    } else {
        console.log(posts);
    }
});


var data = { title: 'Nothing', body: 'This post is new post' }

const posts1 = obj.post('https://jsonplaceholder.typicode.com/posts', data, function (err, posts) {
    if (err) {
        console.log(err);
    } else {
        console.log(posts);
    }
});

const posts2 = obj.put('https://jsonplaceholder.typicode.com/posts/5', data, function (err, posts) {
    if (err) {
        console.log(err);
    } else {
        console.log(posts);
    }
})

const posts3 = obj.delete('https://jsonplaceholder.typicode.com/posts/2', function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
})