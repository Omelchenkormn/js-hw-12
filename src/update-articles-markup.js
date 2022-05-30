import templateArt from './templates/articles.hbs?raw';
import articlesList from './templates/articles-list.hbs?raw';
import handlebars from 'handlebars';
import { fetchNoResults, fetchMoreResults } from './notiflix';

const refs = {
    countryList: document.querySelector('.country-list')
};

function updateArtMarkup(data) {
    
    
    console.log(data);
    
    if (data.length > 10) {
        console.log("Too many matches found. Please enter a more specific name.");
        fetchMoreResults();
        // markup = '';
    }
    else if (data.length === 1) {
        const country = data[0];
        country.languages = Object.values(country.languages)
        const markupCountry = handlebars.compile(templateArt)(country)
        refs.countryList.insertAdjacentHTML('beforeend', markupCountry)
        console.log(country.length);
    }
    else if (data.length > 1 && data.length <= 10) {
        const markup = handlebars.compile(articlesList)(data)
        refs.countryList.insertAdjacentHTML('beforeend', markup)

    } else {
        fetchNoResults();
        console.log(error);
    };
};

    export default updateArtMarkup;