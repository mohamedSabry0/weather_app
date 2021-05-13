import config from '../keys/config'
const API_KEY = config.TEST_KEY;
const API_BASE = 'api.openweathermap.org/data/2.5/weather'
const fetchWeather = async (city) =>{
  const res = (await fetch(`https://${API_BASE}?q=${city}&appid=${API_KEY}`)).json()
  const {weather} = await res;
  return weather[0];
}

export default fetchWeather;