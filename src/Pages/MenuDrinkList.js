import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import { useQuery } from "react-query";
import { sanity } from "../sanity";
import BlockRenderer from "../BlockRenderer";

import styled from "styled-components/macro";
import "../index.css";
import { MenuWrapper } from "../globalStyleComponents";

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
        <MenuWrapper>
          <BlockContent
            blocks={menuDrinkList.story}
            serializers={{ types: { block: BlockRenderer } }}
          />
        </MenuWrapper>
      )}
    </>
  );
};

export default MenuDrinkList;
