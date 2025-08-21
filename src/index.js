function updateWeather(response) {
    //update the weather app with the response data
    let temperature=Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector('.weather-app-temperature');
    temperatureElement.innerHTML = `${temperature}`;
    let cityElement = document.querySelector('.weather-app-city');
    cityElement.innerHTML=response.data.city;
}
function updateInfo(response) {
    //update the weather app with the response data
   let description= response.data.condition.description;
   let descriptionElement=document.querySelector('#description');
   descriptionElement.innerHTML=description;

   let humidity=response.data.temperature.humidity;
    let humidityElement=document.querySelector('#hum');
    humidityElement.innerHTML=`Humidity: ${humidity}%`;

    console.log(humidityElement)

   let wind=response.data.wind.speed;
   let windElement=document.querySelector('#wind');
    windElement.innerHTML=`Wind: ${wind}km/h`;


}



function searchCity(city) {
      //call API
    let apiKey = "ad28f3a0557d8t5f574o89b184356e5a"
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(updateWeather);
}

function handleSearch(event) {
    event.preventDefault();
    let searchInput = document.querySelector('#search-input');
    
    searchCity(searchInput.value);

  //Search For city
}



let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener("submit",handleSearch);