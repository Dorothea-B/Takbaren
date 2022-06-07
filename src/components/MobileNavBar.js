import React, { useState } from "react";
import styled from "styled-components/macro";
import "../index.css";

const MobileNavBar = () => {
  const [isActive, setActive] = useState(false);

  const toggleMobileNavBar = () => {
    setActive(!isActive);
    console.log(toggleMobileNavBar);
  };

  const scroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <BurgerBar
        toggle
        // className={isActive ? "toggleActive" : "toggle"}
        onClick={toggleMobileNavBar}
      >
        <div />
        <div />
        <div />
      </BurgerBar>

      {/* <ToggleSection
        className={isActive ? "toggle-active" : "toggle"}
        onClick={toggleMobileNavBar}
      ></ToggleSection> */}
      <NavBar
        toggle
        className={isActive ? "nav-active" : "nav-hidden"}
        onClick={toggleMobileNavBar}
      >
        <ul>
          <li>
            <a
              href="/"
              onClick={() => {
                scroll();
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/openinghours"
              onClick={() => {
                scroll();
              }}
            >
              Open
            </a>
          </li>
          <li>
            <a
              href="/menu"
              onClick={() => {
                scroll();
              }}
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="/contact"
              onClick={() => {
                scroll();
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </NavBar>
    </>
  );
};

export default MobileNavBar;

const BurgerBar = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ toggle }) => (toggle ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ toggle }) => (toggle ? "rotate(0)" : "rotate(45deg)")};
    }

    :nth-child(2) {
      opacity: ${({ toggle }) => (toggle ? "1" : "0")};
      transform: ${({ toggle }) =>
        toggle ? "translateX(0px)" : "translateX(20)"};
    }

    :nth-child(3) {
      transform: ${({ toggle }) => (toggle ? "rotate(0)" : "rotate(-45deg)")};
    }
  }
`;

const NavBar = styled.nav`
  &.nav-active {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--clr-grey);
    color: var(--clr-pink);
    transform: ${({ toggle }) =>
      toggle ? "translateX(0)" : "translateX(-100%)"};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    &.nav-hidden {
      display: none;
    }
  }

  @media (max-width: 576px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }

  a {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: inherit;
    text-decoration: none;
  }
`;
