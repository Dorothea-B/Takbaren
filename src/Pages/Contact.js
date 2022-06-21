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
  PagesCardLIght,
} from "../globalStyleComponents";

import MapHome from "../components/MapHome";

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
    <>
      <ImageDiv>
        <PagesImageOverlay></PagesImageOverlay>
        <ImageText>
          <PagesHeading>{contact.title}</PagesHeading>
        </ImageText>
        <img src={contact.image.url} />
      </ImageDiv>

      <PagesWrapper>
        <PagesCardLIght>
          <SubHeadingDark>{contact.number}</SubHeadingDark>
          <SubHeadingDark>{contact.mail}</SubHeadingDark>
          <p>add fb & ig symbol</p>

          <SubHeadingDark>{contact.address}</SubHeadingDark>
          <DarkText>
            Här ska en sanity description in men fick bara error får se om vi
            kan titta på det
          </DarkText>
        </PagesCardLIght>
        <MapPages>
          <MapHome />
        </MapPages>
      </PagesWrapper>
    </>
  );
};
export default Contact;

const MapPages = styled.div`
  width: 800px;
`;
