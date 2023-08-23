import React, { useState } from 'react';
import SearchForm from './SearchForm';
import TemperatureConverter from './TemperatureConverter';


const WeatherContainer: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

const toggleMode = () => {
  setIsDarkMode(prevMode => !prevMode);
};


  return (

    <div>  
    <div className={`weather-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className='header'>
        <h2 style={{ fontSize: 36, marginBottom: '2%' }}>Weather App</h2>
        <button className={`mode-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`} onClick={toggleMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <SearchForm />
        <TemperatureConverter />
      </div>
    </div>
    </div>
  );
};

export default WeatherContainer;