var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function (resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';

    resp.forEach(function (item) {
        var liEl = document.createElement('div');
        liEl.innerHTML += "<span><h3>Country name: </h3></span>" + item.name;
        liEl.innerHTML += "<span>Capital: </span>" + item.capital;
        
        countriesList.appendChild(liEl);
    });
}

