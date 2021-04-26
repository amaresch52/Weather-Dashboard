var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const feelsLike = document.querySelector(".feelsLike");
const cityId = document.querySelector(".cityId")

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=4d7d6a520004df223294756e935e5261')
.then(response => response.json())
.then(data => {
  cityId.textContent =  data.name;

  tempData = (data.main.temp).toFixed(1);   
  temp.textContent = "Temp: "+ tempData;
  
  wind.textContent = "Wind Speed: "+ data.wind.speed + " mph";
  
  humidity.textContent = "Humidity: "+ data.main.humidity + "%";
  
  feelData = data.main.feels_like 
  feelsLike.textContent = "Feels Like: "+ (feelData).toFixed(1);
  input.value ="";



})

})