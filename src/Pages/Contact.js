import React from "react";
import "../index.css";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import BlockContent from "@sanity/block-content-to-react";
import BlockRenderer from "../BlockRenderer";

import {
  PagesHeading,
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

const Contact = () => {
  const { data = [] } = useQuery("contact", () => sanity.fetch(query));

  const [contact] = data;

  if (!contact) {
    return <Loader />;
  }

  return (
    <>
      <ImageDiv bgimg={contact.image.url}>
        <PagesImageOverlay></PagesImageOverlay>
        <ImageText>
          <PagesHeading>{contact.title}</PagesHeading>
        </ImageText>
        <img
          className='sub-page-heading'
          src={contact.image.url}
          alt='contact page header image'
        />
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
