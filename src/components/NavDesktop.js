import React from "react";
import styled from "styled-components/macro";
import "../index.css";

const NavDesktop = ({ open }) => {
  return (
    <NavList open={open}>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/openinghours'>Open</a>
      </li>
      <li>
        <a href='/menu'>Menu</a>
      </li>
      <li>
        <a href='/contact'>Contact</a>
      </li>
    </NavList>
  );
};

export default NavDesktop;

const NavList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  margin: 0;
  gap: 3rem;
  text-transform: uppercase;
  color: var(--clr-light);
  z-index: 1;
  position: fixed;
  font-size: clamp(1rem, 2vw, 1.5rem);
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 24px;
    position: fixed;
  }

  li a:after {
    content: "";
    display: block;
    height: 1.5px;
    background: var(--clr-light);
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  li a:hover:after {
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
