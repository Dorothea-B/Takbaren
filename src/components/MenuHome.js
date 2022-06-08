import React from "react";

import { useQuery } from "react-query";
import { sanity, imageUrlBuilder } from "../sanity";

const query = `
  *[ _type == 'menuHome' ] { menuTitle, descriptionOne, descriptionTwo, image }
`;

const MenuHome = () => {
  const { data = [] } = useQuery("menuHome", () => sanity.fetch(query));

  const [menuHome] = data;

  if (!menuHome) {
    return <h1>Loading…</h1>;
  }

  return (
    <section>
      <h2>{menuHome.menuTitle}</h2>
      {/* <img
        alt={menuHome.menuTitle}
        src={imageUrlBuilder.width(425).height(425).image(menuHome.image).url()}
      /> */}
      <p>{menuHome.descriptionOne}</p>
      <p>{menuHome.descriptionTwo}</p>
    </section>
  );
};

export default MenuHome;
