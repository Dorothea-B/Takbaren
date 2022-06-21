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
} from "../globalStyleComponents";

import { CardLight, HomePageWrapper, Map } from "./Home";

import Loader from "../components/Loader";

import MapHome from "../components/MapHome";
import { device } from "../toolcomponents/Devices";

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
        <img src={contact.image.url} alt='contact page header image'/>
      </ImageDiv>

      <PagesWrapper>
        <HomePageWrapper>
          <CardLight>
          
            {contact.story && (
              <div>
                <BlockContent
                  blocks={contact.story}
                  serializers={{ types: { block: BlockRenderer } }}
                />
              </div>
            )}
          </CardLight>

          <Map>
            <MapHome />
          </Map>
        </HomePageWrapper>
      </PagesWrapper>
    </>
  );
};
export default Contact;
