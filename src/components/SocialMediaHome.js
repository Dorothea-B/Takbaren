import React from "react";
import InstaFeed from "./InstaFeed";
import styled from "styled-components/macro";

import { CardSpacing, MediumHeadingDark } from "../globalStyleComponents";

const MediumHeadingDarkSOME = styled(MediumHeadingDark)`
  margin-top: 1.3rem;
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
