const storage = new Store()
let myCity = storage.getCity();
const weather = new Weather(myCity);
const ui = new UI();


const getWeather = ()=>{
    weather.getWeather()
    .then(data =>{
        ui.paint(data)
    }).catch(err=>{

    })
}

document.addEventListener('DOMContentLoaded',getWeather)

document.getElementById('w-change').addEventListener('click',()=>{
    const city = document.getElementById('city').value;
    
    // change location
    weather.changeLocation(city);

    // save city to local Storage
    storage.saveCity(city)

    // get and display weather
    getWeather();

    // close modal
    $('#locModal').modal('hide');
})