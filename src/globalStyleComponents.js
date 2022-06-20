import styled from "styled-components/macro";
import "./index.css";
import { device } from "./toolcomponents/Devices";



// export const SubHeading = styled.h3`
//   font-family: "Playfair Display", serif;
//   font-size: 1.3em;
//   font-style: italic;
// `;



export const CardSpacing = styled.section`
	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: space-around;
	/* gap: 1rem; */
	height: 100%;
`;

// ---------------- PAGES SPECIFIC GLOBAL STYLING ----------------//
export const PagesWrapper = styled.div`
	width: calc(100% - 30px);
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& > * {
		margin-top: 2rem;
	}
	@media (min-width: 1024px) {
		flex-direction: row;
	}
`;

export const ImageDiv = styled.div`
	position: relative;
`;

export const PagesImageOverlay = styled.div`
	width: 100%;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(52, 59, 63, 0.4);
	background-blend-mode: multiply;
`;

export const ImageText = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const PagesCardLIght = styled.div`
	background-color: var(--clr-white);
	padding: 2rem;
	overflow: hidden;
	width: 100%;
	max-width: 600px;
`;

export const Button = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid grey;
	color: var(--clr-grey);
	margin: 0 1em;
	padding: 0.25em 1em;
`;
// export const heading_dark = styled.h1`
//   font-family: "Playfair Display", serif;
//   color: red;
//   text-transform: uppercase;
// `;
// export const sub_heading_dark = styled.h3`
//   font-family: "Playfair Display", serif;
//   color: var(--clr-grey);
//   text-transform: uppercase;
// `;

// export const regular_text_dark = styled.p`
//   font-family: "Poppins", sans-serif;
//   color: var(--clr-grey);
// `;

export const RoundBtn = styled.button`
	background-color: var(--clr-grey);
	color: var(--clr-white);
	cursor: pointer;
	border: none;
	padding: 0.8rem;
	border-radius: 25px;
	width: 50px;
	height: 50px;
	margin: 1rem;
	box-shadow: (rgba(0, 0, 0, 0.25));
`;

export const SquareBtn = styled.button`
	background-color: var(--clr-medium);
	color: var(--clr-white);
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	cursor: pointer;
	border: none;
	letter-spacing: 0.25em;
	text-transform: uppercase;
	margin-top: 1.5rem;
	padding: 0.5rem;
	width: 250px;
	/* osäker på width */
`;

export const CrossBtn = styled.button`
	background-color: transparent;
	display: flex;
	align-self: flex-end;
	color: black;
	cursor: pointer;
	border: none;
	padding: 0.8rem;
	width: 50px;
	height: 50px;
	margin: 1rem;
	box-shadow: (rgba(0, 0, 0, 0.25));
`;

/*Alla text-stilkomponenter. */

export const Heading = styled.h1`
	font-family: 'Playfair Display', serif;
	text-transform: uppercase;
	font-size: 2em;
	white-space: break-spaces;

`;
export const HeadingDark = styled(Heading)`
	color: var(--clr-grey);
`;

export const HeadingLight = styled(Heading)`
	color: var(--clr-white);
`;

export const MediumHeading = styled.h2`
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  font-size: 1.3em;
  white-space: break-spaces;

`;

export const MediumHeadingDark = styled(MediumHeading)`
  color: var(--clr-grey);
`;

export const MediumHeadingLight = styled(MediumHeading)`
  color: var(--clr-white);
`;

export const MediumHeadingRed = styled(MediumHeading)`
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  font-size: 1.5em;
  color: var(--clr-dark);
`;


export const SubHeading = styled.h3`
  font-family: "Playfair Display", serif;
  /* font-size: 1.3em; */
  font-style: italic;
  font-weight: 500;
  white-space: break-spaces;
  vertical-align: bottom;

  
  @media ${device.mobileS} {
    font-size: 0.8em;
  }
  @media ${device.mobileL} {
    font-size: 1.3em;
  }
  @media ${device.tablet} {
    font-size: 1.5em;
  }
  @media ${device.laptop} {
    font-size: 2em;
  }
`

export const SubHeadingLight = styled(SubHeading)`
  color: var(--clr-white);
`;
export const SubHeadingDark = styled(SubHeading)`
  color: var(--clr-grey);
`;
export const SubHeadingRed = styled(SubHeading)`
  color: var(--clr-dark);
`;
export const SubHeadingPink = styled(SubHeading)`
  color: var(--clr-light);
`;


export const MainText = styled.div`
	font-family: 'Playfair Display', serif;
	font-size: 1em;
	font-style: italic;
	font-weight: 300;
	white-space: break-spaces;

`;

export const MainTextDark = styled(MainText)`
	
	color: var(--clr-grey);
`;
export const MainTextLight = styled(MainText)`
	
	color: var(--clr-white);
`;
export const MainTextRed = styled(MainText)`

	color: var(--clr-dark);
`;
export const MainTextPink = styled(MainText)`
	
	color: var(--clr-medium);
`;

export const MainLinkDark = styled.a`
	font-family: 'Playfair Display', serif;
	font-size: 1em;
	font-style: italic;
	font-weight: 300;
	color: var(--clr-grey);
	text-decoration: underline;
	cursor: pointer;
	& :hover {
	}
`;
export const MainLinkLight = styled.a`
	font-family: 'Playfair Display', serif;
	font-size: 1em;
	font-style: italic;
	font-weight: 300;
	color: var(--clr-light);
	text-decoration: underline;
	cursor: pointer;
	& :hover {
	}
`;

export const RegularText = styled.p`
	font-family: 'Poppins', sans-serif;
	font-size: 12px;
	white-space: break-spaces;

`;
export const RegularTextDark = styled(RegularText)`
	color: var(--clr-grey);
`;
export const RegularTextLight = styled(RegularText)`
	color: var(--clr-white);
`;
export const RegularTextRed = styled(RegularText)`
	color: var(--clr-dark);
`;
export const RegularTextPink = styled(RegularText)`
	color: var(--clr-medium);
`;
export const RegularLinkDark = styled.a`
	font-family: 'Poppins', sans-serif;
	font-size: 12px;
	font-style: italic;
	text-decoration: underline;
	cursor: pointer;
	color: var(--clr-grey);
	& :hover {
	}
`;
export const RegularLinkLight = styled.a`
	font-family: 'Poppins', sans-serif;
	font-size: 12px;
	font-style: italic;
	text-decoration: underline;
	cursor: pointer;
	color: var(--clr-white);
	& :hover {
	}
`;
export const RegularLinkRed = styled.a`
	font-family: 'Poppins', sans-serif;
	font-size: 12px;
	font-style: italic;
	text-decoration: underline;
	cursor: pointer;
	color: var(--clr-dark);
	& :hover {
	}
`;

// Gamla textstilar - uppdatera där de fortf. används!


export const PagesHeading = styled(Heading)`
	color: var(--clr-white);
	border-block-end: 2px solid var(--clr-white);
`;

export const SubHeadingLight2 = styled(SubHeading)`
  color: var(--clr-white);
`;

export const SubHeadingDark2 = styled(SubHeading)`
  color: var(--clr-grey);
`;

export const SubHeadingRed2 = styled(SubHeading)`
  color: var(--clr-dark);
`;

export const VerySmallText = styled(RegularText)`
	font-size: 8px;
`;

export const HeadingDark2 = styled(Heading)`
	color: var(--clr-grey);
`;


export const LightText = styled(RegularText)`
	color: var(--clr-white);
`;

export const DarkText = styled(RegularText)`
	color: var(--clr-grey);
`;