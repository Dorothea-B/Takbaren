import react from "react";
import styled from "styled-components/macro";
import SHLogo from "../assets/SH_logo-01.svg";
import '../index.css'

const FooterWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: space-between;
bottom: 0px;
padding: 1rem;

`

const Image = styled.img`
width: 13rem;
flex: 0.4;
max-width: 10rem;
cursor: pointer;
`

const Copyright = styled.p`
flex: 1;
text-align: right;
width: 50%;
font-size: 0.65rem;
color: var(--clr-grey);
opacity: 0.6;
font-family: Poppins;
align-self: flex-end;
`


const Footer = () => {  

  return (
    <FooterWrapper>
   <a href="https://www.strandhotel.se/">
    <Image src={SHLogo} alt="Strand Hotel logo" />
    </a>
    <Copyright>© 2022 Best Western Strand Hotel. All rights reserved.</Copyright>
    </FooterWrapper>
  );
};

export default Footer;

