import React from "react";
import styled from "styled-components/macro";
import "../index.css";

import { useQuery } from "react-query";
import { sanity } from "../sanity";
import BlockContent from "@sanity/block-content-to-react";
import BlockRenderer from "../BlockRenderer";

import { device } from "../toolcomponents/Devices";

import {
  PagesHeading,
  ImageText,
  PagesImageOverlay,
  MediumHeadingDark,
  PagesWrapper,
} from "../globalStyleComponents";

import { CardLight } from "./Home";
import Loader from "../components/Loader";

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
    return <Loader />;
  }

  return (
    <>
      <ImageDiv bgimg={openHours.image.url} alt='open-hours-page-header'>
        <PagesImageOverlay></PagesImageOverlay>
        <ImageText>
          <PagesHeading>{openHours.title}</PagesHeading>
        </ImageText>
      </ImageDiv>

      <PagesWrapper>
        <OpenWrapper>
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

          <CardLight>
            <MediumHeadingDark>{openHours.weatherTitle}</MediumHeadingDark>
            <WeatherPageWrap>
              <WeatherPage />
            </WeatherPageWrap>
          </CardLight>
        </OpenWrapper>
      </PagesWrapper>
    </>
  );
};

export default OpenHours;

const WeatherPageWrap = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`;

const OpenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  @media ${device.mobileS} {
    width: calc(100% - 30px);
  }

  @media ${device.tablet} {
    width: 90%;
  }

  @media ${device.laptop} {
    width: calc(100% - 100px);

    min-width: 1000px;
    max-width: 1500px;
  }
  @media ${device.desktop} {
    width: calc(100% - 100px);

    min-width: 1000px;
    max-width: 1900px;
  }
`;

const ImageDiv = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-image: url(${(props) => props.bgimg});
  background-size: cover;

  @media ${device.mobileS} {
    height: 300px;
  }
  @media ${device.mobileL} {
    height: 300px;
  }
  @media ${device.tablet} {
    height: 500px;
  }
  @media ${device.laptop} {
    height: 680px;
  }
  @media ${device.desktop} {
    height: 800px;
  }
`;
