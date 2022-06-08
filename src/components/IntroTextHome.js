import React from "react";
import styled from "styled-components/macro";

import { useQuery } from "react-query";
import { sanity } from "../sanity";
import {
  HeadingDark,
  SubHeadingRed,
  RegularText,
  VerySmallText,
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
      <HeadingDark>{introText.title}</HeadingDark>
      <IntroQuote>{introText.description}</IntroQuote>
      <VerySmallText>{introText.link}</VerySmallText>
    </section>
  );
};

export default IntroTextHome;
