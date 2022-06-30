import React from "react";
import { Link } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";

import { useQuery } from "react-query";
import { sanity } from "../sanity";
import BlockRenderer from "../BlockRenderer";
import "../index.css";

import { HeadingDark, SquareBtn, CardSpacing } from "../globalStyleComponents";

const query = `
  *[ _type == 'openHoursHome' ] { title, story, link }
`;

const OpenHoursHome = () => {
  const { data = [] } = useQuery("openHoursHome", () => sanity.fetch(query));

  const [openHoursHome] = data;

  if (!openHoursHome) {
    return <h1>Loading…</h1>;
  }

  return (
    <CardSpacing>
      <HeadingDark>{openHoursHome.title}</HeadingDark>

      {openHoursHome.story && (
        <div>
          <BlockContent
            blocks={openHoursHome.story}
            serializers={{ types: { block: BlockRenderer } }}
          />
        </div>
      )}

      <Link to='/openinghours'>
        <SquareBtn>More Info</SquareBtn>
      </Link>
    </CardSpacing>
  );
};

export default OpenHoursHome;
