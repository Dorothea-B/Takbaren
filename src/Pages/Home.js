import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";


import styled from "styled-components/macro";
import "../index.css";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax


import ContactHome from "../components/ContactHome";
import IntroTextHome from "../components/IntroTextHome";
import MenuHome from "../components/MenuHome";
import OpenHoursHome from "../components/OpenHoursHome";
import SocialMediaHome from "../components/SocialMediaHome";
import WeatherApp from "../components/WeatherApp";
import HeaderImg from "../assets/Header-img.jpg";
import MapHome from "../components/MapHome";


// import "../App.css";

mapboxgl.accessToken =
	'pk.eyJ1IjoibWFyaWFubmVhcmRpbiIsImEiOiJjbDQ3Mmc3ZTkwM3drM2tsOXh5NmtqOWhjIn0.yZxjb02HmWVm6P7rG8i8fA';



const HomePageWrapper = styled.div`
  width: calc(100% - 30px);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
  }
`;

export const CardLight = styled.div`
  background-color: var(--clr-white);
  padding: 2rem;
  width: 100%;
`;

const Home = () => {

  // const mapContainer = useRef(null);
	// const map = useRef(null);
	// const [lng] = useState(18.292565198468033);
	// const [lat] = useState(57.64188017795392);
	// const [zoom] = useState(17);
	// useEffect(() => {
	// 	if (map.current) return; // initialize map only once
	// 	map.current = new mapboxgl.Map({
	// 		container: mapContainer.current,
	// 		style: 'mapbox://styles/mapbox/streets-v11',
	// 		center: [lng, lat],
	// 		zoom: zoom,
	// 	});
	// });

  return (
    // <div className="App">

    <section>
      <img src={HeaderImg} alt="header" />
      <HomePageWrapper>
        <CardLight>
          <IntroTextHome />
        </CardLight>
        <MenuHome />
        <CardLight>
          <OpenHoursHome />
        </CardLight>

        <WeatherApp />
        <MapHome />
       
        {/* <div>
				<div ref={mapContainer} className='map-container' />
			</div> */}


        <SocialMediaHome />

        <CardLight>
          <ContactHome />
        </CardLight>
      </HomePageWrapper>
    </section>

    // </div>
  );
};

export default Home;
