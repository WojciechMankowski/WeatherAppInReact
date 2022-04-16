type weather = {
  city: string;
  data: string;
  icon: string;
  sunrise: string;
  sunset: string;
  temp: number;
  feels_like_temp: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
  pressure: number;
  windy_speed: string | number;
  isAxiosError: boolean | null
};

export default weather;
