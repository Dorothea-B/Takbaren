import React from "react";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

const query = `
  *[ _type == 'menu' ] { title, subTitleOne, descriptionOne, subTitleTwo, descriptionTwo }
`;
const Menu = () => {
  const { data = [] } = useQuery("menu", () => sanity.fetch(query));

  const [menu] = data;

  if (!menu) {
    return <h1>Loading…</h1>;
  }

  return (
    <section>
      <h2>{menu.title}</h2>
      <h3>{menu.subTitleOne}</h3>
      <p>{menu.descriptionOne}</p>
      <h3>{menu.subTitleTwo}</h3>
      <p>{menu.descriptionTwo}</p>
    </section>
  );
};
export default Menu;
