var city =''
function getCity(){
    inpCity= document.getElementById('search');
    city = inpCity.value;
    weatherData()
}

async function weatherData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d870156a6aa9a2fc158041714781b23f`);
        const data = await response.json();
        var temp = parseInt(data.main['temp'] - 273.15);
        var temp_min = (data.main['temp_min'] - 273.15).toFixed(0);
        var temp_max = (data.main['temp_max'] - 273.15).toFixed(0);
        const timeData = data.dt;
        const dateObj = new Date(timeData*1000);
        const date = dateObj.toLocaleDateString();
        const time = dateObj.toLocaleTimeString();
        const year = dateObj.getFullYear();
        let cart = `<div id="details">
        <h2>${data.name} , ${data.sys['country']}</h2>
        <p>${date} ${time} ${year}</p>
        <h1>${temp} °C</h1>
        <h2>${data.weather[0]['main']}</h2>
        <h4>${temp_min} °C / ${temp_max} °C</h4>
        </div>`;
        document.getElementById('data').innerHTML = await cart
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
// async function weatherData(city="lucknow"){
//     try{
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d870156a6aa9a2fc158041714781b23f`)
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// weatherData("Mumbai")