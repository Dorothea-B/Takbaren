import { useEffect, useState } from 'react';
import ReactWeather from 'react-open-weather';
import { API } from '../utils/API';
import { round } from '../utils/helpers';

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

	return weather ? (
		<div style={styles.container}>
			<div style={styles.headerContainer}>
				{/* <span style={styles.title}>What's the Weather? 🌤</span>*/}
				{/* <LocationSearchInput setLatLng={setLatLng} /> */}
			</div>
			<div style={styles.weatherContainer}>
				<ReactWeather
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

export const App = () => (
	<div style={styles.container}>
		<div style={styles.backdrop} />
		<WeatherApp />
	</div>
);

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
