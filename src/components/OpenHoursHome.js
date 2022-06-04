import React from "react";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

const query = `
  *[ _type == 'openHoursHome' ] { title, description }
`;

const OpenHoursHome = () => {
  const { data = [] } = useQuery("openHoursHome", () => sanity.fetch(query));

  const [openHoursHome] = data;

  if (!openHoursHome) {
    return <h1>Loading…</h1>;
  }

  return (
    <section>
      <h2>{openHoursHome.title}</h2>
      <p>{openHoursHome.description}</p>
    </section>
  );
};

export default OpenHoursHome;
