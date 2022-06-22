import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components/macro';
import './index.css';
// import WeatherApp from "./components/WeatherApp";

// import MadLibList from './Pages/MadLibList';
// import MadLib from './Pages/MadLib';

import Home from './Pages/Home';
import HeaderHome from './components/HeaderHome';
import Footer from './components/Footer';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import OpenHours from './Pages/OpenHours';
import NotFound from './Pages/NotFound';
import ScrollUpBtn from './components/ScrollUpBtn';
import Loader from './components/Loader';

import GoToTop from './toolcomponents/GoToTop';
import Background from './toolcomponents/Background';
// import PopUp from "./components/PopUp";
// import styles from "./App.module.css";

import './App.css';

const App = () => {
	return (
		<div className='App'>
			<Background />
			<header>
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<HeaderHome />
				{/* <Loader loading /> */}
			</header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/openinghours' element={<OpenHours />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<GoToTop />
			<Footer />
		</div>
	);
};

export default App;
/* <Route path="/mad-libs/:slug" element={<MadLib />} /> */
