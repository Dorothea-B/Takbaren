import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import { useQuery } from "react-query";
import { sanity } from "../sanity";
import BlockRenderer from "../BlockRenderer";

import styled from "styled-components/macro";
import "../index.css";
import { MenuWrapper } from "../globalStyleComponents";

const query = `
  *[ _type == 'menuFood' ] { story }
`;

const MenuFood = () => {
  const { data = [] } = useQuery("menuFood", () => sanity.fetch(query));

  const [menuFood] = data;

  if (!menuFood) {
    return <h1>Loading…</h1>;
  }

  return (
    <>
      {menuFood.story && (
        <MenuWrapper>
          <BlockContent
            blocks={menuFood.story}
            serializers={{ types: { block: BlockRenderer } }}
          />
        </MenuWrapper>
      )}
    </>
  );
};

export default MenuFood;
