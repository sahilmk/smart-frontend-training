class easyHTTP {
    async get(url) {
        const data = await fetch(url);

        const rdata = await data.json();
        return rdata;
    }

    async post(url, data) {
        const pdata = await fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )

        const rdata = await pdata.json()
        return rdata;
    }

    async put(url, data) {
        const pdata = await fetch(
            url,
            {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )

        const rdata = await pdata.json();
        return rdata;
    }

    async delete(url) {
        const pdata = await fetch(
            url,
            {
                method: 'delete',
                headers: {
                    'Content-type': 'application/json'
                }
            }
        )

        const rdata = await 'posts is deleted';
        return rdata;
    }
}

export const http = new easyHTTP();