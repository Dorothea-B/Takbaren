import styled from "styled-components/macro";
import "./index.css";

export const Heading = styled.h1`
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  font-size: 2em;
`;

export const SubHeading = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.3em;
  font-style: italic;
`;

export const RegularText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
`;

export const VerySmallText = styled(RegularText)`
  font-size: 8px;
`;

export const HeadingDark = styled(Heading)`
  color: var(--clr-grey);
`;

export const PagesHeading = styled(Heading)`
  color: var(--clr-white);
  border-block-end: 2px solid var(--clr-white);
`;

export const SubHeadingLight = styled(SubHeading)`
  color: var(--clr-white);
`;

export const SubHeadingDark = styled(SubHeading)`
  color: var(--clr-grey);
`;

export const SubHeadingRed = styled(SubHeading)`
  color: var(--clr-dark);
`;

export const LightText = styled(RegularText)`
  color: var(--clr-white);
`;

export const DarkText = styled(RegularText)`
  color: var(--clr-grey);
`;

export const ImageDiv = styled.div`
  position: relative;
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

export const PagesWrapper = styled.div`
  width: calc(100% - 30px);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-family: "Poppins", sans-serif;
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
