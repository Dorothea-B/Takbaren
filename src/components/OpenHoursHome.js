import React from "react";
import styled from "styled-components/macro";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import {
  HeadingDark,
  SubHeadingLight,
  SubHeadingRed,
} from "../globalStyleComponents";

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
      <HeadingDark>{openHoursHome.title}</HeadingDark>
      <SubHeadingRed>{openHoursHome.description}</SubHeadingRed>
    </section>
  );
};

export default OpenHoursHome;
