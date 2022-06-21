/* background-image: url("./assets/Background.png"); */

import React from "react";
import styled from "styled-components/macro";
import { device } from "./Devices";

import top from "../assets/Backgrounds/BG_top.svg";
import right from "../assets/Backgrounds/BG_right.svg";
import bottom from "../assets/Backgrounds/BG_bottom.svg";
import left from "../assets/Backgrounds/BG_left.svg";

const BGWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: -200;
`;
const Relative = styled.div`
  position: relative;
`;

const Top = styled.div`
  position: absolute;
  background-image: url(${top});
  background-repeat: repeat-x;
  width: 100%;
  height: 13rem;

  @media ${device.mobileS} {
    top: -50px;

    /* background-color: green; */
  }
  @media ${device.mobileL} {
    top: -60px;
    /* background-color: yellow; */
  }
  @media ${device.tablet} {
    top: -80px;
    /* background-color: blue; */
  }
  @media ${device.laptop} {
    top: -80px;
    /* background-color: red; */
  }
  @media ${device.laptopL} {
    top: -90px;
    /* background-color: purple; */
  }
  @media ${device.desktop} {
    top: -120px;
    height: 15rem;
    /* background-color: white; */
  }
`;
const Left = styled.div`
  position: absolute;
  background-image: url(${left});
  background-repeat: repeat-y;
  width: 12rem;
  height: 100vh;
  top: 10rem;

  @media ${device.mobileS} {
    left: -50px;
    width: 8rem;
    top: 3rem;
  }
  @media ${device.mobileL} {
    left: -50px;
    width: 12rem;
    top: 5rem;
  }
  @media ${device.tablet} {
    left: -70px;
    top: 6rem;
    width: 14rem;
  }
  @media ${device.laptop} {
    left: -70px;
    width: 15rem;
    top: 6rem;
  }
  @media ${device.laptopL} {
    left: -80px;
  }
  @media ${device.desktop} {
    left: -50px;
  }
`;
const Right = styled.div`
  position: absolute;

  background-image: url(${right});
  background-repeat: repeat-y;
  height: 100vh;
  width: 9rem;
  top: 10rem;
  right: -50px;
  z-index: 300;

  @media ${device.mobileS} {
    /* right: 50px; */
  }
  @media ${device.mobileL} {
    /* right: 50px; */
  }
  @media ${device.tablet} {
    /* right: 50px; */
    top: 6rem;
    width: 12rem;
  }
  @media ${device.laptop} {
    /* right: 50px; */
  }
  @media ${device.laptopL} {
    /* right: -50px; */
  }
  @media ${device.desktop} {
    /* right: -50px; */
  }
`;
const Bottom = styled.div`
  position: absolute;
  background-image: url(${bottom});
  background-repeat: repeat-x;
  width: 100%;
  height: 13rem;
  top: calc(100vh - 140px);

  @media ${device.mobileS} {
    top: calc(100vh - 100px);
  }
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
  }
  @media ${device.desktop} {
  }
`;

const Background = () => {
  return (
    <BGWrapper>
      <Relative>
        <Top />
        <Bottom />
        <Left />
        <Right />
      </Relative>
    </BGWrapper>
  );
};

export default Background;
