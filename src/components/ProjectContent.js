import React from 'react'
import styled from 'styled-components';
import ProjectDescription from './ProjectDescription';
import ProjectLinks from './ProjectLinks';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const ProjectContentDiv = styled(FlexExtended)`
  background-color: rgb(47, 48, 59);

  h3 {
    /* color: rgb(255, 255, 255); */
    /* color: rgb(107, 122, 144); */
    color: rgb(103, 54, 221);
    /* color: rgb(252,15,192); */
    /* border-bottom: 2px solid rgb(252,15,192); */
  }
`;


const ProjectContent = () => {
  return (
    <ProjectContentDiv>
      <h3>The Bean</h3>
      <ProjectDescription />
      <ProjectLinks />
    </ProjectContentDiv>
  )
}

export default ProjectContent