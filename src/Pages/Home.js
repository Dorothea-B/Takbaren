import React, { useRef, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";


import styled from "styled-components/macro";
import "../index.css";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import ContactHome from "../components/ContactHome";
import IntroTextHome from "../components/IntroTextHome";
import ImageCarousel from "../components/ImageCarousel";
import MenuHome from "../components/MenuHome";
import OpenHoursHome from "../components/OpenHoursHome";
import SocialMediaHome from "../components/SocialMediaHome";
import WeatherApp from "../components/WeatherApp";
import HeaderImg from "../assets/Header-img.jpg";
import MapHome from "../components/MapHome";

// import "../App.css";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoibWFyaWFubmVhcmRpbiIsImEiOiJjbDQ3Mmc3ZTkwM3drM2tsOXh5NmtqOWhjIn0.yZxjb02HmWVm6P7rG8i8fA";

const HomePageWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: calc(100% - 30px);
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    width: calc(100% - 100px);
    flex-direction: row;

    //min and max width should be better adjusted to more formats once we set all media queries.
    min-width: 1000px;
    max-width: 1500px;
  }

  //RULES FOR ALL CHILD COMPONENTS
  & > * {
    margin-top: 2rem;
    width: 100%;
    align-self: center;
    justify-content: center;

    @media (max-width: 768px) {
      height: var(--home-mobile-h);
    }
    @media (min-width: 1024px) {
      height: var(--home-dsktp-h);
      /* overflow: hidden; */
    }
  }
`;

export const CardLight = styled.div`
  background-color: var(--clr-white);
  padding: 2rem;
  overflow: hidden;

  @media (min-width: 1024px) {
    width: var(--home-dsktp-w);
    /* width: 100%;
    max-width: 600px; */
  }
`;

const Map = styled.div`
  @media (min-width: 1024px) {
    width: var(--home-dsktp-w);
    height: var(--home-dsktp-h);
  }
`;
const Weather = styled.div`
  overflow: hidden;
  background-color: var(--clr-white);

  @media (min-width: 1024px) {
    width: var(--home-dsktp-w);
  }
`;

const CardOther = styled.div`
  position: relative;
  overflow: hidden;
  background-color: var(--clr-white);

  @media (min-width: 1024px) {
    width: 100%;
    height: calc(var(--home-dsktp-h) * 1.3);

  }
`;

const IntroDesktop = styled.div`
  background-color: rgba(247, 246, 240, 0.8);
  display: none;
  padding: 2rem;

  @media (min-width: 1024px) {
    width: var(--home-dsktp-w);
    display: block;
    position: absolute;
    top: 500px;
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

  @media (min-width: 1024px) {
    display: none;
  }
`;

const InstaGradient1 = styled.div`
  background: linear-gradient(.25turn, var(--clr-white), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));
  /* linear-gradient(.25turn, rgb(255, 255, 255), rgb(255, 255, 255), 120px, rgba(0, 0, 255, 0), 90%, rgb(255, 255, 255), rgb(255, 255, 255) ); */
  position: absolute;
  width: 160px;
  height: 100%;
  z-index: 300;
`
const InstaGradient2 = styled.div`
  background: linear-gradient(.25turn, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.7), var(--clr-white));
  /* linear-gradient(.25turn, rgb(255, 255, 255), rgb(255, 255, 255), 120px, rgba(0, 0, 255, 0), 90%, rgb(255, 255, 255), rgb(255, 255, 255) ); */
  position: absolute;
  width: 160px;
  height: 100%;
  z-index: 300;
  right: 0;
`

const Home = () => {
  return (
    <section>
      <img src={HeaderImg} alt="header" />
      <ImageCarousel />

      <HomePageWrapper>

        <IntroMobile>
          <IntroTextHome />
        </IntroMobile>

        <IntroDesktop>
          <IntroTextHome />
        </IntroDesktop>

        <Weather>
          <WeatherApp />
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
    </section>
  );
};

export default Home;
