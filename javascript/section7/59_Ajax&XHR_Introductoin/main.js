document.getElementById('button').addEventListener('click', flesh);

function flesh() {
    const xhr = new XMLHttpRequest();
    console.log('READYSTATE: ' + xhr.readyState + ' STATUS: ' + xhr.status);

    xhr.open('GET', 'hello.txt', true);
    console.log('READYSTATE: ' + xhr.readyState + ' STATUS: ' + xhr.status);


    xhr.onreadystatechange = function () {
        console.log('READYSTATE: ' + xhr.readyState + ' STATUS: ' + this.status);
        if (this.status === 200 && this.readyState === 4) {
            document.getElementById('output').innerText = this.responseText;
        }
    }

    xhr.onerror = function () {
        console.log('This is error');
    };

    // xhr.onload = function () {
    //     console.log('STAUS: ' + xhr.readyState);
    //     if (this.status === 200) {
    //         console.log('This text is coming from the local file: ' + this.responseText);
    //     }
    // }

    xhr.send();
}

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

// ready Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready