import './styles/styles.scss';
import debounce from 'lodash/debounce';
import fetchCountries from './fetchCountries.js';
import updateArtMarkup from './update-articles-markup';


const DEBOUNCE_DELAY = 300;

const refs = {
    countryList: document.querySelector('.country-list'),
    searchInput: document.querySelector('#search-box')
};

const debounceCountry = debounce(event => {
    console.log(event);
    event.preventDefault();
    const searchName = event.target.value;
    refs.countryList.innerHTML = '';
    
    fetchCountries(searchName).then(updateArtMarkup)
}, DEBOUNCE_DELAY);

refs.searchInput.addEventListener('input', debounceCountry);










