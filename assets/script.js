var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var humidity = document.querySelector(".humidity");
var feelsLike = document.querySelector(".feelsLike");
var cityId = document.querySelector(".cityId")
//const fiveDay = document.querySelector('.fiveDay');
var weatherForecast = document.querySelector('#weatherForecast');

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=4d7d6a520004df223294756e935e5261')
.then(response => response.json())
.then(data => {
  cityId.textContent =  data.name;

  tempData = (data.main.temp).toFixed(1);   
  temp.textContent = "Temp: "+ tempData + "&degF";
  
  wind.textContent = "Wind Speed: "+ data.wind.speed + " mph";
  
  humidity.textContent = "Humidity: "+ data.main.humidity + "%";
  
  feelData = data.main.feels_like 
  feelsLike.textContent = "Feels Like: "+ (feelData).toFixed(1);
 
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&units=imperial&cnt=5&appid=4d7d6a520004df223294756e935e5261')

.then(response => response.json())
.then(data => {
function forecast(){
  var fiveDay = "";
  $.each(data.list, function(index,val) {
    fiveDay+= "<p>"
    fiveDay+= "<b>Day " + index + "</b>: "
    fiveDay+= val.main.temp + "&degF"
    fiveDay+= "<span> |" + val.weather[0].description + "</span>"
    fiveDay+= "</p>"
    console.log(fiveDay);
    
  });
  weatherForecast.innerHTML=(fiveDay)

};
//function update(){
//document.getElementbyId("weatherForecast").innerHTML=fiveDay;
 forecast();
  console.log(data);
  input.value ="";
}

)

})})