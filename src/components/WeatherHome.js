import React from 'react';

import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Weather = () => {
	const { data, isLoading, errorMessage } = useOpenWeather({
		key: 'a97e7de7f03fde16353def46be2c83e7',
		lat: '57.64188017795392',
		lon: '18.292565198468033',
		lang: 'en',
		unit: 'metric', // values are (metric, standard, imperial)
	});
	return (
		<ReactWeather
			isLoading={isLoading}
			errorMessage={errorMessage}
			data={data}
			lang='en'
			locationLabel='Visby'
			unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
			// showForecast
		/>
	);
};

export default Weather;
