function handleSearch(event) {
    event.preventDefault();
    let searchInput = document.querySelector('#search-input');
    let cityElement = document.querySelector('.weather-app-city');
    cityElement.innerHTML=searchInput.value;
  //call API
  //Search For city
}



let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener("submit",handleSearch);