const API_KEY = '7a28274345288d3a7ba48ac25a20f05a'
const API_BASE = 'api.openweathermap.org/data/2.5/weather'
const fetchWeather = async (city) =>{
  const res = await fetch(`${API_BASE}?q=${city}&appid=${API_KEY}`)
  return res.json()
}

export default fetchWeather;