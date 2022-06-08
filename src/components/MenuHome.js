import React from "react";
import styled from "styled-components/macro";
import "../index.css";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

const query = `
  *[ _type == 'menuHome' ] { menuTitle, descriptionOne, descriptionTwo, 
    "image": image.asset->{url} }
`;

const MenuHome = () => {
  const { data = [] } = useQuery("menuHome", () => sanity.fetch(query));

  const [menuHome] = data;

  if (!menuHome) {
    return <h1>Loading…</h1>;
  }

  return (
    <MenuSection>
      <h2>{menuHome.menuTitle}</h2>
      <ImageDiv>
        <Img src={menuHome.image.url} />
        <DescriptionDiv>
          <DesOne>
            <P>{menuHome.descriptionOne}</P>
          </DesOne>
          <DesTwo>
            <P>{menuHome.descriptionTwo}</P>
          </DesTwo>
        </DescriptionDiv>
      </ImageDiv>
    </MenuSection>
  );
};

export default MenuHome;

const MenuSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageDiv = styled.div`
  position: relative;
`;

const Img = styled.img`
  max-width: 600px;
`;

const DescriptionDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DesOne = styled.div`
  position: absolute;
  bottom: 200px;
  right: 400px;
`;

const DesTwo = styled.div`
  position: absolute;
  bottom: 200px;
  left: 400px;
`;

const P = styled.p`
  color: var(--clr-white);
  text-transform: uppercase;
  font-size: 32px;
`;
