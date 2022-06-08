import React from "react";
import styled from "styled-components/macro";
import "../index.css";

import Arrow from "../assets/Arrow-up.png";

const ScrollUpBtn = () => {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      //   left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <ScrollUp onClick={handleScrollUp}>
        <img src={Arrow} />
      </ScrollUp>
    </div>
  );
};

export default ScrollUpBtn;

const ScrollUp = styled.button`
  background-color: var(--clr-grey);
  color: var(--clr-white);
  cursor: pointer;
  border: none;
  padding: 0.8rem;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  margin: 1rem;
`;
