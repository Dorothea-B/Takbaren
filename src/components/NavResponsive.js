import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import "../index.css";

const NavResponsive = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledMobileNav open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledMobileNav>
      <NavContainer open={open}></NavContainer>
      <NavList open={open} onClick={() => setOpen(!open)}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/openinghours'>Open</NavLink>
        </li>
        <li>
          <NavLink to='/menu/drinks'>Menu</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </NavList>
    </>
  );
};

export default NavResponsive;

const StyledMobileNav = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    cursor: pointer;
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) =>
      open ? "var(--clr-light)" : "var(--clr-grey)"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const NavContainer = styled.div`
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "block" : "none")};
    width: 90%;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(52, 59, 63, 0.4);
    background-blend-mode: multiply;
  }
`;

////DESKTOP/////

const NavList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  margin: 0;
  gap: 3rem;
  text-transform: uppercase;
  color: var(--clr-light);
  z-index: 1;
  font-size: clamp(1rem, 2vw, 1.5rem);
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 24px;
    position: fixed;
  }

  li:after {
    content: "";
    display: block;
    height: 1.5px;
    background: var(--clr-light);
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  li:hover:after {
    transform: scaleX(1);
    transition: transform 0.3s;
  }

  .active {
    color: var(--clr-light) !important;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
    background-color: var(--clr-grey);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;
