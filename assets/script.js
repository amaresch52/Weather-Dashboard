$(document).ready(function () {

const cityId = document.querySelector(".cityId")

const form = document.querySelector(".search-block");

const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const feelsLike = document.querySelector(".feelsLike");
const date = document.querySelector(".date")

 const citySearch = document.querySelector(".cityName");


form.addEventListener(".cityName", e => {
  e.preventDefault();
  const citySearch = input.value;
})

const apiKey = "4d7d6a520004df223294756e935e5261";
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=4d7d6a520004df223294756e935e5261";

date.textContent = ""
fetch(url)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);



cityId.textContent =  data.name;
temp.textContent = "Temp: "+ data.main.temp;
wind.textContent = "Wind: "+ data.wind.speed;
humidity.textContent = "Humidity: "+ data.main.humidity;
feelsLike.textContent = "Feels Like: "+ data.main.feels_like;

})})