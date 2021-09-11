import React from 'react'
import styled from 'styled-components';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const ProjectDescriptionDiv = styled(FlexExtended)`
  p {
    color: rgb(107, 122, 144);
    padding: 20px 0 20px;
    margin: 0;
    text-align: center;
    line-height: 1.5;
    font-size: 1em;
  }
  
  ul {
    ${props => props.FlexExtended}
    flex-direction: row;
  }
`;

const ProjectDescription = () => {
  return (
    <ProjectDescriptionDiv>
      <p>A e-commerce web app that sells coffee beans. Made to mimic realworld apps and practice data management. </p>
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>StyledComponents</li>
        <li>JavaScript</li>
      </ul>
    </ProjectDescriptionDiv>
  )
}

export default ProjectDescription
