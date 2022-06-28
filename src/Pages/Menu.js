import React from "react";
import styled from "styled-components/macro";
import { device } from "../toolcomponents/Devices";
import { Routes, Route } from 'react-router-dom';

import "../index.css";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import MenuTabs from "../components/MenuTabs";
import ScrollUpBtn from '../components/ScrollUpBtn';

import MenuFood from "../Pages/MenuFood";
import MenuDrink from "../Pages/MenuDrink";

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


const ImageDiv = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-image: url(${(props) => props.bgimg});
  background-size: cover;


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

const Menu = () => {
  const { data = [] } = useQuery("menuHeader", () => sanity.fetch(query));
  const [menuHeader] = data;

  if (!menuHeader) {
    return <h1>Loading…</h1>;
  }

  return (
    <>

      <Routes>

        <Route path='/mtab/*' element={<MenuTabs />}>
          <Route path=":1" element={<MenuFood />} />
          <Route path=":2" element={<MenuFood />} />
				</Route>
      </Routes>



      <ImageDiv bgimg={menuHeader.image.url}>
        <PagesImageOverlay></PagesImageOverlay>
        <ImageText>
          <PagesHeading>{menuHeader.title}</PagesHeading>
        </ImageText>
        <img src={menuHeader.image.url} alt="header menu"/>
      </ImageDiv>
      <MenuTabs />
      <ScrollUpBtn />
    </>
  );
};

export default Menu;
