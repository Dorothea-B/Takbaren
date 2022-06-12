import React from "react";
import styled from "styled-components/macro";

import { useQuery } from "react-query";
import { sanity } from "../sanity";
import {
  HeadingDark,
  SubHeadingRed,
  RegularText,
  VerySmallText,
  SquareBtn,
} from "../globalStyleComponents";

const query = `
  *[ _type == 'introTextHome' ] { title, description, link }
`;

const IntroQuote = styled(SubHeadingRed)`
  font-size: 18px;
  font-weight: 600;
`;

const IntroTextHome = () => {
  const { data = [] } = useQuery("introTextHome", () => sanity.fetch(query));

  const [introText] = data;

  if (!introText) {
    return <h1>Loading…</h1>;
  }

  return (
    <section>
      <p>{introText.title}</p>
      <IntroQuote>{introText.description}</IntroQuote>
      {/* <VerySmallText>{introText.link}</VerySmallText> */}
      <a href={introText.link} target="_blank">
        {/* fixa med target blank  */}
        <SquareBtn>Read more</SquareBtn>
      </a>
    </section>
  );
};

export default IntroTextHome;
