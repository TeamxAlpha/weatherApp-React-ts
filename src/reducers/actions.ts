import * as actionTypes from './actionTypes';

export const fetchWeatherRequest = () => {
  return {
    type: actionTypes.FETCH_WEATHER_REQUEST,
  };
};

export const fetchWeatherSuccess = (weatherData: String) => {
  return {
    type: actionTypes.FETCH_WEATHER_SUCCESS,
    payload: weatherData,
  };
};

export const fetchWeatherFailure = (error: String) => {
  return {
    type: actionTypes.FETCH_WEATHER_FAILURE,
    payload: error,
  };
};
