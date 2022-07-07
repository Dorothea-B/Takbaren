import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components/macro";
import Feed from "./Feed";
import { device } from "../toolcomponents/Devices";
import "../index.css";

const InstaFeed = ({ token, ...props }) => {
  const [feeds, setFeedsData] = useState([]);

  const tokenProp = process.env.REACT_APP_INS_TOKEN;

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchInstagramPost() {
      try {
        axios
          .get(
            `https://graph.instagram.com/me/media?fields=id,username,media_url,media_type&access_token=${tokenProp}`
          )
          .then((resp) => {
            setFeedsData(resp.data.data);
          });
      } catch (err) {
        console.log("error", err);
      }
    }

    fetchInstagramPost();

    return () => {
      abortController.abort();
    };
  }, [props.limit]);

  return (
    <SomeWrapper>
      <a href='https://www.instagram.com/takbarenvisby'>
        <InstaContainer>
          {feeds.map((feed) => (
            <Feed key={feed.id} feed={feed} />
          ))}
        </InstaContainer>
      </a>
    </SomeWrapper>
  );
};

export default InstaFeed;

const SomeWrapper = styled.div`
  height: var(--home-dsktp-h);
  position: relative;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InstaContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
  gap: 1rem;
  margin: auto;

  &::-webkit-scrollbar {
    border-radius: 100vw;
    background-color: rgba(246, 189, 172, 0.4);
    opacity: 0.3;
    height: 10px;
    margin: 30px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--clr-light);
    border-radius: 100vw;
  }
  &::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
  }
  & > * {
    @media ${device.mobileS} {
      height: 10rem;
      background-color: black;
    }
    @media ${device.mobileL} {
      height: 10rem;
    }
    @media ${device.laptop} {
      height: 17rem;
    }
  }
`;
