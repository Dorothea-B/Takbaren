import React from "react";
import styled from "styled-components/macro";
import "../index.css";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import BlockContent from "@sanity/block-content-to-react";
import BlockRenderer from "../BlockRenderer";

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

import Loader from "../components/Loader";

import MapHome from "../components/MapHome";

const query = `
  *[ _type == 'contact' ] { title, 
    "image": image.asset->{url},
    story }
`;

const Contact = () => {
  const { data = [] } = useQuery("contact", () => sanity.fetch(query));

  const [contact] = data;

  if (!contact) {
    return <Loader />;
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
          {/* <SubHeadingDark>{contact.number}</SubHeadingDark>
          <SubHeadingDark>{contact.mail}</SubHeadingDark>
          <p>add fb & ig symbol</p>

          <SubHeadingDark>{contact.address}</SubHeadingDark>
          <DarkText>
            Här ska en sanity description in men fick bara error får se om vi
            kan titta på det
          </DarkText> */}
          {contact.story && (
            <div>
              <BlockContent
                blocks={contact.story}
                serializers={{ types: { block: BlockRenderer } }}
              />
            </div>
          )}
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
