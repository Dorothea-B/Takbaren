import React from 'react';
import styled from 'styled-components';
import '../index.css';
import {
	PagesWrapper,
	HeadingDark,
	SubHeadingDark,
	SquareBtn,
} from '../globalStyleComponents';
import { Link } from 'react-router-dom';

const Height = styled.div`
height: 60vh;
`

const NotFound = () => {
	return (
		<section>
			<PagesWrapper>
			<Height>
					<HeadingDark>404</HeadingDark>
			
					<SubHeadingDark>Page not found</SubHeadingDark>
				
				
					<Link to='/'>
						<SquareBtn>Go back</SquareBtn>
					</Link>
				
			</Height>
			</PagesWrapper>
		</section>
	);
};

export default NotFound;
