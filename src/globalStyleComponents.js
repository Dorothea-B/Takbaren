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
  margin-top: 2rem;
`;

export const ImageDiv = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const PagesImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(52, 59, 63, 0.4);
  background-blend-mode: multiply;
  overflow: hidden;
`;

export const ImageText = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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

export const MenuWrapper = styled.div`
  background-color: var(--clr-white);
  padding: 3rem 3rem 10rem;
  margin: 1rem;

  // export const heading_dark = styled.h1
`;
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
  cursor: pointer;
  border: none;
  padding: 0.8rem;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  margin-top: 3rem;
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
`;

export const LoadingScreen = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 600;
`;

/*Alla text-stilkomponenter. */

export const Heading = styled.h1`
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  font-size: 1.5em;
  white-space: break-spaces;

  @media ${device.mobileS} {
    font-size: 1.5em;
  }
  @media ${device.mobileL} {
    font-size: 2em;
  }
  @media ${device.tablet} {
    font-size: 2em;
  }
  @media ${device.laptop} {
    font-size: 2.2em;
  }
  @media ${device.desktop} {
    font-size: 2.8em;
  }
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

  @media ${device.mobileS} {
    font-size: 1.3em;
  }
  @media ${device.mobileL} {
    font-size: 1.3em;
  }
  @media ${device.tablet} {
    font-size: 1.7em;
  }
  @media ${device.laptop} {
    font-size: 1.9em;
  }
  @media ${device.desktop} {
    font-size: 2em;
  }
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
    font-size: 1.1em;
  }
  @media ${device.mobileL} {
    font-size: 1.5em;
  }
  @media ${device.tablet} {
    font-size: 1.6em;
  }
  @media ${device.laptop} {
    font-size: 1.5em;
  }
  @media ${device.desktop} {
    font-size: 2em;
  }
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
export const SubHeadingPink = styled(SubHeading)`
  color: var(--clr-light);
`;

export const MainText = styled.div`
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-weight: 300;
  white-space: break-spaces;

  @media ${device.mobileS} {
    font-size: 1.1em;
  }
  @media ${device.mobileL} {
    font-size: 1.3em;
  }
  @media ${device.tablet} {
    font-size: 1.5em;
  }
  @media ${device.laptop} {
    font-size: 1.5em;
  }
  @media ${device.desktop} {
    font-size: 2em;
  }
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
  font-family: "Playfair Display", serif;
  font-size: 1em;
  font-style: italic;
  font-weight: 300;
  color: var(--clr-grey);
  text-decoration: underline;
  cursor: pointer;
  white-space: break-spaces;

  & :hover {
  }
`;
export const MainLinkLight = styled.a`
  font-family: "Playfair Display", serif;
  font-size: 1em;
  font-style: italic;
  font-weight: 300;
  color: var(--clr-light);
  text-decoration: underline;
  cursor: pointer;
  white-space: break-spaces;

  & :hover {
  }
`;

export const RegularText = styled.p`
  font-family: "Poppins", sans-serif;
  /* font-size: 12px; */
  white-space: break-spaces;
  line-height: 1.3;
  margin-bottom: 1rem;

  @media ${device.mobileS} {
    font-size: 0.7em;
  }
  @media ${device.mobileL} {
    font-size: 0.8em;
  }
  @media ${device.tablet} {
    font-size: 0.9em;
  }
  @media ${device.laptop} {
    font-size: 0.9em;
  }
  @media ${device.desktop} {
    font-size: 0.9em;
  }
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

export const RegularLink = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-style: italic;
  text-decoration: underline;
  white-space: break-spaces;

  cursor: pointer;

  @media ${device.mobileS} {
    font-size: 0.7em;
  }
  @media ${device.mobileL} {
    font-size: 0.8em;
  }
  @media ${device.tablet} {
    font-size: 0.9em;
  }
  @media ${device.laptop} {
    font-size: 0.9em;
  }
  @media ${device.desktop} {
    font-size: 0.9em;
  }

  & :hover {
  }
`;

export const RegularLinkDark = styled(RegularLink)`
  color: var(--clr-grey);

  & :hover {
  }
`;
export const RegularLinkLight = styled(RegularLink)`
  color: var(--clr-white);
  & :hover {
  }
`;
export const RegularLinkRed = styled(RegularLink)`
  color: var(--clr-dark);
  & :hover {
  }
`;

// Gamla textstilar - uppdatera där de fortf. används!

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

export const PagesHeading = styled(Heading)`
  color: var(--clr-white);
  border-block-end: 2px solid var(--clr-white);
`;

export const DrinkImgHeading = styled(Heading)`
  color: var(--clr-white);
  font-size: 1em;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.3em;
  }

  @media (min-width: 1024px) {
    font-size: 1.5em;
  }
`;
