import React from "react";
import styled from "styled-components/macro";
import "../index.css";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import {
  PagesHeading,
  SubHeadingDark,
  DarkText,
  ImageDiv,
  ImageText,
  PagesImageOverlay,
  PagesWrapper,
} from "../globalStyleComponents";

import { CardLight } from "../Pages/Home";

const query = `
  *[ _type == 'openHours' ] { title, 
    "image": image.asset->{url},
    description, weatherTitle, weatherDescription }
`;

const OpenHours = () => {
  const { data = [] } = useQuery("openHours", () => sanity.fetch(query));

  const [openHours] = data;

  if (!openHours) {
    return <h1>Loading…</h1>;
  }

  return (
    <PagesWrapper>
      <ImageDiv>
        <PagesImageOverlay></PagesImageOverlay>
        <ImageText>
          <PagesHeading>{openHours.title}</PagesHeading>
        </ImageText>
        <img src={openHours.image.url} />
      </ImageDiv>
      <CardLight>
        <DarkText>{openHours.description}</DarkText>
        <SubHeadingDark>{openHours.weatherTitle}</SubHeadingDark>
        <DarkText>{openHours.weatherDescription}</DarkText>
        {/* <MapHome /> */}
      </CardLight>
    </PagesWrapper>
  );
};

export default OpenHours;
