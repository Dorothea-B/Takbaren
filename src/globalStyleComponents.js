import react from "react";
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
`;

export const HeadingDark = styled(Heading)`
  color: var(--clr-grey);
`;

export const SubHeadingLight = styled(SubHeading)`
  color: var(--clr-white);
`;

export const LightText = styled(RegularText)`
  color: var(--clr-white);
`;

export const DarkText = styled(RegularText)`
  color: var(--clr-grey);
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
