fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=24a7a6de7ed1df1a1aedac65ffd39814
&units=metric`)
.then(response => response.json())
.then(data =>{
    console.log(data);
    console.log(data.main.temp);
    console.log(data.weather[0].description);
    console.log(data.main.humidity);
    console.log(data.main.feels_like);
    weather.textContent = "Temperature: " + data.main.temp + "\u00b0C";
    type.textContent = data.weather[0].description;
    feels.textContent = "Feels Like: " + data.main.feels_like + "\u00b0C";
    humidity.textContent = "Humidity: " + data.main.humidity;
})