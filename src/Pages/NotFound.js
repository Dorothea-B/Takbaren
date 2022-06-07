import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const ButtonClick = () => {
		useNavigate('/');
	};
	return (
		<Section>
			<Title>
				<h1>We're Sorry</h1>
				<p>We couldn't find the page you were looking for.</p>
			</Title>
			<Button onClick={ButtonClick}>Go Back</Button>
		</Section>
	);
};

export default NotFound;

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

const Section = styled.section`
	padding: 4em;
	background: papayawhip;
`;

const Button = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;
`;
