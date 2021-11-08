import React from 'react';
import styled from 'styled-components';
import Emoji from './Emoji';
import headshot from '../assets/headshot.jpg';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderDiv = styled(FlexExtended)`
  width: 100%;
  margin: 70px 0px 0px 0px;

  h2 {
    font-weight: 550;
    margin: 30px 0px 0px 0px;
    font-size: 37px;

    @media (min-width: 768px) {
      font-size: 3.5em;
      font-size: 4.5em;
      margin: 80px 0 32px;
    }
    @media (min-width: 768px) {
      margin-top: 80px;
    }
  }
`;

const BioDiv = styled.div`
  margin: 10px 17px;
  
  p {
    color: rgb(107, 122, 144);
    text-align: center;
    line-height: 1.5;
    font-size: 1em;

    @media (min-width: 768px) {
      width: 50%;
      margin: 19px auto;
      font-size: 1.2em;
      @media (min-height: 1024px) {
        width: 75%;
      }
    }
  }

  @media (min-width: 540px) {
    padding: 0 50px 0;
  }
  @media (min-width: 768px) {
    padding: 0 150px 0;
    margin: 0 auto;
    @media (max-height: 1024px) {
      padding: 0 50px 0;
    }
  }
`;

const ButtonDivs = styled(FlexExtended)``;

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

  @media (min-width: 768px) {
    width: 50%;
    margin: 32px 0 262px;
    font-size: .80em;
    @media (min-height: 1024px) {
      width: 75%;
    }
  }
`;

const HeadShot = styled(FlexExtended)`
  flex-direction: row;
  justify-content: center;
  margin: 50px 17px 50px 17px;

  img {
    margin: 30px 0px 30px 0px; 
    /* height: 12em;
    width: 12em;  */
    max-width: 100%;
    height: auto;
    border-radius: 2px;

    @media (min-width: 768px) {
      width: 50%;
    }
    @media (min-height: 1024px) {
      width: 75%;
    }
  }

  @media (min-width: 768px) {
    padding: 0 150px 0;
    margin: 0 auto;
    margin-bottom: 50px;
    @media (max-height: 1024px) {
      padding: 0 50px 0;
    }
  }

    @media (max-height: 811px) {
      margin-top: 150px;
      @media (max-height: 736px) {
        margin-top: 225px;
      }
      @media (max-height: 568px) {
        margin-top: 90px;
      }
    }
    @media (min-height: 1024px) {
      margin-top: 130px;
    }
    @media (min-height: 1366px) {
      margin-top: 0px;
      margin-bottom: 200px;
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
        <img alt='headshot of me' src={headshot} />
      </HeadShot>
    </HeaderDiv>
  );
}

export default Header;
