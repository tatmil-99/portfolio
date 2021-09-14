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
  box-sizing: border-box;
  margin: 10px 17px;
  width: 90vw;
  /* height: 400px; */
  border-radius: 2px;
  padding: 25px 25px;
  
  h3 {
    /* color: rgb(255, 255, 255); */
    /* color: rgb(107, 122, 144); */
    color: rgb(103, 54, 221);
    /* color: rgb(252,15,192); */
    /* border-bottom: 2px solid rgb(252,15,192); */
    margin: 10px 0 10px;
    
  }
`;


const ProjectContent = () => {
  return (
    <ProjectContentDiv>
      <h3>The Bean</h3>
      <ProjectDescription
        description={'A e-commerce web app that sells coffee beans. Made to mimic realworld apps and practice data management.'}
        listItem={['React', 'Redux', 'StyledComponents', 'JavaScript']}
        
      />
      <ProjectLinks

      />
    </ProjectContentDiv>
  )
}

export default ProjectContent
