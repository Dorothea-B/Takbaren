import React from "react";
import styled from "styled-components/macro";
import { RoundBtn } from "../globalStyleComponents";

import Arrow from "../assets/Arrow-up.png";

const ScrollUpBtn = () => {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BtnWrapper>
      <RoundBtn onClick={handleScrollUp}>
        <img src={Arrow} alt='arrow-up' />
      </RoundBtn>
    </BtnWrapper>
  );
};

export default ScrollUpBtn;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
