import fetchWeather from './weather-fetcher';
const iconBaseURL = 'http://openweathermap.org/img/wn/';
import loadingImg from '../assets/images/loading.svg';
const renderModule = (elements) => {
  const { weatherDesc, weatherImg, searchField, cityName } = elements;
  
  const renderLoading = () => {
    console.log('loading')
    weatherImg.setAttribute('src', loadingImg);
    weatherImg.setAttribute('alt', 'loading image');
  };
  
  const renderResult = async () => {
    const city = searchField.value;
    cityName.textContent = `${city}'s weather`;
    searchField.value = '';
    const { description, icon } = await fetchWeather(city);
    weatherImg.setAttribute('src', iconBaseURL + icon + '@2x.png');
    weatherImg.setAttribute('alt', 'weather image');
    weatherDesc.textContent = description;
  };

  return {
    renderLoading,
    renderResult
  }
}
  
  export default renderModule;