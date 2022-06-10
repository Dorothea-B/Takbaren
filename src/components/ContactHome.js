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
} from "../globalStyleComponents";

const query = `
  *[ _type == 'contactHome' ] { title, number, mail }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactHome = () => {
  const { data = [] } = useQuery("contactHome", () => sanity.fetch(query));

  const [contactHome] = data;

  if (!contactHome) {
    return <h1>Loading…</h1>;
  }

  return (
    <div>
      <HeadingDark>{contactHome.title}</HeadingDark>
      <ContactWrapper>
        <SubHeadingDark>{contactHome.number}</SubHeadingDark>
        <SubHeadingDark>{contactHome.mail}</SubHeadingDark>
        <Link to="/contact">
          <SquareBtn>More</SquareBtn>
        </Link>
      </ContactWrapper>
    </div>
  );
};
export default ContactHome;
