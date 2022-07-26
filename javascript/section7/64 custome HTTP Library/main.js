const obj = new easyHTTP;

const posts = obj.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
    if (err) {
        console.log(err);
    } else {
        console.log(posts);
    }
});

var data = { title: 'Nothing', body: 'This post is new post' }