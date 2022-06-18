import React from "react";

import "../index.css";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

const query = `
   *[ _type == 'menuDrinks' ] { title,
     "image": image.asset->{url},
    description }
 `;

const MenuDrinks = () => {
  const { data = [] } = useQuery("menuDrinks", () => sanity.fetch(query));
  const [menuDrinks] = data;

  if (!menuDrinks) {
    return <h1>Loading…</h1>;
  }

  return (
    <section>
      <p>{menuDrinks.title}</p>
      <img src={menuDrinks.image.url} />
      <p>{menuDrinks.description}</p>
    </section>
  );
};

export default MenuDrinks;
