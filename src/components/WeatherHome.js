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

const customStyles = {
	fontFamily: 'Avenir',
	gradientStart: '#E5E5E5',
	gradientMid: '#F6BDAC',
	gradientEnd: '#DAA79D',
	locationFontColor: '#FFF',
	todayTempFontColor: '#FFF',
	todayDateFontColor: '#B5DEF4',
	todayRangeFontColor: '#B5DEF4',
	todayDescFontColor: '#B5DEF4',
	todayInfoFontColor: '#B5DEF4',
	todayIconColor: '#FFF',
	forecastBackgroundColor: '#FFF',
	forecastSeparatorColor: '#DDD',
	forecastDateColor: '#777',
	forecastDescColor: '#777',
	forecastRangeColor: '#777',
	forecastIconColor: '#4BC4F7',
};

<ReactWeather theme={customStyles} />;

export default Weather;
