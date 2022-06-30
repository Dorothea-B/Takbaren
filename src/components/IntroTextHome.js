import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import BlockRenderer from "../BlockRenderer";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import "../index.css";

import { HeadingDark, SquareBtn, CardSpacing } from "../globalStyleComponents";

const query = `
  *[ _type == 'introHome' ] { title, story, link }
`;

const IntroTextHome = () => {
  const { data = [] } = useQuery("introHome", () => sanity.fetch(query));

  const [introText] = data;

  if (!introText) {
    return <h1>Loading…</h1>;
  }

  return (
    <CardSpacing>
      {introText.title && <HeadingDark>{introText.title}</HeadingDark>}

      {introText.story && (
        <div>
          <BlockContent
            blocks={introText.story}
            serializers={{ types: { block: BlockRenderer } }}
          />
        </div>
      )}

      {introText.link && (
        <a
          href={introText.link}
          target='_blank'
          rel='noreferrer'
          aira-label='link-going-to-another-page'
        >
          <SquareBtn>Read more</SquareBtn>
        </a>
      )}
    </CardSpacing>
  );
};

export default IntroTextHome;
