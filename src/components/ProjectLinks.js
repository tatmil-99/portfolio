import React from 'react'
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProjectLinksDiv = styled(FlexExtended)`
  color: rgb(107, 122, 144);
  padding: 10px 10px;
  width: 100%;
  text-align: left;
`;


const ProjectLinks = () => {
  return (
    <ProjectLinksDiv>
      <GitHubIcon style={{fontSize: 30}} />
    </ProjectLinksDiv>
  )
}

export default ProjectLinks
