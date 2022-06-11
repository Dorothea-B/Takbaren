import React from "react";

import { RoundBtn } from "../globalStyleComponents";

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
      <RoundBtn onClick={handleScrollUp}>
        <img src={Arrow} alt="arrow-up" />
      </RoundBtn>
    </div>
  );
};

export default ScrollUpBtn;
