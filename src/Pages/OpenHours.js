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
  PagesCardLIght,
} from "../globalStyleComponents";

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
    <>
      <ImageDiv>
        <PagesImageOverlay></PagesImageOverlay>
        <ImageText>
          <PagesHeading>{openHours.title}</PagesHeading>
        </ImageText>
        <img src={openHours.image.url} />
      </ImageDiv>

      <PagesWrapper>
        <PagesCardLIght>
          <SubHeadingDark>{openHours.description}</SubHeadingDark>
        </PagesCardLIght>
        <div>
          <SubHeadingDark>{openHours.weatherTitle}</SubHeadingDark>
          <DarkText>{openHours.weatherDescription}</DarkText>
          <WeatherPages>
            <WeatherApp />
          </WeatherPages>
        </div>
      </PagesWrapper>
    </>
  );
};

export default OpenHours;

const WeatherPages = styled.div`
  max-width: 600px;
`;
