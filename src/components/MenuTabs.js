import React, { useState } from "react";

import styled from "styled-components/macro";
import "../index.css";

import {
  HeadingDark,
  PagesHeading,
  SubHeadingDark,
  SubHeading,
  SubHeadingLight,
  LightText,
  DarkText,
  ImageDiv,
  ImageText,
  PagesImageOverlay,
  PagesWrapper,
  PagesCardLIght,
} from "../globalStyleComponents";

import MenuFood from "../Pages/MenuFood";
import MenuDrinks from "../Pages/MenuDrinks";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Drinks",
      title: "Drink Menu",
      content: <MenuDrinks />,
    },
    {
      id: 2,
      tabTitle: "Food",
      title: "Food Menu",
      content: <MenuFood />,
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <MenuWrapper>
      <TabDiv>
        {tabs.map((tab, i) => (
          <button
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
                <p>{tab.title}</p>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </Content>
    </MenuWrapper>
  );
};

export default Tabs;

const MenuWrapper = styled.div`
  width: calc(100% - 30px);
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
    color: var(--clr-grey);
    font-family: "Playfair Display", serif;
    font-size: 1.3em;
    font-style: italic;
    border-block-end: 2px solid var(--clr-grey);
    cursor: pointer;
    padding: 25px;
    width: 100%;
    background-color: transparent;
    transition: all 0.5s ease-out;
  }

  button:hover {
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
  }

  button:disabled {
    border-block-end: 4px solid var(--clr-grey);
  }
`;

const Content = styled.div`
  padding: 50px 80px;
  background-color: var(--clr-white);
  font-weight: 300;
  line-height: 30px;
  font-size: 16px;
  text-align: justify;

  button {
    font-size: 15px;
  }
`;
