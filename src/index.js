function updateWeather(response) {
    //update the weather app with the response data
    let temperature=Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector('.weather-app-temperature');
    let descriptionElement = document.querySelector('#description');
    let cityElement = document.querySelector('.weather-app-city');
     //let humidity = response.data.temperature.humidity; // ✅ humidity from API
     //let wind = Math.round(response.data.wind.speed)
    let humidityElement=document.querySelector('#humidity');
    let windElement=document.querySelector('#wind');
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
        let iconElement = document.querySelector("#icon");

    timeElement.innerHTML = formatDate(date);
    temperatureElement.innerHTML = (Math.round(temperature));
    cityElement.innerHTML=response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
    windElement.innerHTML=`${response.data.wind.speed}km/h`;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

getForecast(response.data.city);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

function searchCity(city) {
      //call API
      let apiKey = "ad28f3a0557d8t5f574o89b184356e5a";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(updateWeather);
}

function getForecast(city){
  let apiKey = "ad28f3a0557d8t5f574o89b184356e5a";
  let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayForecast);

}
function formatDate(timestamp){
  let date=new Date(timestamp*1000);
  let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
return days[date.getDay()];
}

function handleSearch(event) {
    event.preventDefault();
    let searchInput = document.querySelector('#search-input');
    
    searchCity(searchInput.value);

  //Search For city

}
//js template for forecast
function displayForecast(response){
  let forecastHTML="";


  response.data.daily.forEach(function(day,index){

    if (index<5){

   
    forecastHTML=forecastHTML+`

            <div class="weather-forecast-day">
            <div class="weather-forecast-date">${formatDate(day,index)}</div>
            <img src="${day.condition.icon_url}" class="weather-forecast-icon" />
            <div class="weather-forecast-temperatures">
              <div class="weather-forecast-temperature">
                <strong>${Math.round(day.temperature.maximun)}º</strong></div>
              <div class="weather-forecast-temperature">${Math.round(day.temperature.minmum)}º</div>
            </div>
          </div>`;
        
 }
});
  let forecastElement=document.querySelector('#forecast');
  forecastElement.innerHTML=forecastHTML;
}

let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener("submit",handleSearch);

searchCity("Sydney");

displayForecast();
