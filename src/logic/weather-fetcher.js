// eslint-disable-next-line no-undef
const API_KEY = config.TEST_KEY;
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';
const fetchWeather = async (city) => {
  
  const res = (await fetch(`${API_BASE}?q=${city}&appid=${API_KEY}&units=metric`))
  .json()
  .catch(err =>{
    console.error('Error: ', err);
  });
  
  const { weather, sys, main } = await res;
  if (weather === undefined){
    const { cod, message } = await res;
    throw { cod, message }
  }
  const { temp } = main;
  const { country } = sys;
  const { description, icon } = weather[0];
  return { description, icon, country, temp };
};

export default fetchWeather;