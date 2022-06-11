import React from "react";
import styled from "styled-components/macro";
import "../index.css";

import NavMobile from "./NavMobile";

const NavBarHome = () => {
  return (
    <Nav>
      <NavMobile />
    </Nav>
  );
};

export default NavBarHome;

const Nav = styled.nav`
  background-color: var(--clr-grey);
  width: 100%;
  color: var(--clr-light);
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
