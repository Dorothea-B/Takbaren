import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import "../index.css";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

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
    <MenuSection>
      <ImageDiv>
        <Img src={menuHome.image.url} />
        <DescriptionDiv>
          <Description>
            <Link to="/menu">
              <OverlayFood>
                <P>{menuHome.descriptionOne}</P>
              </OverlayFood>
            </Link>
            <Link to="/menu">
              <OverlayDrinks>
                <P>{menuHome.descriptionTwo}</P>
              </OverlayDrinks>
            </Link>
          </Description>
        </DescriptionDiv>
      </ImageDiv>
    </MenuSection>
  );
};

export default MenuHome;

const MenuSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageDiv = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 100%;
`;

const DescriptionDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Description = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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

  @media (max-width: 1024px) {
    background-color: rgba(52, 59, 63, 0.4);
    background-blend-mode: multiply;
  }

  @media (min-width: 1024px) {
    transition-duration: 0.2s;
    background-color: rgba(52, 59, 63, 0.4);
    background-blend-mode: multiply;
    opacity: 0;

    &:hover {
      opacity: 1;
      background-color: rgba(52, 59, 63, 0.4);
      background-blend-mode: multiply;
    }
  }
`;

const OverlayDrinks = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  /* left: 194px; */
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    opacity: 0;

    &:hover {
      opacity: 1;
      background-color: rgba(52, 59, 63, 0.4);
      background-blend-mode: multiply;
    }
  }
`;

const P = styled.p`
  color: var(--clr-white);
  text-transform: uppercase;
  font-size: 28px;
  text-decoration: none;

  @media (min-width: 1024px) {
    font-size: 2em;
  }
`;
