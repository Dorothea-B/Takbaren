import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import BlockContent from "@sanity/block-content-to-react";
import BlockRenderer from "../BlockRenderer";
import "../index.css";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import { HeadingDark, SquareBtn, CardSpacing } from "../globalStyleComponents";

const query = `
  *[ _type == 'contactHome' ] { title, story, link }
`;

const ContactHome = () => {
  const { data = [] } = useQuery("contactHome", () => sanity.fetch(query));

  const [contactHome] = data;

  if (!contactHome) {
    return <h1>Loading…</h1>;
  }

  return (
    <CardSpacing>
      <HeadingDark>{contactHome.title}</HeadingDark>

      <ContactWrapper>
        {contactHome.story && (
          <div>
            <BlockContent
              blocks={contactHome.story}
              serializers={{ types: { block: BlockRenderer } }}
            />
          </div>
        )}

        <Link to='/contact'>
          <SquareBtn>More</SquareBtn>
        </Link>
      </ContactWrapper>
    </CardSpacing>
  );
};
export default ContactHome;

const ContactWrapper = styled.div`
  & > * {
    flex: 1;
  }
`;
