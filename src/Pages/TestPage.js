import React from "react";
import styled from "styled-components/macro";
import "../index.css";

import { useQuery } from "react-query";
import { sanity } from "../sanity";
import BlockContent from '@sanity/block-content-to-react';


import {
  ImageDiv,
  ImageText,
  PagesImageOverlay,
  PagesWrapper,
  PagesHeading,
  SubHeadingDark,
} from "../globalStyleComponents";

import { CardLight } from "../Pages/Home";

const query = `
  *[ _type == 'testPage' ] { title, main_text }
`;


export const ComponentBig = styled.div`
color: yellow;
font-size: 40px;
`


const TestPage = () => {
  const { data = [] } = useQuery("testPage", () => sanity.fetch(query));

  const [testcontent] = data;

  if (!testcontent) {
    return <h1>Loading…</h1>;
  }

  return (
    <PagesWrapper>
    
      <CardLight>
      <div>{testcontent.title}</div>
        {/* <SubHeadingDark>{testcontent.main_text}</SubHeadingDark> */}
    
             {testcontent.main_text && (
            <div>
            <BlockContent blocks={testcontent.main_text} />
            </div>)}

      </CardLight>
    </PagesWrapper>
  );
};
export default TestPage;
