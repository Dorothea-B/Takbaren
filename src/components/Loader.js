import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;

function Loader() {
	let [loading, setLoading] = useState(false);
	let [color] = useState('#ffffff');
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return (
		<div className='sweet-loading'>
			<ClipLoader color={color} loading={loading} css={override} size={150} />
		</div>
	);
}

export default Loader;

//import styled, { keyframes } from 'styled-components';

// const rotate360 = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const Loader = styled.div`
// 	animation: ${rotate360} 1s linear infinite;
// 	transform: translateZ(0);

// 	border-top: 2px solid grey;
// 	border-right: 2px solid grey;
// 	border-bottom: 2px solid grey;
// 	border-left: 4px solid black;
// 	background: transparent;
// 	width: 24px;
// 	height: 24px;
// 	border-radius: 50%;
// `;

// export default Loader;
