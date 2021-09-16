import React from 'react'
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { ExternalLink } from 'react-external-link';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProjectLinksDiv = styled(FlexExtended)`
  padding: 10px 10px;
  width: 100%;
  text-align: left;
`;

const MyIcon = styled(GitHubIcon)`
  color: rgb(107, 122, 144);
`;

const ToAppIcon = styled(ExitToAppIcon)`
  color: rgb(107, 122, 144);
`;

const MyExternalLink = styled(ExternalLink)`
  margin-right: 15px;
`;


const ProjectLinks = (props) => {

  const toAppLink = () => {
    return (
      props.liveLink !== null ? 
      <MyExternalLink href={props.liveLink}>
        <ToAppIcon style={{fontSize: 37}} />
      </MyExternalLink> : null
    );
  }

  return (
    <ProjectLinksDiv>
      <MyExternalLink href={props.link}>
        <MyIcon style={{fontSize: 30}} />
      </MyExternalLink>
      {toAppLink()}
    </ProjectLinksDiv>
  )
}

export default ProjectLinks
