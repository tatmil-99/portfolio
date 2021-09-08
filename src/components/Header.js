import React from 'react';
import styled from 'styled-components';
import Emoji from './Emoji';
import user from '../assets/user.png';

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

  h2 {
    font-weight: 550;
    margin: 30px 0px 0px 0px;
    font-size: 37px;
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

const HeadShot = styled(FlexExtended)`
  flex-direction: row;
  justify-content: center;
  margin: 50px 0px 50px 0px;

  img {
    margin: 30px 0px 30px 0px;
    height: 12em;
    width: 12em;
  }
`;


const Header = () => {

  return (
    <HeaderDiv>
      <h2>Tatien Miller</h2>
      <BioDiv>
        <p>
          <Emoji symbol='🧑‍💻' /> Full Stack Developer + Coding Mentor + 
          Coffee Connoisseur + Future Entreprenuer and 
          Digital Nomad + Digital Mechanic <Emoji symbol='🛠️' /><Emoji symbol='🚀' />
        </p>
        <ButtonDivs>
          <ResumeBtn onClick={(e) => {e.preventDefault();
            window.open('https://docs.google.com/document/d/1NjrPNY6_sjMBF_IkvJ-zgtfdAO2cRcwTrAUkq8JIk6I/edit?usp=sharing');
            }}>My Resume
          </ResumeBtn>
        </ButtonDivs>
      </BioDiv>
      <HeadShot>
        <img alt='headshot of me' src={user} />
      </HeadShot>
    </HeaderDiv>
  )
}

export default Header
