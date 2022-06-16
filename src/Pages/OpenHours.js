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

import { CardLight, Weather } from "../Pages/Home";

import WeatherApp from "../components/WeatherApp";

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
      <div>
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
        </CardLight>
      </div>
      <div>
        <TextDiv></TextDiv>
        <Weather>
          <WeatherApp />
        </Weather>
      </div>
    </PagesWrapper>
  );
};

export default OpenHours;

const TextDiv = styled.div`
  padding: 2rem;
  width: 100%;
  height: 150px;
  border: solid 2px #fff;
  max-width: 600px;
`;
