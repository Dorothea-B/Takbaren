import React, { useState } from "react";
import { device } from "../toolcomponents/Devices";

import "../index.css";
import styled from "styled-components/macro";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import MenuFood from "./MenuFood";
import MenuDrink from "./MenuDrink";
import ScrollUpBtn from "../toolcomponents/ScrollUpBtn";

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
  const tabs = [
    {
      id: 1,
      tabTitle: "Drinks",
      content: <MenuDrink />,
    },
    {
      id: 2,
      tabTitle: "Food",
      content: <MenuFood />,
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

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
        <img src={menuHeader.image.url} alt='menu-page-header' />
      </ImageDiv>
      <MenuWrapper>
        <TabDiv>
          {tabs.map((tab, i) => (
            <button
              className='__tab'
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
            >
              {tab.tabTitle}
            </button>
          ))}
        </TabDiv>
        <Content>
          {tabs.map((tab, i) => (
            <div key={i}>
              {currentTab === `${tab.id}` && (
                <div>
                  <div>{tab.content}</div>
                </div>
              )}
            </div>
          ))}
        </Content>
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

  @media ${device.mobileS} {
    height: fit-content;
  }
  @media ${device.mobileL} {
    height: fit-content;
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
