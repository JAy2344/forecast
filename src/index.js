function updateWeather(response) {
console.log(response.data);
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
    let cityElement = document.querySelector('.weather-app-city');
    cityElement.innerHTML=searchInput.value;
    searchCity(searchInput.value);

  //Search For city
}



let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener("submit",handleSearch);