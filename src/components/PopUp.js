import React from "react";
import CookieConsent from "react-cookie-consent";
import "../index.css";
import styled from "styled-components/macro";

const PopUp = () => {
  return (
    <Wrapper>
      <CookieConsent
        location='bottom'
        buttonText='Accept'
        cookieName='myAwesomeCookieName2'
        style={{ background: "#F6BDAC", color: "#343B3F" }}
        buttonStyle={{
          background: "#E5E55E5",
          color: "#6F1132",
          fontSize: "13px",
          fontFamily: "Poppins",
        }}
        expires={150}
      >
        <ErrorText>
          This website uses cookies to enhance the user experience.
        </ErrorText>
      </CookieConsent>
    </Wrapper>
  );
};

export default PopUp;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 7px 7px 15px 1px rgb(52 59 63 / 72%);
`;

export const ErrorText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 16px;
  font-weight: 500;
  color: var(--clr-grey);
  text-align: center;
`;
