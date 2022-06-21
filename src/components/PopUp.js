import React from 'react';
import CookieConsent from 'react-cookie-consent';
import '../index.css';
import styled from 'styled-components/macro';

const PopUp = () => {
	return (
		<div>
			<CookieConsent
				location='bottom'
				buttonText='Accept'
				cookieName='myAwesomeCookieName2'
				style={{ background: '#DAA79D', color: '#343B3F' }}
				buttonStyle={{
					background: '#E5E55E5',
					color: '#6F1132',
					fontSize: '13px',
					font: 'Poppins',
				}}
				expires={150}>
				{' '}
				<ErrorText>
					This website uses cookies to enhance the user experience.{' '}
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
	font-weight: 500;
	color: var(--clr-grey);
	text-align: center;
`;
