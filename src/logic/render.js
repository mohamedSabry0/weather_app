import fetchWeather from './weather-fetcher';
import loadingImg from '../assets/images/loading.svg';

const iconBaseURL = 'http://openweathermap.org/img/wn/';
const renderModule = (elements) => {
  const {
    weatherDesc, weatherImg, searchField, cityName,
  } = elements;

  const renderLoading = () => {
    weatherImg.setAttribute('src', loadingImg);
    weatherImg.setAttribute('alt', 'loading image');
  };

  const renderResult = async () => {
    const city = searchField.value;
    
    fetchWeather(city)
    .then(({description, icon, country}) =>{
      cityName.textContent = ` weather in ${city}, ${country}`;
      searchField.value = '';
      weatherImg.setAttribute('src', `${iconBaseURL + icon}@2x.png`);
      weatherImg.setAttribute('alt', 'weather image');
      weatherDesc.textContent = description;
    })
    .catch(err => {
      console.error('Error Code:', err.cod, ', Error:', err.message);
      weatherImg.setAttribute('src', '');
      weatherImg.setAttribute('alt', '');
      weatherDesc.textContent = err.message;
    });
  };
  
  return {
    renderLoading,
    renderResult,
  };
};

export default renderModule;