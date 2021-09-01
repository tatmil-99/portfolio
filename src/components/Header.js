import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 25%; */
  width: 100%;
  margin: 70px 0px 0px 0px;

  h1 {
    font-weight: 550;
    margin: 30px 0px 0px 0px;
  }
`;

const BioDiv = styled.div`
  font-size: 1em;
  margin: 10px 17px;
  
  p {
    text-align: center;
    line-height: 1.5;
  }
`;

const Header = () => {
  return (
    <HeaderDiv>
      <h1>Tatien Miller</h1>
      <BioDiv>
        <p>
          Full Stack Developer + Coding Mentor + 
          Coffee Connoisseur + Future Entreprenuer and 
          Digital Nomad + Digital Artist
        </p>
      </BioDiv>
    </HeaderDiv>
  )
}

export default Header
