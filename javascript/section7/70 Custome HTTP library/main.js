var obj = new easyHTTP;

obj.get('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(err => console.log(err));

const data = {
    country: 'India',
    code: '+91'
}

obj.post('https://jsonplaceholder.typicode.com/posts', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

obj.put('https://jsonplaceholder.typicode.com/posts/3', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

obj.delete('https://jsonplaceholder.typicode.com/posts/5')
    .then(response => console.log(response))
    .catch(err => console.log(err));


