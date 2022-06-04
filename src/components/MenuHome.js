import React from "react";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

const query = `
  *[ _type == 'menuHome' ] { menuTitle, descriptionOne, descriptionTwo }
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
      <p>{menuHome.descriptionOne}</p>
      <p>{menuHome.descriptionTwo}</p>
    </section>
  );
};

export default MenuHome;
