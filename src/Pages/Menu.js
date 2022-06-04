import React from "react";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

const query = `
  *[ _type == 'menu' ] { title }
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
    </section>
  );
};
export default Menu;
