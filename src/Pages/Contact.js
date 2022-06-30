import React from "react";
import styled from "styled-components/macro";
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

import { CardLight } from "./Home";

import MapHome from "../components/MapHome";
import { device } from "../toolcomponents/Devices";

import FBIcon from "../assets/fb_icon.svg"
import IGIcon from "../assets/ig_icon.svg"

const query = `
  *[ _type == 'contact' ] { title, 
    "image": image.asset->{url},
    story }
`;

const Contact = () => {
  const { data = [] } = useQuery("contact", () => sanity.fetch(query));

  const [contact] = data;

  if (!contact) {
    return <h1>Loading…</h1>;
  }

  return (
    <>
      <ImageDiv bgimg={contact.image.url} alt='contact-page-header'>
        <PagesImageOverlay></PagesImageOverlay>
        <ImageText>
          <PagesHeading>{contact.title}</PagesHeading>
        </ImageText>
        
      </ImageDiv>

      <PagesWrapper>
        <ContactWrapper>
          <CardLight>
            {contact.story && (
              <div>
                <BlockContent
                  blocks={contact.story}
                  serializers={{ types: { block: BlockRenderer } }}
                />
              </div>
            )}

            <SoMe> 
              <a href="https://www.facebook.com/takbarenvisby"><Icon src={FBIcon} alt="facebook icon" /></a>
              <a href="https://www.instagram.com/takbarenvisby/"><Icon src={IGIcon} alt="instagram icon" /></a>
            </SoMe>

          <Map>
            <MapHome />
          </Map>

          </CardLight>

        </ContactWrapper>
      </PagesWrapper>
    </>
  );
};
export default Contact;

const ImageDiv = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-image: url(${(props) => props.bgimg});
  background-size: cover;
  background-repeat: no-repeat;

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

const ContactWrapper = styled.div`

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

`
const Map = styled.div`
margin: auto;
width: 80%;


@media ${device.mobileS} {
    width: calc(100% - 20px);
  }
  @media ${device.tablet} {
    width: 90%;
  }
`

const Icon = styled.img`
width: 50px;


`
const SoMe = styled.div`
display: flex;
flex-wrap: wrap;
margin: auto;
width: 50%;
gap: 3rem;
justify-content: center;
padding: 1rem 0 2rem 0;
 
`

