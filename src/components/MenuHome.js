import React from "react";

import { useQuery } from "react-query";
import { sanity } from "../sanity";


const query = `
  *[ _type == 'menuhome' ] { menutitle, descriptionone, descriptiontwo }
`;

const MenuHome = () => {
  // in this one line, data is fetched from sanity via the sanity client and
  // stored into application state via react-query!
  const { data = [] } = useQuery("menuhome", () => sanity.fetch(query));

    const [menuhome] = data;

    if (!menuhome) {
      return <h1>Loading…</h1>;
    }

  return (
    <div>
      <h1>This is the Menu Home component</h1>
      <p>{menuhome.menutitle}</p>
      <h2>{menuhome.descriptionone}</h2>
      <h2>{menuhome.descriptiontwo}</h2>
    </div>
  );
};

export default MenuHome;
