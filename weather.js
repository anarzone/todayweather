class Weather{
    constructor(city){
        this.city = city
        this.key = '3474e7402d8183780e55df52a85c920d'
    }
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.key}`)
        return await response.json();
    }
    changeLocation(city){
        this.city = city;
    }
}