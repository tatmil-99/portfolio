import React from 'react';
import styled from 'styled-components';
import Emoji from './Emoji';
import ProjectContent from './ProjectContent';
import Skills from './Skills';
import ContactForm from './ContactForm';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const MainDiv = styled(FlexExtended)`
  /* background-color: rgb(255, 255, 255); */
  height: 50%;
  width: 100%;
`;

const StoryDiv = styled(FlexExtended)`
  margin: 0px 17px 0px;

  h2 {
    margin: 0;
    font-size: 32px;
    font-weight: 550;

    @media (min-width: 769px) {
      width: 100%;
      text-align: center;
    }
  }

  p {
    color: rgb(107, 122, 144);
    text-align: center;
    line-height: 1.5;
    font-size: 1em;
    margin: 29px 0 80px;

    @media (min-width: 769px) {
      font-size: 1.2em;
      margin-top: 55px;
    }
  }

  @media (min-width: 769px) {
    padding: 0 150px 0;
  }
`;


const ProjectsContainer = styled(FlexExtended)`
  margin-bottom: 80px;

  h2 {
      margin: 0 0 29px;
      font-size: 32px;
      font-weight: 550;

      @media (min-width: 769px) {
        width: 100%;
        text-align: center;
      }
    }

    @media (min-width: 769px) {
      padding: 0 150px 0;
      margin-right: 17px;
      margin-left: 17px;
    }
`;

const ProjectContentWrapper = styled(FlexExtended)`
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
`;

const SkillsContainer = styled(ProjectsContainer)``;


const Main = () => {
  return (
    <MainDiv>
      <StoryDiv>
        <h2>My Digital Story</h2>
        <p> My name is Tatien Miller and I am a certified full-stack developer -- with an emphasis in front-end development -- for now. My digital journey began in college, pre-covid, where I was studying business. Listed in the required courses to take was Computer Science 101. I quickly discovered I loved solving the cryptic coding errors that would arise in homework. Unfortunately, this experience was cut short by Covid. It was then after this I decided to attend a virtual coding bootcamp. Although hard, bootcamp solidified my interest in programming and web development. Since my graduation, my time has been spent learning and building projects... like this portfolio you are viewing!</p>
      </StoryDiv>
      <ProjectsContainer>
        <h2><Emoji symbol='👉' /> Projects</h2>
        <ProjectContentWrapper>
          <ProjectContent />
        </ProjectContentWrapper>
      </ProjectsContainer>
      <SkillsContainer>
        <h2><Emoji symbol='🏆' /> Skills <Emoji symbol='🏆' /></h2>
        <Skills />
      </SkillsContainer>
      <ContactForm />
    </MainDiv>
  );
}

export default Main;
