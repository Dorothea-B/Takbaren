import React from "react";
import styled from "styled-components/macro";
import "../index.css";

import { useQuery } from "react-query";
import { sanity } from "../sanity";
import BlockContent from "@sanity/block-content-to-react";
import BlockRenderer from "../BlockRenderer";

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

import { CardLight, HomePageWrapper, Weather } from "./Home";

import WeatherPage from "../components/WeatherPage";

const query = `
  *[ _type == 'openHours' ] { title, 
    "image": image.asset->{url},
    story, weatherTitle }
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
        <img src={openHours.image.url} alt='sunset' />
      </ImageDiv>

      <PagesWrapper>
        <HomePageWrapper>
          <CardLight>
            {openHours.story && (
              <div>
                <BlockContent
                  blocks={openHours.story}
                  serializers={{ types: { block: BlockRenderer } }}
                />
              </div>
            )}
          </CardLight>
          <div>
            <SubHeadingDark>{openHours.weatherTitle}</SubHeadingDark>

            <Weather>
              <WeatherPage />
            </Weather>
          </div>
        </HomePageWrapper>
      </PagesWrapper>
    </>
  );
};

export default OpenHours;

// const WeatherPages = styled.div`
//   max-width: 600px;
// `;
