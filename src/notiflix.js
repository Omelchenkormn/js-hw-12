import { Notify } from 'notiflix/build/notiflix-notify-aio';
const fetchNoResults = () => {
  Notify.failure('Oops, there is no country with that name', {
    timeout: 2000,
    showOnlyTheLastOne: true,
    cssAnimation: true,
  });
};

const fetchMoreResults = () => {
  Notify.info('Too many matches found. Please enter a more specific name.', {
    timeout: 2000,
    showOnlyTheLastOne: true,
    cssAnimation: true,
    pauseOnHover: true,
  });
};
export { fetchMoreResults, fetchNoResults };