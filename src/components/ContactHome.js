import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import {
  HeadingDark,
  SubHeadingDark,
  SubHeadingRed,
  SquareBtn,
  CardSpacing,
} from "../globalStyleComponents";

const query = `
  *[ _type == 'contactHome' ] { title, number, mail }
`;

const ContactWrapper = styled.div`
  
  & > * {
    flex: 1;
  }

`;

const ContactHome = () => {
  const { data = [] } = useQuery("contactHome", () => sanity.fetch(query));

  const [contactHome] = data;

  if (!contactHome) {
    return <h1>Loading…</h1>;
  }

  return (
    <CardSpacing>
      <HeadingDark>{contactHome.title}</HeadingDark>
      <ContactWrapper>
        <SubHeadingRed>{contactHome.number}</SubHeadingRed>
        <SubHeadingRed>{contactHome.mail}</SubHeadingRed>
        <Link to="/contact">
          <SquareBtn>More</SquareBtn>
        </Link>
      </ContactWrapper>
    </CardSpacing>
  );
};
export default ContactHome;
