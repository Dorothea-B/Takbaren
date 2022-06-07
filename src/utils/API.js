import Axios from './axios';

const KEY = 'a97e7de7f03fde16353def46be2c83e7';

const getCurrentWeather = (lat, lon) =>
	Axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
		params: {
			lat,
			lon,
			appid: KEY,
		},
	}).then((res) => res.data);

export const API = {
	getCurrentWeather,
};
