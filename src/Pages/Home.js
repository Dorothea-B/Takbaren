import React from "react";
import styled from "styled-components/macro";

// import NotFound from "./NotFound";
import "../index.css";

import ContactHome from "../components/ContactHome";
import IntroTextHome from "../components/IntroTextHome";
import MenuHome from "../components/MenuHome";
import OpenHoursHome from "../components/OpenHoursHome";
import SocialMediaHome from "../components/SocialMediaHome";
import WeatherApp from "../components/WeatherApp";
import HeaderImg from "../assets/Header-img.jpg";
// import MapHome from '../components/MapHome';

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
  return (
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
        <SocialMediaHome />
        {/* <MapHome /> */}
        <CardLight>
          <ContactHome />
        </CardLight>
      </HomePageWrapper>
    </section>
  );
};

export default Home;
