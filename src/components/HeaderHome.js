import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Logo from "../assets/Takbar_logo.png";

import NavBarHome from "./NavBarHome";

const HeaderHome = () => {
  const [navbar, setNavbar] = useState(false);
  const [logo, setLogo] = useState(false);

  const fixedNavbar = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", fixedNavbar);

  const shrinkLogo = () => {
    if (window.scrollY >= 60) {
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
          <Img
            src={Logo}
            alt='logo'
            className={logo ? "shrink-logo" : "static-logo"}
          />
        </Link>
        <NavBarHome />
      </HeaderSection>
    </>
  );
};

export default HeaderHome;

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  margin: 1rem;
`;
