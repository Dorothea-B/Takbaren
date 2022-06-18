import React from "react";

import "../index.css";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import MenuTabs from "../components/MenuTabs";

// import {
//   PagesHeading,
//   ImageDiv,
//   ImageText,
//   PagesImageOverlay,
// } from "../globalStyleComponents";

// const query = `
//   *[ _type == 'menu' ] { title,
//     "image": image.asset->{url}
//   }
// `;

const Menu = () => {
  // const { data = [] } = useQuery("menu", () => sanity.fetch(query));
  // const [menu] = data;

  // if (!menu) {
  //   return <h1>Loading…</h1>;
  // }

  return (
    <>
      {/* <ImageDiv>
        <PagesImageOverlay></PagesImageOverlay>
        <ImageText>
          <PagesHeading>{menu.title}</PagesHeading>
        </ImageText>
        <img src={menu.image.url} />
      </ImageDiv> */}
      <MenuTabs />
    </>
  );
};

export default Menu;
