import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components/macro';
import './index.css';

import Home from './Pages/Home';
import HeaderHome from './components/HeaderHome';
import Footer from './components/Footer';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import OpenHours from './Pages/OpenHours';
import NotFound from './Pages/NotFound';

import PopUp from './toolcomponents/PopUp';
import GoToTop from './toolcomponents/GoToTop';
import Background from './toolcomponents/Background';

import MenuDrink from './Pages/MenuDrink';
import MenuFood from './Pages/MenuFood';

import './App.css';

const App = () => {
	const [currentTab, setCurrentTab] = useState('1');

	return (
		<div className='App'>
			<Background />
			<header>
				<HeaderHome />
			</header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />

				<Route path='/menu' element={<Menu />}>
					<Route path='' element={<MenuDrink />} />
					<Route path='food' element={<MenuFood />} />
					<Route path='drinks' element={<MenuDrink />} />
				</Route>

				<Route path='/openinghours' element={<OpenHours />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
			<PopUp />
		</div>
	);
};

export default App;
