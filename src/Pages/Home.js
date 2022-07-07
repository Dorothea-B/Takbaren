import React from "react";

import styled from "styled-components/macro";
import { device } from "../toolcomponents/Devices";
import "../index.css";

import ContactHome from "../components/ContactHome";
import IntroTextHome from "../components/IntroTextHome";
import MenuHome from "../components/MenuHome";
import OpenHoursHome from "../components/OpenHoursHome";
import SocialMediaHome from "../components/SocialMediaHome";
import WeatherHome from "../components/WeatherHome";
import HeaderImg from "../assets/Header-img.jpg";
import MapHome from "../components/MapHome";
import GoToTop from "../toolcomponents/GoToTop";
import ScrollUpBtn from "../toolcomponents/ScrollUpBtn";

import leaf1 from "../assets/Leaves/leaf_green_palm.svg";
import leaf2 from "../assets/Leaves/leaf_green_star.svg";
import leaf3 from "../assets/Leaves/leaf_green_montsera.svg";
import leaf4 from "../assets/Leaves/leaf_green_palm_inverted.svg";

const Home = () => {
  const hideDiv = () => {
    document.getElementById("desktopIntro").style.display = "none";
  };

  return (
    <section>
      <LeafPalmLeft />

      <HeaderImageSection>
        <IntroDesktop id='desktopIntro'>
          <Hide id='hide' onClick={() => hideDiv()}>
            &#215;
          </Hide>
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

        <LeafStarRight />

        <CardOther>
          <MenuHome />
        </CardOther>

        <CardLight>
          <ContactHome />
        </CardLight>

        <Map>
          <MapHome />
        </Map>

        <MontseraLeft />

        <CardOther>
          <SocialMediaHome />
        </CardOther>
        <LeafPalmRight />
      </HomePageWrapper>
      <GoToTop />
      <ScrollUpBtn />
    </section>
  );
};

export default Home;

export const HomePageWrapper = styled.div`
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
  @media ${device.desktop} {
    width: calc(100% - 100px);
    flex-direction: row;
    min-width: 1000px;
    max-width: 1900px;
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
    }
    @media ${device.desktop} {
      margin-top: 0;
      width: var(--home-tablet-w);
      height: var(--home-large-dsktp-h);
    }
  }
`;

export const HeaderImageSection = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  height: 70vh;
  background-image: url(${HeaderImg});
  background-repeat: no-repeat;
  background-size: cover;

  @media ${device.mobileS} {
    height: 40vh;
    width: 100%;
  }
  @media ${device.mobileL} {
    height: 40vh;
    width: 100%;
  }
  @media ${device.tablet} {
    height: 60vh;
    width: 100%;
  }
  @media ${device.laptop} {
    height: 70vh;
    width: 100%;
  }
  @media ${device.desktop} {
    height: 70vh;
    width: 100%;
  }
`;

export const CardLight = styled.div`
  background-color: var(--clr-white);
  flex: 1;
  padding: 2rem;
  text-align: center;

  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: var(--home-tablet-w);
    margin: auto;
  }
`;

const CardOther = styled.div`
  position: relative;
  overflow: hidden;
  background-color: var(--clr-white);

  @media ${device.tablet} {
    width: var(--home-tablet-w);
    height: var(--home-dsktp-h);
    margin: auto;
  }

  @media ${device.laptop} {
    width: 100%;
    height: calc(var(--home-dsktp-h) * 1.3);
  }
  @media ${device.laptopL} {
    width: 100%;
    height: calc(var(--home-large-dsktp-h) * 1.3);
  }
  @media ${device.desktop} {
    height: calc(var(--home-large-dsktp-h) * 1.3);
  }
`;

export const Map = styled.div`
  width: 100%;
  flex: 1;
  @media ${device.tablet} {
    width: var(--home-tablet-w);
    margin: auto;
  }
  @media ${device.laptop} {
    width: var(--home-dsktp-w);
  }
`;

export const Weather = styled.div`
  overflow: hidden;
  background-color: var(--clr-white);

  @media ${device.tablet} {
    width: var(--home-tablet-w);
    margin: auto;
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
    padding: 3.3rem;
    top: 20%;
    left: 50%;
    margin-left: calc(500px - (500px * 1.5));
  }

  @media ${device.laptop} {
    width: var(--home-dsktp-w);
    height: var(--home-dsktp-h);
    display: block;
    position: absolute;
    padding: 3rem;
    top: 20vh;
    left: 50%;
    margin-left: calc(var(--home-dsktp-w) - (var(--home-dsktp-w) * 1.5));
  }

  @media ${device.desktop} {
    width: var(--home-dsktp-w);
    height: calc(var(--home-dsktp-h) * 1.25);
    display: block;
    position: absolute;
    padding: 4rem;
    top: 30vh;
    left: 50%;
    margin-left: calc(var(--home-dsktp-w) - (var(--home-dsktp-w) * 1.5));
  }
`;
const IntroMobile = styled.div`
  background-color: var(--clr-white);
  display: flex;
  padding: 2rem;

  @media ${device.tablet} {
    display: none;
  }
`;

const Hide = styled.button`
  width: 50px;
  height: 50px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background: none;
  font-size: 2rem;
  color: var(--clr-dark);
  cursor: pointer;

  @media ${device.laptopL} {
    font-size: 3rem;
    padding: 2rem;
  }
`;

const LeafPalmLeft = styled.div`
  width: 13rem;
  height: 15rem;
  background-image: url(${leaf1});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 270px;
  left: -120px;
  z-index: 800;
  filter: drop-shadow(40px -5px 3px #343b3f20);

  @media ${device.mobileS} {
    width: 15rem;
    height: 18rem;
    top: 250px;
    left: -120px;
  }
  @media ${device.tablet} {
    width: 19rem;
    top: 700px;
  }
  @media ${device.laptop} {
    top: 800px;
    left: -160px;
  }
  @media ${device.desktop} {
  }
`;

const LeafStarRight = styled.div`
  width: 14rem;
  height: 20rem;
  background-image: url(${leaf2});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: -630px;
  right: -150px;
  z-index: 0;
  filter: drop-shadow(-20px 17px 4px #343b3f30);

  @media ${device.mobileS} {
    width: 9rem;
    height: 14rem;
    bottom: -630px;
    right: 0px;
  }
  @media ${device.tablet} {
    z-index: 200;
    width: 11rem;
    bottom: -800px;
  }
  @media ${device.laptop} {
    bottom: -330px;
  }
  @media ${device.desktop} {
  }
`;

const MontseraLeft = styled.div`
  width: 15rem;
  height: 20rem;
  background-image: url(${leaf3});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  bottom: -1220px;
  left: -200px;
  transform: rotate(130deg);
  filter: drop-shadow(10px -40px 3px #343b3f20);

  @media ${device.mobileS} {
    width: 19rem;
    height: 20rem;
    bottom: -1240px;
    left: -240px;
  }
  @media ${device.tablet} {
    bottom: -1240px;
    left: -180px;
  }
  @media ${device.laptop} {
    bottom: -1000px;
    left: -220px;
  }
  @media ${device.desktop} {
  }
`;
const LeafPalmRight = styled.div`
  width: 9rem;
  height: 15rem;
  background-image: url(${leaf4});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 2540px;
  right: 0px;
  z-index: 300;
  filter: drop-shadow(-30px -5px 3px #343b3f30);

  @media ${device.mobileS} {
    width: 9rem;
    height: 12rem;
    top: 2250px;
    right: 0px;
  }
  @media ${device.mobileL} {
    width: 9rem;
    height: 14rem;
    top: 2500px;
    right: 0px;
  }
  @media ${device.tablet} {
    width: 12rem;
    height: 18rem;
    top: 2300px;
    right: 0px;
  }
  @media ${device.laptop} {
    top: 2000px;
  }
  @media ${device.desktop} {
  }
`;
