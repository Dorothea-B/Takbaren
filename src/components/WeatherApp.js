import { useState, useEffect } from 'react';
// import { API } from '../utils/API';
import { round } from '../utils/helpers';
// import styled from 'styled-components';

// import {
// 	// SubHeadingDark,
// 	DarkText,
// 	// ImageDiv,
// 	// ImageText,
// 	PagesHeading,
// 	// PagesImageOverlay,
// 	// PagesWrapper,
// } from '../globalStyleComponents';
// import { render } from 'react-dom';
import axios from 'axios';

const WeatherApp = () => {
	const [weather, setWeather] = useState('');
	const [latlng] = useState({
		lat: 57.64,
		lng: 18.29,
	});
	const [temperature, setTemperature] = useState(0);
	const [icon, setIcon] = useState('');

	const fetchWeather = async (lat, lng) => {
		// const res = await axios.get({ API });
		const KEY = 'a97e7de7f03fde16353def46be2c83e7';
		const res = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=Visby&units=metric
			`,
			{
				params: {
					lat,
					lon: lng,
					appid: KEY,
				},
			}
		);
		console.log(res);
		setTemperature(res.data.main.temp);
		setWeather(res.data.weather[0].main);
		setIcon(res.data.weather[0].icon);
	};

	useEffect(() => {
		fetchWeather(latlng.lat, latlng.lng);
	}, [latlng]);
	return (
		<div>
			Takbaren just now:
			{round(temperature)} °C
			{weather}
			{weather === 'Clear' && <p>It's sunny on the roof top! </p>}
			{weather === 'Rain' && (
				<p>It's raining, check our instagram to see if we're open </p>
			)}
			{weather === 'Cloudy' && <p>Cloudy day, perfect for a roof top drink</p>}
		</div>
	);
};
export default WeatherApp;
//Styling for the weather
// const TextDiv = styled.div`
// 	padding: 2rem;
// 	width: 100%;
// 	height: 150px;
// 	border: solid 2px #fff;
// 	max-width: 600px;
// `;
