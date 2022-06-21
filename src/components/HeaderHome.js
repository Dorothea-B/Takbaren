import react, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Logo from "../assets/Takbar_logo.png";

import NavBarHome from "./NavBarHome";

const HeaderHome = () => {
  const [navbar, setNavbar] = useState(false);
  const [logo, setLogo] = useState(false);

  const fixedNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", fixedNavbar);

  const shrinkLogo = () => {
    if (window.scrollY >= 50) {
      setLogo(true);
    } else {
      setLogo(false);
    }
  };
  window.addEventListener("scroll", shrinkLogo);

  return (
    <>
      <HeaderSection className={navbar ? "scroll-nav" : "static-nav"}>
        <Link to='/' className='logo'>
          <img
            src={Logo}
            alt='logo'
            className={logo ? "shrink-logo" : "logo"}
          />
        </Link>
        <NavBarHome />
      </HeaderSection>
    </>
  );
};

export default HeaderHome;

const HeaderSection = styled.section`
  /* position: fixed;
  z-index: 999; */
`;

const Img = styled.img`
  /* max-width: 50%;
  display: flex;
  justify-content: center;
  margin: 1rem; */

  //   @media (min-width: 768px) {
  //     max-width: 30%;
  //   }
  /* .shrink-logo {
    display: flex;
    justify-content: center;
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    max-width: 20%;
  } */
  /* @media (min-width: 768px) {
    max-width: 50%;
  } */
`;
