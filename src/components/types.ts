// types.ts (or interfaces.ts)
export type WeatherState = {
    weather: {
      city: string;
      data: any; 
    } | {
      error: any;
      city: string;
      data: null;
    };
    forecast: any; 
  };
  