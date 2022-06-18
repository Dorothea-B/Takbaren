import React from "react";

import "../index.css";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import { SubHeadingDark } from "../globalStyleComponents";

const query = `
  *[ _type == 'menuFood' ] { description }
`;

const MenuFood = () => {
  const { data = [] } = useQuery("menuFood", () => sanity.fetch(query));

  const [menuFood] = data;

  if (!menuFood) {
    return <h1>Loading…</h1>;
  }

  return (
    <>
      <p>{menuFood.description}</p>
    </>
  );
};

export default MenuFood;
