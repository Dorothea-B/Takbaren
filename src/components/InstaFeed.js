
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Feed from './Feed'

import '../index.css'


const SomeWrapper = styled.div`
	height: var(--home-dsktp-h);
	position: relative;
	z-index: 20;
`


const InstaContainer = styled.div `

    width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	margin: auto;
	overflow: scroll;
	gap: 2rem;
	position: absolute;

    & > * {
        width: calc(100% * 0.333333);
      
        @media (min-width: 1024px) {
        
        width: 300px;
        }
    }
    
    
` 
	
  
  


const InstaFeed = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = process.env.REACT_APP_INS_TOKEN;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <SomeWrapper>
        <InstaContainer>
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </InstaContainer>
        </SomeWrapper>

    );
}

export default InstaFeed;
