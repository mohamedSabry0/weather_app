import fetchWeather from './weather-fetcher';
import loadingImg from '../assets/images/loading.svg';
import tempModule from './temp-converter';

const iconBaseURL = 'http://openweathermap.org/img/wn/';
const renderModule = (elements) => {
  let temps;
  const {
    weatherDesc, weatherImg, searchField, cityName, temperature
  } = elements;

  const renderImg = (src, alt) => {
    weatherImg.setAttribute('src', src);
    weatherImg.setAttribute('alt', alt);
  };

  const renderTemp = () => {
    const current = temperature.textContent.split(' ')[0];
    const { fahrenheit, celsius } = temps.tempCalc(); 
    temperature.textContent = current == celsius ? `${fahrenheit} F\u00B0` : `${celsius} C\u00B0`; 
  };

  const renderLoading = () => {
    renderImg(loadingImg, 'loading image')
  };
  

  const renderResult = async () => {
    const city = searchField.value;
    
    fetchWeather(city)
    .then(({description, icon, country, temp}) =>{
      cityName.textContent = ` weather in ${city}, ${country}`;

      temps  = tempModule(temp);
      temperature.classList.remove('hidden');
      renderTemp();
      
      searchField.value = '';
      renderImg(`${iconBaseURL + icon}@2x.png`, 'weather image');
      weatherDesc.textContent = description;
    })
    .catch(err => {
      renderImg('', '');
      weatherDesc.textContent = err.message;
      console.error('Error Code:', err.cod, ', Error:', err.message);
    });
  };
  
  return {
    renderLoading,
    renderResult,
    renderTemp
  };
};

export default renderModule;