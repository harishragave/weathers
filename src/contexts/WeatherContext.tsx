import React, { createContext, useContext, useState, useEffect } from 'react';
import { getWeatherData, WeatherData } from '@/services/weatherService';

interface WeatherContextType {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
  fetchWeather: (city: string) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeatherData(city);
      setWeather(data);
    } catch (err) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, loading, error, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
