import React from "react";
import styled from "styled-components/macro";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import {
  HeadingDark,
  SubHeadingDark,
  SubHeadingRed,
} from "../globalStyleComponents";

const query = `
  *[ _type == 'contactHome' ] { title, number, mail }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
      </ContactWrapper>
    </div>
  );
};
export default ContactHome;
