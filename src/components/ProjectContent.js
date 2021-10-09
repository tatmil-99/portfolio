import React from 'react';
import styled from 'styled-components';
import ProjectDescription from './ProjectDescription';
import ProjectLinks from './ProjectLinks';
import {projects} from '../data';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectContentDiv = styled(FlexExtended)`
  background-color: rgb(47, 48, 59);
  box-sizing: border-box;
  margin: 10px 17px;
  width: 90vw;
  border-radius: 2px;
  padding: 25px 25px;
  
  h3 {
    color: rgb(103, 54, 221);
    margin: 10px 0 10px;
  }

  @media (min-width: 540px) {
    width: 375px;
  }

  @media (min-width: 768px) {
    width: 438px;
    font-size: 1.2em;
    margin: 17px;
  }
`;


const ProjectContent = () => {

  return (
    projects.map((item, index) => {
      return (
        <ProjectContentDiv key={index}> 
          <h3>{item.title}</h3>
          <ProjectDescription 
            description={item.description}
            listItem={item.technologies}
          />
          <ProjectLinks 
            link={item.link}
            liveLink={item.liveLink}
          />
        </ProjectContentDiv>
      );
    })
  );
}

export default ProjectContent;
