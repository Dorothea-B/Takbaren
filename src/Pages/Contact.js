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
      <div>
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
        </CardLight>
      </div>
      <div>
        <TextDiv></TextDiv>
        <MapDiv></MapDiv>
      </div>
    </PagesWrapper>
  );
};
export default Contact;

const TextDiv = styled.div`
  padding: 2rem;
  width: 100%;
  height: 185px;
  border: solid 2px #fff;
  max-width: 600px;
`;

const MapDiv = styled.div`
  padding: 2rem;
  width: 100%;
  height: 300px;
  border: solid 2px #000;
  max-width: 600px;
`;
