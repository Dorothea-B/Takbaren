import React from "react";
import styled from "styled-components/macro";
import "../index.css";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import {
  HeadingDark,
  PagesHeading,
  SubHeadingDark,
  SubHeading,
  SubHeadingLight,
  LightText,
  DarkText,
  ImageDiv,
  ImageText,
  PagesImageOverlay,
  PagesWrapper,
} from "../globalStyleComponents";

import { CardLight } from "../Pages/Home";

const query = `
  *[ _type == 'contact' ] { title, 
    "image": image.asset->{url},
    number, mail, address }
`;

const Contact = () => {
  const { data = [] } = useQuery("contact", () => sanity.fetch(query));

  const [contact] = data;

  if (!contact) {
    return <h1>Loading…</h1>;
  }

  return (
    <PagesWrapper>
      <ImageDiv>
        <PagesImageOverlay></PagesImageOverlay>
        <ImageText>
          <PagesHeading>{contact.title}</PagesHeading>
        </ImageText>
        <img src={contact.image.url} />
      </ImageDiv>
      <CardLight>
        <SubHeadingDark>{contact.number}</SubHeadingDark>
        <SubHeadingDark>{contact.mail}</SubHeadingDark>
        <SubHeadingDark>{contact.address}</SubHeadingDark>
        <p>add fb & ig symbol</p>
        <p>map</p>
      </CardLight>
    </PagesWrapper>
  );
};
export default Contact;
