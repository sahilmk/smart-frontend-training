class easyHTTP {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(function (x) {
                    return x.json();
                })
                .then(function (x) {
                    resolve(x)
                })
                .catch(function (err) {
                    reject(err);
                })
        });
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }
            )
                .then((x) => x.json())
                .then((x) => resolve(x))
                .catch((err) => reject(err))
        });
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(
                url,
                {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }
            )
                .then((x) => x.json())
                .then((x) => resolve(x))
                .catch((err) => reject(err))
        });
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(
                url,
                {
                    method: 'delete',
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            )
                .then((x) => x.json())
                .then((x) => resolve('The Post is deleted.'))
                .catch((err) => reject(err))
        });
    }
}