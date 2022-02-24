const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timeZone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTemperature = document.getElementById('current-temp');
// In this lines we are defining all the elements that we are gonna display dinamically by using JavaScript to fetch the data, and as yoiu can see we are using the method .getElementById

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY ='ce56e661628a3a491f914283b7978839';
setInterval(() =>{
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour // in this line we are using the modulus or remainder in order to get the remainder of the hours past the 12 pm in order to display that infor for the user to see the hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = `${hoursIn12HrFormat}:${minutes} <span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = `${days[day]}, ${date} ${months[month]}`


}, 1000);

getWeatherData()
function getWeatherData (){ // Here we are defining this function which will allow us to acces to the Geolocation of our computer 
    navigator.geolocation.getCurrentPosition((success) =>{
        
        let {latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data =>{
            console.log(data)
            showWeatherData(data);
        })
    })
}

function showWeatherData (data){
    let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;

    currentWeatherItemsEl.innerHTML =
    `<div class="weather-item">
        <div>Humidity</div>
        <div>${humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${pressure}</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed</div>
        <div>${wind_speed}</div>
    </div>
    <div class="weather-item">
        <div>Sunrise</div>
        <div>${window.moment(sunrise*1000).format('HH:mm a')}</div>
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    </div>
    
    `;
}