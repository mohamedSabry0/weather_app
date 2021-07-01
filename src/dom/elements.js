const elements = (() => {
  const main = document.querySelector('.main');
  const searchForm = document.querySelector('.search-form');
  const searchField = document.querySelector('.search-field');
  const searchBtn = document.querySelector('.search-btn');
  const cityName = document.querySelector('.city-name');
  const weatherResult = document.querySelector('.weather-result');
  const weatherImg = document.querySelector('.weather-img');
  const weatherDesc = document.querySelector('.weather-desc');
  const temperature = document.querySelector('.temperature');
  const toggleBtn = document.querySelector('.toggle');
  const toggleSpan = document.querySelector('.toggle span');
  return {
    main,
    searchForm,
    searchField,
    searchBtn,
    weatherResult,
    weatherImg,
    weatherDesc,
    cityName,
    temperature,
    toggleBtn,
    toggleSpan,
  };
})();

export default elements;