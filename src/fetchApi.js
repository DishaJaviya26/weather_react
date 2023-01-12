import axios from 'axios';
import getTime from './getTime';

const fetchApi = async (cityName) => {

  try{
    const response = await axios.request('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
      params: {city: cityName},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_HOST
      }
    })

    response.data.sunrise = getTime(response.data.sunrise)
    response.data.sunset = getTime(response.data.sunset)
    return {...response.data, status: response.status}
  }

  catch(e){
    return {status: e.response.status}
  }
  
    
}

export default fetchApi;