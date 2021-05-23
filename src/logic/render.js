import fetchWeather from './weather-fetcher';
import loadingImg from '../assets/images/loading.svg';
import tempModule from './temp-converter';

const iconBaseURL = 'http://openweathermap.org/img/wn/';
const renderModule = (elements) => {
  let temps;
  const {
    weatherDesc, weatherImg, searchField, cityName, temperature, main,
  } = elements;

  const renderImg = (src, alt) => {
    weatherImg.setAttribute('src', src);
    weatherImg.setAttribute('alt', alt);
  };

  const renderTemp = () => {
    const current = temperature.textContent.split(' ')[0];
    const { fahrenheit, celsius } = temps.tempCalc();
    temperature.textContent = current === celsius ? `${fahrenheit} F\u00B0` : `${celsius} C\u00B0`;
  };

  const changeBackground = (icon) => {
    main.style.background = `wheat space url(${icon})`;
  };

  const renderLoading = () => {
    renderImg(loadingImg, 'loading image');
  };

  const renderResult = async () => {
    const city = searchField.value;

    fetchWeather(city)
      .then(({
        description, icon, country, temp,
      }) => {
        cityName.textContent = ` weather in ${city}, ${country}`;

        temps = tempModule(temp);
        temperature.classList.remove('hidden');
        renderTemp();
        changeBackground(`${iconBaseURL + icon}@2x.png`);
        searchField.value = '';
        renderImg('', '');
        weatherDesc.textContent = description;
      })
      .catch((err) => {
        renderImg('', '');
        weatherDesc.textContent = err.message;
      });
  };

  return {
    renderLoading,
    renderResult,
    renderTemp,
  };
};

export default renderModule;