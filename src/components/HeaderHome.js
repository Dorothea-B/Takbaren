import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Logo from '../assets/Takbar_logo.png';

const HeaderHome = () => {
	return (
		<>
			<section>
				<Link className='logo' to='/'>
					<Img src={Logo} />
				</Link>
			</section>
		</>
	);
};

export default HeaderHome;

const Img = styled.img`
	max-width: 50%;
	display: flex;
	justify-content: center;
	margin: 1rem;
`;
