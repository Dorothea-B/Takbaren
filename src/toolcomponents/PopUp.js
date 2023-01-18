import React from "react";
import CookieConsent from "react-cookie-consent";
import "../index.css";
import styled from "styled-components/macro";

const PopUp = () => {
  return (
    
    <CookieConsent
      location='bottom'
      buttonText='I understand'
      cookieName='CookiePopUp'
      overlay='true'
      style={{
        background: "#F7F6F0",
        boxShadow: "7px 7px 15px 1px rgba(52, 59, 63, 0.72)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        width: "300px",
      }}
      buttonStyle={{
        background: "#6F1132",
        color: "#F7F6F0",
        fontSize: "14px",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "bold",
        cursor: "pointer",
        border: "none",
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        padding: "0.5rem",
        position: "absolute",
        bottom: "30px",
        left: "0",
        right: "0",
        height: "3rem",
        marginLeft: "3rem",
        marginRight: "3rem",
      }}
      expires={365}
    >
      <PopUpMessage>
        This website uses cookies to enhance the user experience.
      </PopUpMessage>
    </CookieConsent>
    
  );
};

export default PopUp;

 export const PopUpMessage = styled.p`
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  color: var(--clr-dark);
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 2.5rem;
`;

