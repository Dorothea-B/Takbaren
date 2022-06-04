import React from "react";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

const query = `
  *[ _type == 'openHours' ] { title, description, weatherTitle }
`;

const OpenHours = () => {
  const { data = [] } = useQuery("openHours", () => sanity.fetch(query));

  const [openHours] = data;

  if (!openHours) {
    return <h1>Loading…</h1>;
  }

  return (
    <section>
      <h2>{openHours.title}</h2>
      <p>{openHours.description}</p>
      <h2>{openHours.weatherTitle}</h2>
    </section>
  );
};

export default OpenHours;
