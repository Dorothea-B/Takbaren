import React from 'react';
import CookieConsent from 'react-cookie-consent';
import '../index.css';
import styled from 'styled-components/macro';
import { device } from './Devices';

const PopUp = () => {
	return (
		<div>
			<CookieConsent
				location='top'
				buttonText='Accept'
				cookieName='myAwesomeCookieName2'
				style={{ background: '#6F1132', color: '#F7F6F0' }}
				buttonStyle={{
					background: '#E5E55E5',
					color: '#6F1132',
					fontSize: '13px',
					fontFamily: 'Poppins',
				}}
				expires={150}>
				<ErrorText>
					This website uses cookies to enhance the user experience.
				</ErrorText>
			</CookieConsent>
		</div>
	);
};

export default PopUp;

export const ErrorText = styled.p`
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	font-size: 16px;
	color: #f7f6f0;
	text-align: center;
`;
