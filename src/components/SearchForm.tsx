import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { WeatherState } from './types';
import clearImage from '../images/clear2.png';
import rainyImage from '../images/heavy rain.gif';
import tempImage from '../images/temp gif.gif';
import feelImage from '../images/feelslike.gif';
import cloudImage from '../images/forecast.png';
import smokeImage from '../images/smoke.gif';
import highrainImage from '../images/WeatherIcons.gif';

const WeatherApp: React.FC = () => {
  const [forecastData, setForecastData] = useState<any[]>([]);
  const [location, setLocation] = useState<any>('');
  const [weatherData, setWeatherData] = useState<any>(null);

  const getWeatherImage = (condition: string): string => {
    switch (condition) {
      case 'clear sky':
        return clearImage;
      case 'light rain':
        return rainyImage;
      case 'heavy rain':
        return rainyImage;
      case 'moderate rain':
        return rainyImage;
      case 'few clouds':
        return cloudImage;
      case 'broken clouds':
        return cloudImage;
      case 'heavy intensity rain':
        return highrainImage;
      case 'overcast clouds':
        return cloudImage;
      case 'scattered clouds':
        return cloudImage;
      case 'smoke':
        return smokeImage;
      default:
        return '';
    }
  };

  useSelector((state: RootState) => state.weather) as WeatherState;

  const fetchForecastData = async () => {
    try {
      const apiKey = 'e6f68605def6994d5821a3674938623f';
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      console.log(data);

      const filteredData = data.list.filter((dayWeather: any) => {
        const date = new Date(dayWeather.dt_txt);
        return date.getHours() === 0;
      });

      setForecastData(filteredData);
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();
    fetchForecastData();
    if (location.trim() === '') {
      return;
    }

    try {
      const apiKey = 'e6f68605def6994d5821a3674938623f';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
      } else {
        console.error('Error fetching weather data:', data.message);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div>
      <form className='input-section' onSubmit={handleSearch}>
        <input
          className='input-field'
          type="text"
          placeholder="Enter city name or zip code"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className='button' onClick={handleSearch}>Search</button>
      </form>
      {weatherData && (
        <div>
          <h1 style={{ marginBottom: '2%' }}>&nbsp;&nbsp;&nbsp;Weather Data</h1>
          <div className='Weather-details'>
            <div className='location-card'>
              <p>{weatherData.name}, {weatherData.sys.country}</p>
              <img style={{ width: '80px', height: '80px' }} src={getWeatherImage(weatherData.weather[0].description)} alt='weather' />
              <p>{weatherData.weather[0].description}</p>
            </div>
            <div className='location-card'>
              <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
              <img src={tempImage} style={{ width: '80px', height: '80px' }} alt='temperature' />
              <p>Max: {(weatherData.main.temp_max - 273.15).toFixed(2)}°C</p>
              <p>Min: {(weatherData.main.temp_min - 273.15).toFixed(2)}°C</p>
            </div>
            <div className='location-card'>
              <img style={{ width: '200px', height: '100px' }} src={feelImage} alt='feels-like' />
              <p>Feels-Like: {(weatherData.main.feels_like - 273.15).toFixed(2)}°C</p>
            </div>
          </div>
          <h1 style={{ margin: '2%' }}>5 Day Forecast</h1>
          <div className='forecast-data-grid'>
           {forecastData.map((dayWeather: any, index: number) => {
             const dayOfWeek = new Date(dayWeather.dt_txt).toLocaleDateString('en-US', { weekday: 'long' });

          return (
            <div key={index} className="forecast-data">
              <p>{dayOfWeek}</p>
              <p>Weather: {dayWeather.weather[0].description}</p>
              <img className='weather-image' src={`http://openweathermap.org/img/wn/${dayWeather.weather[0].icon.replace('n', 'd')}@2x.png`} alt="Weather" />
              <p>Temperature: {(dayWeather.main.temp - 273.15).toFixed(2)}°C</p>
            </div>
    );
  })}
</div>


        </div>
      )}
    </div>
  );
};

export default WeatherApp;
