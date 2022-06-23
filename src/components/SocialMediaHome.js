import React from "react";
import InstaFeed from "./InstaFeed";
import styled from "styled-components/macro";
import { device } from "../toolcomponents/Devices";
import { CardSpacing, MediumHeadingDark } from "../globalStyleComponents";

const MediumHeadingDarkSOME = styled(MediumHeadingDark)`
  margin-top: 1.3rem;

  @media ${device.mobileS} {
  font-size: 0.8em;
  }
  @media ${device.mobileL} {
    font-size: 1.3em;
  }
  @media ${device.tablet} {
    font-size: 1.5em;
  }
`;

const SocialMediaHome = () => {
  return (
    <CardSpacing>
      <MediumHeadingDarkSOME>
        {" "}
        » Follow us @takbarenvisby «{" "}
      </MediumHeadingDarkSOME>
      <InstaFeed limit={8} />
    </CardSpacing>
  );
};

export default SocialMediaHome;
