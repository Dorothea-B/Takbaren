import React from 'react';
import CookieConsent from 'react-cookie-consent';

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
				}}
				font-family='Poppins'
				expires={150}>
				{' '}
				This website uses cookies to enhance the user experience.{' '}
			</CookieConsent>
		</div>
	);
};

export default PopUp;
