import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import WeatherApp from "./components/WeatherApp";

// import MadLibList from './Pages/MadLibList';
// import MadLib from './Pages/MadLib';

import Home from './Pages/Home';
import HeaderHome from './components/HeaderHome';
import NavBarHome from './components/NavBarHome';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import OpenHours from './Pages/OpenHours';
import NotFound from './Pages/NotFound';
// import styles from "./App.module.css";

import './App.css';
mapboxgl.accessToken =
	'pk.eyJ1IjoibWFyaWFubmVhcmRpbiIsImEiOiJjbDQ3Mmc3ZTkwM3drM2tsOXh5NmtqOWhjIn0.yZxjb02HmWVm6P7rG8i8fA';

const App = () => {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng] = useState(18.292565198468033);
	const [lat] = useState(57.64188017795392);
	const [zoom] = useState(17);
	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: zoom,
		});
	});

	return (
		<div className='App'>
			<header>
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<HeaderHome />
				<NavBarHome />
			</header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/openinghours' element={<OpenHours />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<div />
			<div>
				<div ref={mapContainer} className='map-container' />
			</div>
		</div>
	);
};

export default App;

/* <Route path="/mad-libs/:slug" element={<MadLib />} /> */
