import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  high: number;
  low: number;
  humidity: number;
  wind: number;
  feelsLike: number;
}

export const getWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });

    return {
      location: response.data.name,
      temperature: Math.round(response.data.main.temp),
      condition: response.data.weather[0].main,
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelsLike: Math.round(response.data.main.feels_like)
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
