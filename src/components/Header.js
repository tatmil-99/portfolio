import React from 'react';
import styled from 'styled-components';
import Emoji from './Emoji';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderDiv = styled(FlexExtended)`
  /* background-color: rgb(255, 255, 255); */
  width: 100%;
  margin: 70px 0px 0px 0px;

  h1 {
    font-weight: 550;
    margin: 30px 0px 0px 0px;
  }
`;

const BioDiv = styled.div`
  margin: 10px 17px;
  
  p {
    color: rgb(107, 122, 144);
    text-align: center;
    line-height: 1.5;
    font-size: 1em;
  }
`;

const ButtonDivs = styled(FlexExtended)`

`;

const ResumeBtn = styled.button`
  background-color: rgb(103, 54, 221);
  font-size: .70em;
  font-weight: 500;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  text-align: center;
  border-radius: 2px;
  padding: 16px 32px;
  cursor: pointer;
  width: 100%;
  margin: 16px 16px;
  letter-spacing: .1em;
`;



const Header = () => {

  return (
    <HeaderDiv>
      <h1>Tatien Miller</h1>
      <BioDiv>
        <p>
          <Emoji symbol='🧑‍💻' /> Full Stack Developer + Coding Mentor + 
          Coffee Connoisseur + Future Entreprenuer and 
          Digital Nomad + Digital Mechanic <Emoji symbol='🛠️' /><Emoji symbol='🚀' />
        </p>
        <ButtonDivs>
          <ResumeBtn>My Resume</ResumeBtn>
        </ButtonDivs>
      </BioDiv>
    </HeaderDiv>
  )
}

export default Header
