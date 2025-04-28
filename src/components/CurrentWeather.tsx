import React from 'react';
import { Cloud, Droplet, Wind, Thermometer } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useWeather } from '@/contexts/WeatherContext';

const CurrentWeather = () => {
  const { weather, loading, error } = useWeather();

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">{error}</div>;
  }

  if (!weather) {
    return <div className="text-center p-4">Search for a city to see weather</div>;
  }

  return (
    <Card className="p-6">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2">{weather.location}</h2>
        <div className="text-4xl font-bold mb-4">{weather.temperature}°C</div>
        <div className="text-xl mb-4">{weather.condition}</div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex items-center gap-2">
            <Thermometer className="h-5 w-5" />
            <span>High: {weather.high}°C</span>
          </div>
          <div className="flex items-center gap-2">
            <Thermometer className="h-5 w-5" />
            <span>Low: {weather.low}°C</span>
          </div>
          <div className="flex items-center gap-2">
            <Droplet className="h-5 w-5" />
            <span>Humidity: {weather.humidity}%</span>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="h-5 w-5" />
            <span>Wind: {weather.wind} m/s</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CurrentWeather;
