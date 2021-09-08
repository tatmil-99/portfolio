import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  background-color: rgb(47, 48, 59);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0px 0px 0px 0px;
  color: rgb(107, 122, 144);

    /* @media (max-width: 415px) {
    margin-bottom: 15px;
  } */
  
  p {
    margin: 50px 50px;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <p>Created by Tatien Miller</p>
    </FooterDiv>
  )
}

export default Footer
