import React from 'react';

import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Weather = () => {
	const { data, isLoading, errorMessage } = useOpenWeather({
		key: 'a97e7de7f03fde16353def46be2c83e7',
		lat: '57.64188017795392',
		lon: '18.292565198468033',
		lang: 'en',
		unit: 'metric', 
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
	locationFontColor: '#000000',
	todayTempFontColor: '#000000',
	todayDateFontColor: '#000000',
	todayRangeFontColor: '#000000',
	todayDescFontColor: '#000000',
	todayInfoFontColor: '#000000',
	todayIconColor: '#000000',
	forecastBackgroundColor: '#FFF',
	forecastSeparatorColor: '#DDD',
	forecastDateColor: '#000000',
	forecastDescColor: '#000000',
	forecastRangeColor: '#000000',
	forecastIconColor: '#000000',
};

<ReactWeather theme={customStyles} />;

export default Weather;
