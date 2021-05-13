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
    // render should be moved to dom
    const city = searchField.value;
    const { description, icon, country } = await fetchWeather(city);
    cityName.textContent = ` weather in ${city}, ${country}`;
    searchField.value = '';
    weatherImg.setAttribute('src', `${iconBaseURL + icon}@2x.png`);
    weatherImg.setAttribute('alt', 'weather image');
    weatherDesc.textContent = description;
  };

  return {
    renderLoading,
    renderResult,
  };
};

export default renderModule;