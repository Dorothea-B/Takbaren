import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import "../index.css";
import { device } from "../toolcomponents/Devices";

import { useQuery } from "react-query";
import { sanity } from "../sanity";
import GoToTop from "../toolcomponents/GoToTop";

const query = `
  *[ _type == 'menuHome' ] { descriptionOne, descriptionTwo, 
    "image": image.asset->{url} }
`;

const MenuHome = () => {
  const { data = [] } = useQuery("menuHome", () => sanity.fetch(query));

  const [menuHome] = data;

  if (!menuHome) {
    return <h1>Loading…</h1>;
  }

  return (
    <section>
      <MenuImageDiv bgimg={menuHome.image.url} alt='food-and-drinks-menu'>
        <Link to='/menu/food'>
          <OverlayFood>
            <Dark id='dark'></Dark>
            <P>{menuHome.descriptionOne}</P>
          </OverlayFood>
        </Link>
        <Link to='/menu/drinks'>
          <OverlayDrinks>
            <Dark id='dark'></Dark>
            <DarkMobile></DarkMobile>
            <P>{menuHome.descriptionTwo}</P>
          </OverlayDrinks>
        </Link>
      </MenuImageDiv>
      <GoToTop />
    </section>
  );
};

export default MenuHome;

const MenuImageDiv = styled.div`
  position: relative;
  background: url(${(props) => props.bgimg});
  background-size: cover;

  @media ${device.mobileS} {
    height: calc(var(--home-mobile-h) * 0.8);
    background-position: center bottom;
  }
  @media ${device.mobileL} {
    height: var(--home-mobile-h);
  }
  @media ${device.tablet} {
    background-position: 90% 50%;
    height: var(--home-dsktp-h);
  }
  @media ${device.laptop} {
    height: calc(var(--home-dsktp-h) * 1.3);
    background-position: center bottom;
  }
  @media ${device.laptopL} {
    height: calc(var(--home-large-dsktp-h) * 1.3);
    background-position: center bottom;
  }
`;

const Dark = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(52, 59, 63, 0.4);
  background-blend-mode: multiply;
  transition-duration: 0.2s;
  opacity: 0;
  z-index: 100;
`;

const OverlayFood = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    &:hover ${Dark} {
      opacity: 1;
    }
  }
`;

const DarkMobile = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(52, 59, 63, 0.4);
  background-blend-mode: multiply;
  transition-duration: 0.2s;
  opacity: 1;
  z-index: 50;

  @media ${device.laptop} {
    opacity: 0;
  }
`;

const OverlayDrinks = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    &:hover ${Dark} {
      opacity: 1;
    }
  }
`;

const P = styled.p`
  color: var(--clr-white);
  text-transform: uppercase;
  font-size: 28px;
  text-decoration: none;
  z-index: 500;

  @media (min-width: 1024px) {
    font-size: 2em;
  }
`;
