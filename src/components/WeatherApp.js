import { useState, useEffect } from 'react';
// import { API } from '../utils/API';
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

// import { render } from 'react-dom';
import axios from 'axios';

const WeatherApp = () => {
	const [weather, setWeather] = useState('');
	const [latlng] = useState({
		lat: 57.64,
		lng: 18.29,
	});
	const [temperature, setTemperature] = useState(0);
	const [setIcon] = useState('');

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
		// console.log(res);
		setTemperature(res.data.main.temp);
		setWeather(res.data.weather[0].main);
		setIcon(res.data.weather[0].icon);
	};

	useEffect(() => {
		fetchWeather(latlng.lat, latlng.lng);
	}, [latlng]);
	return (
		<WeatherCard>
			<WeatherTextDiv>
				<WeatherHeading>Takbaren just now:</WeatherHeading>
				<TemperatureText>{round(temperature)} C</TemperatureText>
				{weather}
				{weather === 'Clear' && (
					<WeatherDescription>It's sunny on the roof top! </WeatherDescription>
				)}
				{weather === 'Rain' && (
					<WeatherDescription>
						It's raining, check our instagram to see if we're open
					</WeatherDescription>
				)}
				{weather === 'Snow' && (
					<WeatherDescription>
						Brr! It's snowing, check our instagram to see if we're open
					</WeatherDescription>
				)}
				{weather === 'Extreme' && (
					<WeatherDescription>
						Wow it's wild out there, check our instagram to see if we're open
					</WeatherDescription>
				)}
				{weather === 'Clouds' && (
					<WeatherDescription>
						Cloudy day, perfect for a roof top drink
					</WeatherDescription>
				)}
			</WeatherTextDiv>
			<WeatherImageDiv>
				{/* <img src={clear} alt='sun icon' /> */}
				{/* <img src={rain} alt='rain icon' />
				<img src={snow} alt='snow icon' />
				<img src={thunderstorm} alt='thunder icon' />
				<img src={clouds} alt='cloud icon' /> */}
				{weather === 'Clear' && <img src={clear} alt='sun icon' />}
				{weather === 'Rain' && <img src={rain} alt='rain icon' />}
				{weather === 'Snow' && <img src={snow} alt='snow icon' />}
				{weather === 'Extreme' && <img src={thunderstorm} alt='thunder icon' />}
				{weather === 'Clouds' && <img src={clouds} alt='cloud icon' />}
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
	/* justify-content: space-around; */
	/* gap: 1rem; */
	/* height: 100%; */
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
	/* display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center; */
	width: 100%;
	/* height: 150px; */
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
	/* font-weight: bold; */
	letter-spacing: 0.25em;
	text-transform: lowercase;
	text-align: right;
	color: var(--clr-grey);
`;
