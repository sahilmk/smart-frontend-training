data = [
    {
        uname: 'Dr. Homi Bhabha',
        age: 60,
        occupation: 'Nuclear Physicist',
        img: 'https://randomuser.me/portraits/men/82.jpg'
    },
    {
        uname: 'Dr. Vikram Sarabhai',
        age: 46,
        occupation: 'Astronomer',
        img: 'https://randomuser.me/portraits/men/20.jpg'
    },
    {
        uname: 'A.P.J Abdul Kalam',
        age: 83,
        occupation: 'Aerospace Scientist',
        img: 'https://randomuser.me/portraits/men/50.jpg'
    }
]

function userIterator(totalUser) {
    var index = 0;

    return {
        next: function () {
            return index < totalUser.length ? { value: index++, istop: false } : { istop: true };
        }
    }
}

const nextuser = userIterator(data);
document.getElementById('next').addEventListener('click', changeProfile);

changeProfile();

function changeProfile() {
    var user = data[nextuser.next().value];
    if (user !== undefined) {
        document.getElementById('imageDisplay').innerHTML = `
            <img src="${user.img}">
        `;

        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${user.uname}</li>
                <li class="list-group-item">Age: ${user.age}</li>
                <li class="list-group-item">Occupation: ${user.occupation}</li>
            </ul>
        `;
    } else {
        window.location.reload();
    }
}



