// async function getdata() {
//     const promise = new Promise((resolve) => {
//         resolve('hello')
//     })

//     const re = await promise;
//     return re;
// }


// getdata()
//     .then((x) => console.log(x))





async function getdata(url) {
    const data = await fetch(url)

    const realdata = await data.json();
    return realdata
}


getdata('https://jsonplaceholder.typicode.com/posts')
    .then((x) => console.log(x))