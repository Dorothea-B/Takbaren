import React from 'react';
import '../index.css';
import { Heading, RegularText, Button } from '../globalStyleComponents';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<section>
			<Heading>404</Heading>
			<RegularText>Page not found</RegularText>
			<Link to='/'>
				<Button>Go back to start</Button>
			</Link>
		</section>
	);
};

export default NotFound;
