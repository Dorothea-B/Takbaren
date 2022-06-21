import React from 'react';
import '../index.css';
import {
	PagesWrapper,
	HeadingDark,
	Heading,
	SquareBtn,
} from '../globalStyleComponents';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<section>
			<PagesWrapper>
				<div>
					<HeadingDark style={{ marginTop: '2rem' }}>404</HeadingDark>
				</div>
				<div>
					<Heading style={{ marginTop: '2rem' }}>Page not found</Heading>
				</div>
				<div>
					<Link to='/'>
						<SquareBtn style={{ margin: '2rem' }}>Go back to start</SquareBtn>
					</Link>
				</div>
			</PagesWrapper>
		</section>
	);
};

export default NotFound;
