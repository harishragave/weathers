import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from './ThemeToggle';
import { useWeather } from '@/contexts/WeatherContext';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { fetchWeather } = useWeather();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchWeather(searchQuery);
    }
  };

  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-2">
        <MapPin className="h-6 w-6" />
        <h1 className="text-xl font-bold">Weather Forecast</h1>
      </div>
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Search city..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-64"
        />
        <button type="submit" className="p-2 hover:bg-gray-100 rounded">
          <Search className="h-5 w-5" />
        </button>
      </form>
      <ThemeToggle />
    </header>
  );
};

export default Header;
