import styled from "styled-components/macro";
import "./../src/index.css";

/*Alla text-stilkomponenter. */


export const HeadingDark = styled.h1`
font-family: "Playfair Display", serif;
  text-transform: uppercase;
  font-size: 2em;
  color: var(--clr-grey);
`;

export const HeadingLight = styled.h1`
font-family: "Playfair Display", serif;
  text-transform: uppercase;
  font-size: 2em;
  color: var(--clr-white);
`;

export const MediumHeadingDark = styled.h2`
 font-family: "Playfair Display", serif;
  text-transform: uppercase;
  text-decoration: underline;
  font-size: 1.3em;
  color: var(--clr-grey);

`;

export const MediumHeadingLight = styled.h2`
 font-family: "Playfair Display", serif;
  text-transform: uppercase;
  text-decoration: underline;
  font-size: 1.3em;
  color: var(--clr-white);
`;

export const MediumHeadingRed = styled.h2`
 font-family: "Playfair Display", serif;
  text-transform: uppercase;
  text-decoration: underline;
  font-size: 1.5em;
  color: var(--clr-dark);
`;

export const SubHeadingDark = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.3em;
  font-style: italic;
  font-weight: 500;
  color: var(--clr-grey);
`;

export const SubHeadingLight = styled.h3`
 font-family: "Playfair Display", serif;
  font-size: 1.3em;
  font-style: italic;
  font-weight: 500;
  color: var(--clr-white);
`;

export const SubHeadingRed = styled.h3`
font-family: "Playfair Display", serif;
  font-size: 1.3em;
  font-style: italic;
  font-weight: 500;
  color: var(--clr-dark);
`;

export const SubHeadingPink = styled.h3`
font-family: "Playfair Display", serif;
  font-size: 1.3em;
  font-style: italic;
  font-weight: 500;
  color: var(--clr-medium);
`;

export const MainTextDark = styled.div`
font-family: "Playfair Display", serif;
  font-size: 1em;
  font-style: italic; 
  font-weight: 300;
  color: var(--clr-grey);
`;
export const MainTextLight = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 1em;
  font-style: italic; 
  font-weight: 300;
  color: var(--clr-white);
`;
export const MainTextRed = styled.div`
font-family: "Playfair Display", serif;
  font-size: 1em;
  font-style: italic; 
  font-weight: 300;
  color: var(--clr-dark);
`;
export const MainTextPink = styled.div`
font-family: "Playfair Display", serif;
  font-size: 1em;
  font-style: italic; 
  font-weight: 300;
  color: var(--clr-medium);
`;
export const MainLinkDark = styled.a`
font-family: "Playfair Display", serif;
  font-size: 1em;
  font-style: italic; 
  font-weight: 300;
  color: var(--clr-grey);
  text-decoration: underline;  
  cursor: pointer;
  & :hover {}
`;
export const MainLinkLight = styled.a`
 font-family: "Playfair Display", serif;
  font-size: 1em;
  font-style: italic; 
  font-weight: 300;
  color: var(--clr-light);
  text-decoration: underline;  
  cursor: pointer;
& :hover {}

`;
export const RegularTextDark = styled.p`
 font-family: "Poppins", sans-serif;
  font-size: 12px;
  color: var(--clr-grey);
`;
export const RegularTextLight = styled.p`
 font-family: "Poppins", sans-serif;
  font-size: 12px;
  color: var(--clr-white);
`;
export const RegularTextRed = styled.p`
 font-family: "Poppins", sans-serif;
  font-size: 12px;
  color: var(--clr-dark);
`;
export const RegularTextPink = styled.p`
 font-family: "Poppins", sans-serif;
  font-size: 12px;
  color: var(--clr-medium);
`;
export const RegularLinkDark = styled.a`
 font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
  color: var(--clr-grey);
& :hover {}

`;
export const RegularLinkLight = styled.a`
font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
  color: var(--clr-white);
& :hover {}

`;
export const RegularLinkRed = styled.a`
font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
  color: var(--clr-dark);
& :hover {}

`;