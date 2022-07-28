class UI {
    constructor() {
        this.locaion = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        // this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.visibility = document.getElementById('w-visibility');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    show(data) {
        this.locaion.innerText = data.name + ', ' + data.sys.country;
        this.desc.innerText = data.weather[0].description;
        this.string.innerHTML = (data.main.temp - 273.15).toFixed(2) + `&#8451`;
        this.humidity.innerText = `Relative Humidity: ${data.main.humidity}%`;
        this.visibility.innerText = `Visibility: ${data.visibility}m`;
        this.feelsLike.innerHTML = 'Feels Like: ' + (data.main.feels_like - 273.15).toFixed(2) + `&#8451`;
        this.wind.innerHTML = "Wind Speed: " + data.wind.speed + "m/s " + 'Wind Degree: ' + data.wind.deg + ` &#176` + " Wind Gust: " + data.wind.gust + 'mph';

    }
}