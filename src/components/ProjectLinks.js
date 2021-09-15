import React from 'react'
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ExternalLink } from 'react-external-link';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProjectLinksDiv = styled(FlexExtended)`
  padding: 10px 10px;
  width: 100%;
  text-align: left;
`;

const MyIcon = styled(GitHubIcon)`
  color: rgb(107, 122, 144);
`;


const ProjectLinks = (props) => {
  return (
    <ProjectLinksDiv>
      <ExternalLink href={props.link}>
        <MyIcon style={{fontSize: 30}} />
      </ExternalLink>
    </ProjectLinksDiv>
  )
}

export default ProjectLinks
