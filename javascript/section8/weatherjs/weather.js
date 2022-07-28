class Weather {
    constructor(city, country) {
        this.api_key = 'dcc0b004f922064eb6b47f52a17f2477',
            this.city = city,
            this.country = country
    }

    async getweather() {
        const fdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.api_key}`);

        const weatherd = await fdata.json();
        return weatherd;
    }

    changecity(city, country) {
        this.city = city;
        this.country = country;
    }
}