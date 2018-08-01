class UI{
    constructor(){
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.details = document.getElementById('w-details')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.pressure = document.getElementById('w-pressure')
        this.sunRiseSet = document.getElementById('w-sun-rise-set')
        this.wind = document.getElementById('w-wind')
    }

    paint(data){
        this.location.textContent = data.name
        this.desc.textContent = data.weather[0].description
        this.icon.setAttribute('src',`http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
        this.string.innerHTML = `${Math.round(data.main.temp)} &#8451`
        this.humidity.innerHTML = `Humidity ${data.main.humidity}%`
        this.pressure.innerHTML = `Pressure ${data.main.pressure}hpa`
        this.sunRiseSet.innerHTML = this.getTime('Sun Rise',data.sys.sunrise) + '/' + this.getTime('Sun Set',data.sys.sunset)
        this.wind.innerHTML = `${this.convertWindSpeed(data.wind.speed)} km/h`
        console.log(data)
    }
    convertTemp(temp){
        return {
            min: temp === 'C' ? temp.Minimum.Value : ((temp.Minimum.Value - 32)*5/9).toFixed(1),
            max: temp.Maximum.Unit === 'C' ? temp.Maximum.Value : ((temp.Maximum.Value - 32)*5/9).toFixed(1)
        }
    }
    getTime(riseOrSet,epochTime){
        const today  = new Date(epochTime * 1000)
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        const ampm = hours > 12 ? 'pm' : 'am'    
        hours %= 12;
        return `${riseOrSet} ${hours}:${minutes} ${ampm}`
    }
    convertWindSpeed(speed){
        return speed*3600/1000
    }
}