const searchInput=document.querySelector('.weather_search input');
const searchButton=document.querySelector('.weather_search button');


async function getWeather(city){
    var res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=56a8be933b08a8807b510ba26ec17285`);
    var data=await res.json();
    console.log(data);
    document.querySelector(".weather_city").innerHTML=(data.name);
    document.querySelector(".weather_temperature").innerHTML=Math.round((data.main.temp-273.5))+"&#176"+"C";
    document.querySelector(".weather_forecast").innerHTML=(data.weather[0].main);
    document.querySelector(".weatherTemp_minmax .min").innerHTML=Math.round((data.main.temp_min-273.5))+"&#176"+"C";
    document.querySelector(".weatherTemp_minmax .max").innerHTML=Math.round((data.main.temp_max-273.5))+"&#176"+"C";
    document.querySelector(".weather_realfeel").innerHTML=Math.round((data.main.feels_like-273.5))+"&#176"+"C";
    document.querySelector(".weather_humidity").innerHTML=(data.main.humidity)+"%";
    document.querySelector(".weather_wind").innerHTML=(data.wind.speed)+"m/s";
    document.querySelector(".weather_pressure").innerHTML=(data.main.pressure)+" "+"hPa";
}
searchButton.addEventListener('click',()=>{
    getWeather(searchInput.value);
})
