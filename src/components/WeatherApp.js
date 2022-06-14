import { useState, useEffect } from 'react';
import ReactWeather from 'react-open-weather';
import { API } from '../utils/API';
import { round } from '../utils/helpers';
// import styled from 'styled-components';
// import { render } from 'react-dom';
// import axios from 'axios';
// import sun from '../assets/sun.png';

//Från gammal väder app
// const WeatherApp = () => {
// 	const [weather, setWeather] = useState();
// 	const [latlng] = useState({
// 		lat: 57.64188017795392,
// 		lng: 18.292565198468033,
// 	});
// 	const [temperature, setTemperature] = useState(0);
// 	const [icon, setIcon] = useState('');

// 	const fetchWeather = async () => {
// 		const res = await axios.get({ API });
// 		setTemperature(res.data.current.temp);
// 		setWeather(res.data.current.weather[0].main);
// 		setIcon(res.data.current.weather[0].icon);
// 	};

// 	useEffect(() => {
// 		fetchWeather();
// 	}, [latlng]);
// 	return (
// 		<section>
// 			<p>{round(temperature)} °C</p>
// 			<p>{weather}</p>
// 			<Img src={sun} />

// 			{weather === 'Sunny' && <p>It's sunny on the roof top! </p>}
// 			{weather === 'Rain' && (
// 				<p>It's raining, check our instagram to see if we're open </p>
// 			)}
// 			{weather === 'Clouds' && <p>Cloudy day, perfect for a roof top drink</p>}
// 		</section>
// 	);
// };
// export default WeatherApp;

// const Img = styled.img`
// 	width: 100%;
// `;

////////////**********************'/////////////////////////// */
//Gammalt som inte funkade att styla från https://www.npmjs.com/package/react-open-weather
export const _getWeather = (_API) => async (lat, lon) => {
	const weather = await _API.getCurrentWeather(lat, lon);

	if (!weather) return;

	return {
		icon: weather.weather[0].icon,
		data: {
			// cityName: weather.name,

			data: {
				forecast: [],
				current: {
					// date: new Date().toDateString(),
					description: weather.weather[0].description,
					temperature: {
						current: round(weather.main.temp - 273.15, 1),
						// min: round(weather.main.temp_min - 273.15, 1),
						// max: round(weather.main.temp_max - 273.15, 1),
					},
					// wind: weather.wind.speed,
					// humidity: weather.main.humidity,
				},
			},
		},
	};
};

const getWeather = _getWeather(API);

export default function WeatherApp() {
	const [weather, setWeather] = useState();
	const [latLng] = useState({
		lat: 57.64188017795392,
		lng: 18.292565198468033,
	});
	const [icon, setIcon] = useState();

	const updateWeather = async (lat, lng) => {
		const { icon, data } = await getWeather(lat, lng);
		setWeather(data);
		setIcon(icon);
	};

	useEffect(() => {
		updateWeather(latLng.lat, latLng.lng);
	}, [latLng]);

	return weather ? (
		<div style={styles.container}>
			<div style={styles.headerContainer}>
				{/* /* <span style={styles.title}>What's the Weather? 🌤</span>*/
				/* <LocationSearchInput setLatLng={setLatLng} /> */}
			</div>
			<div style={styles.weatherContainer}>
				<p>Takbaren just now:</p>
				<ReactWeather
					className='weather'
					// theme={customStyles}
					isLoading={false}
					data={weather.data}
					lang='en'
					// locationLabel={weather.cityName}
					// unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
				/>
				<div>
					{weather === 'Sunny' && <p>It's sunny on the roof top! </p>}
					{weather === 'Rain' && (
						<p>It's raining, check our instagram to see if we're open </p>
					)}
					{weather === 'Clouds' && (
						<p>Cloudy day, perfect for a roof top drink</p>
					)}
				</div>
				<div style={styles.icon}>
					<img
						src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
						alt='icon'
					/>
				</div>
			</div>
		</div>
	) : null;
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'center',
		marginTop: 100,
		width: 800,
		height: 400,
	},
	headerContainer: {
		alignSelf: 'center',
		marginLeft: -170,
		marginTop: 20,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	icon: {
		zIndex: 100,
		marginTop: -225,
		marginLeft: 315,
		display: 'flex',
	},
	weatherContainer: { alignSelf: 'center', width: 500 },
	title: {
		textAlign: 'center',
		fontWeight: 700,
		fontSize: '20px',
	},
	backgroundCard: {
		height: 100,
		width: 100,
	},
	backdrop: {
		boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
		borderRadius: '50px 50px 50px 50px',
		height: 300,
		width: 500,
		marginLeft: -100,
		zIndex: -100,
		backgroundColor: 'none',
		position: 'absolute',
		alignSelf: 'center',
		overflow: 'auto',
	},
};
