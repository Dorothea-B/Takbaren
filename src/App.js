import React from 'react';
import { Routes, Route } from 'react-router-dom';


// import MadLibList from './Pages/MadLibList';
// import MadLib from './Pages/MadLib';

import Home from './Pages/Home';
import HeaderHome from './components/HeaderHome';
import NavBarHome from './components/NavBarHome';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import OpenHours from './Pages/OpenHours';
import NotFound from './Pages/NotFound';
import ScrollUpBtn from './components/ScrollUpBtn';
import Loader from './components/Loader';
// import WeatherApp from "./components/WeatherApp";
// import styles from "./App.module.css";

import './App.css';

const App = () => {
	return (
		<div className='App'>
			<header>
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<HeaderHome />
				<NavBarHome />
				<Loader loading />
			</header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/openinghours' element={<OpenHours />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<ScrollUpBtn />
		</div>
	);
};

export default App;
/* <Route path="/mad-libs/:slug" element={<MadLib />} /> */
