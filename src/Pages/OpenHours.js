import React from "react";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import {
  HeadingDark,
  SubHeading,
  SubHeadingLight,
  LightText,
  DarkText,
} from "../globalStyleComponents";

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
      <HeadingDark>{openHours.title}</HeadingDark>
      <LightText>{openHours.description}</LightText>
      <SubHeadingLight>{openHours.weatherTitle}</SubHeadingLight>
      {/* <MapHome /> */}
    </section>
  );
};

export default OpenHours;
