
  /* background-image: url("./assets/Background.png"); */

  import React from "react";
  import styled from "styled-components/macro";
  import { device } from "./Devices";



  import top from '../assets/Backgrounds/BG_top.svg'

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