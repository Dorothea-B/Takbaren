import { useState, useEffect } from 'react';
import { round } from '../utils/helpers';
import styled from 'styled-components/macro';
import clouds from '../assets/clouds.svg';
import clear from '../assets/clear.svg';
import dust from '../assets/dust.svg';
import fog from '../assets/fog.svg';
import rain from '../assets/rain.svg';
import snow from '../assets/snow.svg';
import squall from '../assets/squall.svg';
import thunderstorm from '../assets/thunderstorm.svg';
import tornado from '../assets/tornado.svg';

import axios from 'axios';

const WeatherApp = () => {
	const [weather, setWeather] = useState('');
	const [latlng] = useState({
		lat: 57.64,
		lng: 18.29,
	});
	const [temperature, setTemperature] = useState(0);

	const fetchWeather = async (lat, lng) => {
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

		setTemperature(res.data.main.temp);
		setWeather(res.data.weather[0].main);
	};

	useEffect(() => {
		fetchWeather(latlng.lat, latlng.lng);
	});
	return (
		<WeatherCard>
			<WeatherTextDiv>
				<WeatherHeading>Takbaren just now:</WeatherHeading>
				<TemperatureText>{round(temperature)} C</TemperatureText>
				{weather}
			</WeatherTextDiv>
			<WeatherImageDiv>
				{weather === 'Clear' && <img src={clear} alt='sun icon' />}
				{weather === 'Rain' && <img src={rain} alt='rain icon' />}
				{weather === 'Snow' && <img src={snow} alt='snow icon' />}
				{weather === 'Extreme' && <img src={thunderstorm} alt='thunder icon' />}
				{weather === 'Clouds' && <img src={clouds} alt='cloud icon' />}
				{weather === 'Squall' && <img src={squall} alt='squall icon' />}
				{weather === 'Tornado' && <img src={tornado} alt='tornado icon' />}
				{weather === 'Fog' && <img src={fog} alt='fog icon' />}
				{weather === 'Dust' && <img src={dust} alt='dust icon' />}
			</WeatherImageDiv>
		</WeatherCard>
	);
};
export default WeatherApp;
//Styling for the weather
export const WeatherCard = styled.section`
	display: flex;
	flex-direction: row;
	align-items: space-between;
	height: 100%;
`;

const WeatherTextDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: space-between;
	background-color: var(--clr-medium);
	padding: 3rem;
	width: 100%;
	max-width: 600px;
`;

const WeatherImageDiv = styled.div`
	width: 100%;
	border: solid 2px #fff;
	max-width: 600px;
	gap: 1rem;
`;

export const WeatherHeading = styled.h1`
	font-family: 'Playfair Display', serif;
	font-size: 1.3em;
	font-style: italic;
	font-weight: 500;
	color: var(--clr-grey);
`;

export const TemperatureText = styled.h2`
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	font-size: 4em;
	font-weight: 500;
	color: var(--clr-grey);
`;

export const WeatherDescription = styled.h3`
	font-family: 'Poppins', sans-serif;
	letter-spacing: 0.25em;
	text-transform: lowercase;
	text-align: right;
	color: var(--clr-grey);
`;
