import React from "react";
import styled from "styled-components/macro";
import "../index.css";

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
      <ScrollUp onClick={handleScrollUp}>UP</ScrollUp>
    </div>
  );
};

export default ScrollUpBtn;

const ScrollUp = styled.button`
  background-color: var(--clr-grey);
  color: #fff;
  cursor: pointer;
  border: none;
  padding: 1rem;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  margin: 1rem;
`;
