
  /* background-image: url("./assets/Background.png"); */

  import React from "react";
  import styled from "styled-components/macro";
  import { device } from "./Devices";

  import top from '../assets/Backgrounds/BG_left.svg'
  import right from '../assets/Backgrounds/BG_left.svg'
  import bottom from '../assets/Backgrounds/BG_left.svg'
  import left from '../assets/Backgrounds/BG_left.svg'

  const BGWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: -200;
  `

  const Top = styled.div`
  position: absolute;
  /* background-color: red; */
  background-image: url(${top});
  background-repeat: repeat-x;
  width: 100%;
  height: 13rem;


  @media ${device.mobileS} {
    top: -50px;
    background-color: green;
  }
  @media ${device.mobileL} {
    top: -50px;
    background-color: yellow;
  }
  @media ${device.tablet} {
    top: -50px;
    background-color: blue;
  }
  @media ${device.laptop} {
    top: -50px;
    background-color: red;
  }
  @media ${device.laptopL} {
    top: -50px;
    background-color: purple;
  }
  @media ${device.desktop} {
    top: -50px;
    background-color: white;
  }

  `


  const Background = () => {

    return (
    <BGWrapper>
    <Top />
    {/* <img src={top}></img> */}
    </BGWrapper>

    )
  }

  export default Background