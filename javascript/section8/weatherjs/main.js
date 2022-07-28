const getstor = new Store();
const citystate = getstor.getdata();
const weather = new Weather(citystate.city, citystate.state);

const ui = new UI();
document.getElementById('w-change-btn').addEventListener('click', change);
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getweather()
        .then(weather => ui.show(weather))
        .catch(err => console.log(err));
}

function change() {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    weather.changecity(city, state);

    getstor.setdata(city, state)

    getWeather();

    $('#locModal').modal('hide');
}

