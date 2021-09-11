import React from 'react'
import styled from 'styled-components';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
`;

const ProjectDescriptionDiv = styled(FlexExtended)`
  p {
    color: rgb(107, 122, 144);
  }
`;

const ProjectDescription = () => {
  return (
    <ProjectDescriptionDiv>
      <p>An app</p>
    </ProjectDescriptionDiv>
  )
}

export default ProjectDescription
