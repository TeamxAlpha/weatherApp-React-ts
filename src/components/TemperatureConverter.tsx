import React, { useState } from 'react';

const TemperatureConverter: React.FC = () => {
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsius, setCelsius] = useState('');

  const convertToFahrenheit = (celsiusTemp: number) => {
    return (celsiusTemp * 9) / 5 + 32;
  };

  const convertToCelsius = (fahrenheitTemp: number) => {
    return ((fahrenheitTemp - 32) * 5) / 9;
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);
    if (fahrenheitValue) {
      const celsiusValue = convertToCelsius(parseFloat(fahrenheitValue));
      setCelsius(celsiusValue.toString());
    } else {
      setCelsius('');
    }
  };

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
    if (celsiusValue) {
      const fahrenheitValue = convertToFahrenheit(parseFloat(celsiusValue));
      setFahrenheit(fahrenheitValue.toString());
    } else {
      setFahrenheit('');
    }
  };
  return (
    <div className='temp-container'>
      <h2 style={{marginTop:'2%'}}>Temperature Converter</h2>
      <div>
        <label>Fahrenheit: </label>
        <input
          className='temperture-input'
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
      <div>
        <label>Celsius: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input className='temperture-input' type="number" value={celsius} onChange={handleCelsiusChange} />
      </div>
    </div>
  );
};

export default TemperatureConverter;
