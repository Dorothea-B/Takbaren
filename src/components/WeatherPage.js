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
import { device } from '../toolcomponents/Devices';

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
				{/* <WeatherHeading>Takbaren just now:</WeatherHeading> */}
				<TemperatureText>{round(temperature)} {'\u00b0'}C</TemperatureText>
				<TemperatureDescription>{weather}</TemperatureDescription>
				{weather === 'Clear' && (
					<WeatherDescription> Remember to bring your sunscreen to the rooftop! <span role="img" aria-label="sunglasses">😎</span></WeatherDescription>
				)}
				{weather === 'Rain' && (
					<WeatherDescription>
						It's raining, good thing we have covering! <span role="img" aria-label="umbrella">☔️</span>

					</WeatherDescription>
				)}
				{weather === 'Snow' && (
					<WeatherDescription>
						Brr! It's snowing and we're probably closed for the season. <span role="img" aria-label="snowman">⛄️</span>
					</WeatherDescription>
				)}
				{weather === 'Extreme' && (
					<WeatherDescription>
						It's quite windy, perhaps a warm Irish Coffee would be nice and warm? <span role="img" aria-label="drink emoji">🍹</span>
					</WeatherDescription>
				)}
				{weather === 'Clouds' && (
					<WeatherDescription>
						Some clouds won't stop us from having a great time at the roofbar! <span role="img" aria-label="dancing emoji">🕺</span>
					</WeatherDescription>
				)}
				{weather === 'Fog' && (
					<WeatherDescription>
						We promise the view looks even cooler when it's foggy! <span role="img" aria-label="fog emoji">😶‍🌫️</span>
					</WeatherDescription>
				)}
				{weather === 'Squall' && (
					<WeatherDescription>
						Some unpredictable weather but we have blankets and heat lamps! <span role="img" aria-label="fire">🔥</span>
					</WeatherDescription>
				)}
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

export const WeatherCard = styled.section`
	display: flex;
	align-items: space-between;
	height: 100%;
	position: relative;
	margin-top: 2rem;

	@media ${device.mobileS} {
		flex-direction: column;
	}
	@media ${device.tablet} {
		flex-direction: row;
	}
`;

const WeatherTextDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: space-around;
	justify-content: center;
	/* background-color: var(--clr-medium); */
	padding: 3rem;
	width: 100%;
	

	@media ${device.mobileS} {
		padding: 0 3rem;
		/* margin-top: 2rem; */
	}
	@media ${device.tablet} {
		padding: 1rem;

		width: 50%;
		margin-top: 0;

	}


`;

const WeatherImageDiv = styled.div`
	width: 100%;
	gap: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;

	@media ${device.mobileS} {
height: 8rem;	
}
	@media ${device.mobileS} {
height: 10rem;	
}
	@media ${device.tablet} {
		width: 50%;
		height: 100%;
	}
	@media ${device.laptop} {
		padding: 2rem;
	}

	& > * {

		
	@media ${device.mobileS} {
		width: 30%;
	}
	@media ${device.mobileL} {
	width: 30%;
	}
	@media ${device.tablet} {
	height: 90%;
	width: 70%;	
	}
	
	}
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

	@media ${device.mobileS} {
		font-size: 2em;
	}
	@media ${device.mobileL} {
		font-size: 4em;

	}
	@media ${device.tablet} {
		font-size: 4em;
	}
`;

export const TemperatureDescription = styled.h3`
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	font-size: 1.8em;
	font-weight: 500;
	color: var(--clr-grey);

	@media ${device.mobileS} {
		font-size: 1em;
	}
	@media ${device.mobileL} {
		font-size: 1.3em;
	}
	@media ${device.tablet} {
		font-size: 1.8em;
	}
`;

export const WeatherDescription = styled.h3`
	font-family: 'Poppins', sans-serif;
	color: var(--clr-grey);
	font-weight: 500;;
	margin-top: 2rem;

	@media ${device.mobileS} {
		font-size: 1em;
	}
	@media ${device.mobileL} {
		font-size: 1.2em;
	}
	@media ${device.tablet} {
		font-size: 1.2em;
	}
`;
