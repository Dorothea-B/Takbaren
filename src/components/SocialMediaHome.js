import React from "react";
import InstaFeed from './InstaFeed'
import styled from "styled-components/macro";


import {
  HeadingDark,
  CardSpacing,
} from "../globalStyleComponents";
  


const SocialMediaHome = () => {
  return (
    <CardSpacing>
      <HeadingDark> ~Follow us @takbarenvisby~ </HeadingDark>
      <InstaFeed  limit={12} />
    </CardSpacing>
  );
};

export default SocialMediaHome;
