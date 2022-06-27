import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import { useQuery } from "react-query";
import { sanity } from "../sanity";
import BlockRenderer from "../BlockRenderer";

import styled from "styled-components/macro";
import "../index.css";
import { SubHeadingDark } from "../globalStyleComponents";

const query = `
  *[ _type == 'menuDrinkList' ] { story }
`;

const MenuDrinkList = () => {
  const { data = [] } = useQuery("menuDrinkList", () => sanity.fetch(query));

  const [menuDrinkList] = data;

  if (!menuDrinkList) {
    return <h1>Loading…</h1>;
  }

  return (
    <>
      {menuDrinkList.story && (
        <div>
          <BlockContent
            blocks={menuDrinkList.story}
            serializers={{ types: { block: BlockRenderer } }}
          />
        </div>
      )}
    </>
  );
};

export default MenuDrinkList;
