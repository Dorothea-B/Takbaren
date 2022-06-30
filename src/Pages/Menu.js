import React, { useState } from "react";
import { device } from "../toolcomponents/Devices";
import {Link, NavLink, Outlet} from "react-router-dom"

import "../index.css";
import styled from "styled-components/macro";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import MenuFood from "./MenuFood";
import MenuDrink from "./MenuDrink";
import ScrollUpBtn from "../toolcomponents/ScrollUpBtn";
import GoToTop from "../toolcomponents/GoToTop";

import {
  PagesHeading,
  ImageText,
  PagesImageOverlay,
} from "../globalStyleComponents";

const query = `
  *[ _type == 'menuHeader' ] { title,
    "image": image.asset->{url}
  }
`;

const Menu = () => {
  const { data = [] } = useQuery("menuHeader", () => sanity.fetch(query));
  const [menuHeader] = data;
  const [currentTab, setCurrentTab] = useState("1");
 
 

  const checkActive = () => {
   
    return currentTab === true ;
  }

  if (!menuHeader) {
    return <h1>Loading…</h1>;
  }

  return (
    <>
      <ImageDiv bgimg={menuHeader.image.url} alt='menu-page-header'>
        <PagesImageOverlay></PagesImageOverlay>
        <ImageText>
          <PagesHeading>{menuHeader.title}</PagesHeading>
        </ImageText>
      </ImageDiv>




      <MenuWrapper>
       
        <TabDiv>
         
         <Tab to={"/menu/drinks"} activeClassName='active' isActive={checkActive} > Drinks </Tab>
         <Tab to="/menu/food" activeClassName='active'> Food </Tab>

        </TabDiv>
        
        {/* This is mounting sub-components based on routes defined in app.js */}
        <Outlet />

      </MenuWrapper>
      <ScrollUpBtn />
    </>
  );
};

export default Menu;

const ImageDiv = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-image: url(${(props) => props.bgimg});
  background-size: cover;
  background-repeat: no-repeat;


  @media ${device.mobileS} {
    height: 300px;
  }
  @media ${device.mobileL} {
    height: 300px;
  }
  @media ${device.tablet} {
    height: 500px;
  }
  @media ${device.laptop} {
    height: 680px;
  }
  @media ${device.desktop} {
    height: 800px;
  }
`;

const MenuWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    margin-top: 2rem;
  }
`;

const TabDiv = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    color: rgba(52, 59, 63, 0.7);
    font-family: "Playfair Display", serif;
    font-size: 1.3em;
    font-style: italic;

    cursor: pointer;
    padding: 25px;
    width: 100%;
    background-color: transparent;
    transition: all 0.1s ease-in-out;
  }
  button:hover {
    color: var(--clr-grey);
  }
  button:disabled {
    border-block-end: 4px solid var(--clr-grey);
    color: var(--clr-grey);
  }
`;

const Content = styled.div``;

const Tab = styled(NavLink)`
    border: none;
    color: rgba(52, 59, 63, 0.7);
    font-family: "Playfair Display", serif;
    font-size: 1.3em;
    font-style: italic;
    cursor: pointer;
    padding: 25px;
    width: 100%;
    background-color: transparent;
    transition: all 0.1s ease-in-out;

    &:hover {
    color: var(--clr-grey);
  }

    &.active {
    border-block-end: 4px solid var(--clr-grey);
    color: var(--clr-grey);
    }
`;
