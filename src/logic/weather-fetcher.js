// eslint-disable-next-line no-undef
const API_KEY = config.TEST_KEY;
const API_BASE = 'api.openweathermap.org/data/2.5/weather';
const fetchWeather = async (city) => {
  const res = (await fetch(`https://${API_BASE}?q=${city}&appid=${API_KEY}`)).json();
  const { weather, sys } = await res;
  const { description, icon } = weather[0];
  const { country } = sys;
  return { description, icon, country };
};

export default fetchWeather;