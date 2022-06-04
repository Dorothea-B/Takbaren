import React from "react";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

const query = `
  *[ _type == 'introTextHome' ] { title, description, link }
`;

const IntroTextHome = () => {
  const { data = [] } = useQuery("introTextHome", () => sanity.fetch(query));

  const [introText] = data;

  if (!introText) {
    return <h1>Loading…</h1>;
  }

  return (
    <section>
      <h2>{introText.title}</h2>
      <p>{introText.description}</p>
      <p>{introText.link}</p>
    </section>
  );
};

export default IntroTextHome;
