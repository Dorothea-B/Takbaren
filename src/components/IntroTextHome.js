import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components/macro';

import BlockRenderer from '../BlockRenderer';

import { useQuery } from 'react-query';
import { sanity } from '../sanity';

import '../index.css';

import CrossBtn from './CrossBtn';

import {
	HeadingDark,
	SubHeadingRed,
	RegularText,
	VerySmallText,
	SquareBtn,
	CardSpacing,
} from '../globalStyleComponents';

const query = `
  *[ _type == 'introHome' ] { title, story, link }
`;

// const IntroQuote = styled(SubHeadingRed)`
//   font-size: 18px;
//   font-weight: 600;
// `;

const IntroTextHome = () => {
	const { data = [] } = useQuery('introHome', () => sanity.fetch(query));

	const [introText] = data;

	// const stylings = introText?.story
	// .map((block) => block.styles)
	// .flat();

	// console.log(`Styles avaliable:`, stylings);

	if (!introText) {
		return <h1>Loading…</h1>;
	}

	return (
		<CardSpacing>
			{/* <CrossBtn /> */}
			<HeadingDark>{introText.title}</HeadingDark>

			{/* <IntroQuote>{introText.description}</IntroQuote> */}

			{introText.story && (
				<div>
					<BlockContent
						blocks={introText.story}
						serializers={{ types: { block: BlockRenderer } }}
					/>
				</div>
			)}

			{introText.link &&
				<a href={introText.link} target='_blank'>
				{/* fixa med target blank  */}
				<SquareBtn>Read more</SquareBtn>
				</a>
			}
		
			
		</CardSpacing>
	);
};

export default IntroTextHome;
{/* <h1 style={{display: 'block'}}>Loading…</h1>; */}