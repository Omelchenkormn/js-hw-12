const URL = 'https://restcountries.com/v3.1/name/'
const fields = 'fields=name,capital,population,languages,flags,'

function fetchCountries(nameCountry) {
  return fetch(`${URL}${nameCountry}?${fields}`)
    .then(response => response.json())
    .catch(error => console.log(error))
}
export default fetchCountries;