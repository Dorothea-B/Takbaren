import React, { useEffect, useState, Component } from 'react'
import { LoadingScreen } from '../globalStyleComponents';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';


const override = css`
	display: block;
	margin: 0 auto;
	border: solid 2px #fff;
	border-color: var(--clr-grey);
`;

const LoadingSpinner = () => {
  
    let [loading, setLoading] = useState(false);
    setLoading(true)
 
    return (
        <LoadingScreen>
		<div className='sweet-loading'>
			<ClipLoader loading={loading} css={override} size={150} />
		</div>
		</LoadingScreen>
    )
  }

  export default LoadingSpinner

