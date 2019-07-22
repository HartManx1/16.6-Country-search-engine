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
        var liEl = document.createElement('li');
        liEl.innerHTML += "<span>Country name: <br></span>" + item.name + "<br>"
        liEl.innerHTML += "Capital: " + item.capital + "<br><br>"


        countriesList.appendChild(liEl);
    });
}

