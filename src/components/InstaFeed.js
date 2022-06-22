
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'
import Feed from './Feed'
import { device } from '../toolcomponents/Devices'
import '../index.css'
import ClipLoader from 'react-spinners/ClipLoader';
import { LoadingScreen } from '../globalStyleComponents';
import LoadingSpinner from "../toolcomponents/LoadingSpinner";


import Loader from './Loader'


const SomeWrapper = styled.div`
	height: var(--home-dsktp-h);
	position: relative;
	z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
`


const InstaContainer = styled.div `

    width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	margin: auto;
	overflow: scroll;
	gap: 1rem;
	position: absolute;

    & > * {
        /* width: calc(100% * 0.333333); */
        height: 13rem;

        @media ${device.laptop} {
            height: 17rem;
        }
    }
` 

const InstaFeed = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([])
    // const [loading, setLoading] = useState(false);

    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = process.env.REACT_APP_INS_TOKEN;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
            // setLoading(true)

            try{
            axios
                // .get(`https://graph.instagram.com/me/media?fields=id,username,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp}`)
                .get(`https://graph.instagram.com/me/media?fields=id,username,media_url,media_type&access_token=${tokenProp}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          } finally {
            // setLoading(true)
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

            {/* {loading && <LoadingSpinner />} */}
{/* 
            <div className='sweet-loading'>
                <ClipLoader loading={loading} size={150} />
            </div> */}

            <InstaContainer>
                {feeds.map((feed) => (
                    <Feed key={feed.id} feed={feed} />
                ))}
            </InstaContainer>
        </SomeWrapper>

    );
}

export default InstaFeed;
