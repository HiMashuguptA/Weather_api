var city = "Delhi"
var cityName = document.getElementById("city")
var date = document.getElementById("date")
var celcius = document.getElementById("celcius")
var condition = document.getElementById("condition")
var minMaxTemp = document.getElementById("minmaxtemp")
function getCity(){
    var cityName = document.getElementById("search").value
    // console.log(cityName);
    city = cityName;
    console.log(city);
    weatherData()
}
getCity()
async function weatherData(){
    const currentDate = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d870156a6aa9a2fc158041714781b23f`);
    let data = await response.json()
    console.log(data);
    cityName.innerText = city +"," + data.sys.country
    celcius.innerText = Math.floor(data.main.temp - 273.15) + "°C"
    condition.innerHTML = data.weather[0].description
    minMaxTemp.innerHTML = Math.floor(data.main.temp_max - 273.15) + "°C" + "/" + Math.floor(data.main.temp_min - 273.15) + "°C"
    date.innerHTML = formattedDate
}
