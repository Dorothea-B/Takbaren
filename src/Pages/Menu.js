import React from "react";

import "../index.css";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import MenuTabs from "../components/MenuTabs";
import ScrollUpBtn from '../components/ScrollUpBtn';


import {
  PagesHeading,
  ImageDiv,
  ImageText,
  PagesImageOverlay,
} from "../globalStyleComponents";

const query = `
  *[ _type == 'menuHeader' ] { title,
    "image": image.asset->{url}
  }
`;

const Menu = () => {
  const { data = [] } = useQuery("menuHeader", () => sanity.fetch(query));
  const [menuHeader] = data;

  if (!menuHeader) {
    return <h1>Loading…</h1>;
  }

  return (
    <>
      <ImageDiv>
        <PagesImageOverlay></PagesImageOverlay>
        <ImageText>
          <PagesHeading>{menuHeader.title}</PagesHeading>
        </ImageText>
        <img src={menuHeader.image.url} />
      </ImageDiv>
      <MenuTabs />
      <ScrollUpBtn />
    </>
  );
};

export default Menu;
