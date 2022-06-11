import { useState, useEffect } from 'react';
import ReactWeather from 'react-open-weather';
import { API } from '../utils/API';
import { round } from '../utils/helpers';

// // import { render } from 'react-dom';
// // import axios from 'axios';

// //export default WeatherApp;
// //Från gammal väder app
// export default function WeatherApp() {
// 	const [weather, setWeather] = useState();
// 	const [latLng] = useState({
// 		lat: 57.64188017795392,
// 		lng: 18.292565198468033,
// 	});
// 	fetch({ API })
// 		.then((res) => {
// 			//if the response isn´t ok an error will be thrown.
// 			if (!res.ok) {
// 				throw Error('Weather data not available');
// 			}
// 			return res.json();
// 		})
// 		.then((data) => {
// 			//getWeather() is used to get our weather data for today and the next 5 days and update the HTML inside the function.
// 			getWeather(data);

// 			//filterWeater() is used to style the background and font color depending on the weater.
// 			filterWeather(data);
// 		})
// 		.catch((err) => console.error(err));
// }

// const setWeather = (data) => {
// 	//Get current weather and save it to the global variable so we can access it in all functions.
// 	todayWeather = data.list[0].weather[0].main;

// 	//Get current temperature.
// 	const todayTemp = data.list[0].main.temp;

// 	//If-else statement for changing styling depending on todaysWeather.
// 	const filterWeather = (data) => {
// 		if (todayWeather === 'Rain') {
// 			body.classList.toggle('rainy');
// 			//HÄR SKA NYA ICONER IN
// 			// text.innerHTML = `
// 			// 	<img class="img" src="./Designs/Design-2/icons/noun_Umbrella_2030530.svg" alt="umbrella icon">
// 			// 	<h1>Don't forget you umbrella. It's wet in Visby today.</h1>
// 			// 	`;
// 		} else if (todayWeather === 'Clear') {
// 			body.classList.toggle('sunny');
// 			text.innerHTML = `
// 					<h1>Get your sunnies on. Visby is rather great today.</h1>
// 			`;
// 		} else {
// 			body.classList.remove();
// 			text.innerHTML = `

// 			<h1>Light a fire and get cosy. Visby is looking grey today</h1>
// 			`;
// 		}
// 	};
// 	<main>
// 		<div id='text' class='container-text'>

// 			{/* <img class="img" src="./icons/noun_Cloud_1188486.svg" alt="cloud icon">
//             <h1>Light a fire and get cosy. City is looking grey today</h1>  */}
// 		</div>
// 		<div class='container-date'>
// 			<ul id='date'></ul>
// 		</div>
// 	</main>;
// };

////////////**********************'/////////////////////////// */
//Gammalt som inte funkade att styla från https://www.npmjs.com/package/react-open-weather
export const _getWeather = (_API) => async (lat, lon) => {
	const weather = await _API.getCurrentWeather(lat, lon);

	if (!weather) return;

	return {
		icon: weather.weather[0].icon,
		data: {
			cityName: weather.name,
			data: {
				forecast: [],
				current: {
					date: new Date().toDateString(),
					description: weather.weather[0].description,
					temperature: {
						current: round(weather.main.temp - 273.15, 1),
						min: round(weather.main.temp_min - 273.15, 1),
						max: round(weather.main.temp_max - 273.15, 1),
					},
					wind: weather.wind.speed,
					humidity: weather.main.humidity,
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

	// const customStyles = {
	// 	fontFamily: 'Helvetica, sans-serif',
	// 	gradientStart: 'red',
	// 	gradientMid: 'red',
	// 	gradientEnd: 'red',
	// 	locationFontColor: 'red',
	// 	todayTempFontColor: 'red',
	// 	todayDateFontColor: 'red',
	// 	todayRangeFontColor: 'red',
	// 	todayDescFontColor: 'red',
	// 	todayInfoFontColor: 'red',
	// 	todayIconColor: 'red',
	// 	forecastBackgroundColor: 'red',
	// 	forecastSeparatorColor: 'red',
	// 	forecastDateColor: 'red',
	// 	forecastDescColor: 'red',
	// 	forecastRangeColor: 'red',
	// 	forecastIconColor: 'red',
	// };

	return weather ? (
		<div style={styles.container}>
			<div style={styles.headerContainer}>
				{/* <span style={styles.title}>What's the Weather? 🌤</span>*/}
				{/* <LocationSearchInput setLatLng={setLatLng} /> */}
			</div>
			<div style={styles.weatherContainer}>
				<ReactWeather
					className='weather'
					// theme={customStyles}
					isLoading={false}
					data={weather.data}
					lang='en'
					locationLabel={weather.cityName}
					unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
				/>
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
		backgroundColor: 'rgba(255, 160, 0, 0.2)',
		position: 'absolute',
		alignSelf: 'center',
		overflow: 'auto',
	},
};
