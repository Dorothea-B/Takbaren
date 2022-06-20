import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import styled from 'styled-components/macro';
import { device } from '../toolcomponents/Devices';
import '../index.css';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import ContactHome from '../components/ContactHome';
import IntroTextHome from '../components/IntroTextHome';
import ImageCarousel from '../components/ImageCarousel';
import MenuHome from '../components/MenuHome';
import OpenHoursHome from '../components/OpenHoursHome';
import SocialMediaHome from '../components/SocialMediaHome';
import WeatherHome from '../components/WeatherHome';
import HeaderImg from '../assets/Header-img.jpg';
import MapHome from '../components/MapHome';
import GoToTop from '../toolcomponents/GoToTop';

import Cross from '../assets/Cross.png';

// import "../App.css";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoibWFyaWFubmVhcmRpbiIsImEiOiJjbDQ3Mmc3ZTkwM3drM2tsOXh5NmtqOWhjIn0.yZxjb02HmWVm6P7rG8i8fA";

const HomePageWrapper = styled.div`
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;

	@media ${device.mobileS} {
		width: calc(100% - 30px);
		flex-direction: column;
		gap: 1rem;
	}

	@media ${device.tablet} {
		width: 90%;
		flex-direction: column;
		gap: 2rem;
	}

	@media ${device.laptop} {
		width: calc(100% - 100px);
		flex-direction: row;
		min-width: 1000px;
		max-width: 1500px;
	}

	//RULES FOR ALL CHILD COMPONENTS
	& > * {
		width: 100%;
		align-self: center;
		justify-content: center;

		@media ${device.mobileS} {
			margin-top: 2rem;
			height: calc(var(--home-mobile-h) * 0.8);
		}

		@media ${device.mobileL} {
			margin-top: 2rem;
			height: var(--home-mobile-h);
		}

		@media ${device.laptop} {
			margin-top: 0;
			width: var(--home-tablet-w);
			height: var(--home-dsktp-h);
			/* overflow: hidden; */
		}
	}
`;

export const HeaderImageSection = styled.div`
	width: 100%;
	position: relative;
`;

export const CardLight = styled.div`
	background-color: var(--clr-white);
	flex: 1;

	padding: 2rem;
	/* overflow: hidden; */

	@media ${device.mobileS} {
		width: 100%;
	}

	@media ${device.tablet} {
		width: var(--home-tablet-w);
		margin: auto;
		/* width: 100%;
    max-width: 600px; */
	}
	@media ${device.laptop} {
		/* width: var(--home-dsktp-w); */
	}
`;

const CardOther = styled.div`
	position: relative;
	overflow: hidden;
	background-color: var(--clr-white);

	@media ${device.tablet} {
		width: var(--home-tablet-w);
		/* height: calc(var(--home-dsktp-h) * 1.3); */
		height: var(--home-dsktp-h);

		margin: auto;
		/* width: 100%;
    max-width: 600px; */
	}
	@media ${device.laptop} {
		width: 100%;
		height: calc(var(--home-dsktp-h) * 1.3);
	}
`;

export const Map = styled.div`
	width: 100%;
	flex: 1;
	/* height: var(--home-mobile-h); */
	@media ${device.tablet} {
		width: var(--home-tablet-w);
		margin: auto;
		/* width: 100%;
    max-width: 600px; */
	}
	@media ${device.laptop} {
		width: var(--home-dsktp-w);
		/* max-width: 500px; */

		/* height: var(--home-dsktp-h); */
	}
`;

export const Weather = styled.div`
	overflow: hidden;
	background-color: var(--clr-white);

	@media ${device.tablet} {
		width: var(--home-tablet-w);
		margin: auto;
		/* width: 100%;
    max-width: 600px; */
	}
	@media (min-width: 1024px) {
		width: var(--home-dsktp-w);
	}
`;

const IntroDesktop = styled.div`
	background-color: rgba(247, 246, 240, 0.8);
	display: none;
	padding: 2rem;

	@media ${device.tablet} {
		width: 500px;
		display: block;
		position: absolute;
		top: 20%;
		left: 50%;
		margin-left: calc(500px - (500px * 1.5));
	}

	@media ${device.laptopL} {
		width: var(--home-dsktp-w);
		display: block;
		position: absolute;
		top: 20vh;
		left: 50%;
		margin-left: calc(var(--home-dsktp-w) - (var(--home-dsktp-w) * 1.5));
		/* This calculation dynamcally centers the div even though it's absolutely positioned 
    (read more: https://css-tricks.com/forums/topic/horizontal-centering-of-an-absolute-element/) 
    100 - (100 x 1.5) = calculate half the value and use it as a negative number*/
	}
	@media ${device.desktop} {
		width: var(--home-dsktp-w);
		display: block;
		position: absolute;
		top: 40vh;
		left: 50%;
		margin-left: calc(var(--home-dsktp-w) - (var(--home-dsktp-w) * 1.5));
		/* This calculation dynamcally centers the div even though it's absolutely positioned 
    (read more: https://css-tricks.com/forums/topic/horizontal-centering-of-an-absolute-element/) 
    100 - (100 x 1.5) = calculate half the value and use it as a negative number*/
	}
`;
const IntroMobile = styled.div`
	background-color: var(--clr-white);
	display: flex;
	padding: 2rem;

	@media ${device.tablet} {
		display: none;
	}

	/* @media (min-width: 1024px) {
		display: none;
	} */
`;

const Home = () => {
	return (
		<section>
			<HeaderImageSection>
				{/* either one headerimage or the image carousel, right? 
				Wrapping these in a separate container to control the position of the intro text desktop*/}
				<img src={HeaderImg} alt='header' />
				<ImageCarousel />

				<IntroDesktop>
					<IntroTextHome />
				</IntroDesktop>
			</HeaderImageSection>

			<HomePageWrapper>
				<IntroMobile>
					<IntroTextHome />
				</IntroMobile>

				<Weather>
					<WeatherHome />
				</Weather>

				<CardLight>
					<OpenHoursHome />
				</CardLight>

				<CardOther>
					<MenuHome />
				</CardOther>

				<CardLight>
					<ContactHome />
				</CardLight>

				<Map>
					<MapHome />
				</Map>

				<CardOther>
					<InstaGradient1> </InstaGradient1>
					<InstaGradient2> </InstaGradient2>

					<SocialMediaHome />
				</CardOther>
			</HomePageWrapper>
			<GoToTop />
		</section>
	);
};

export default Home;

const InstaGradient1 = styled.div`
	background: linear-gradient(
		0.25turn,
		var(--clr-white),
		rgba(255, 255, 255, 0.7),
		rgba(255, 255, 255, 0),
		rgba(255, 255, 255, 0)
	);
	/* linear-gradient(.25turn, rgb(255, 255, 255), rgb(255, 255, 255), 120px, rgba(0, 0, 255, 0), 90%, rgb(255, 255, 255), rgb(255, 255, 255) ); */
	position: absolute;
	width: 160px;
	height: 100%;
	z-index: 300;
`;
const InstaGradient2 = styled.div`
	background: linear-gradient(
		0.25turn,
		rgba(255, 255, 255, 0),
		rgba(255, 255, 255, 0),
		rgba(255, 255, 255, 0.7),
		var(--clr-white)
	);
	/* linear-gradient(.25turn, rgb(255, 255, 255), rgb(255, 255, 255), 120px, rgba(0, 0, 255, 0), 90%, rgb(255, 255, 255), rgb(255, 255, 255) ); */
	position: absolute;
	width: 160px;
	height: 100%;
	z-index: 300;
	right: 0;
`;
