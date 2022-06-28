import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import styled from "styled-components/macro";
import "../index.css";

import MenuFood from "../Pages/MenuFood";
import MenuDrink from "../Pages/MenuDrink";

const MenuTabs = () => {
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

  return (
    
    <MenuWrapper>

      {/* <Routes>
        <Route path=":id" element={<Chat />} />
      </Routes> */}



		
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
  );
};

export default MenuTabs;

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

const Content = styled.div`
  button {
    font-size: 15px;
  }
`;
