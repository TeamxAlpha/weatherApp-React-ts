import * as actionTypes from './actionTypes';
import { WeatherState } from '../components/types';

const initialState: WeatherState = {
  weather: {
    city: '',
    data: null,
  },
  forecast: null,
};

const weatherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_REQUEST:
      return state; 
    case actionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weather: {
          ...state.weather,
          data: action.payload,
        },
      };
    case actionTypes.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        weather: {
          ...state.weather,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default weatherReducer;
