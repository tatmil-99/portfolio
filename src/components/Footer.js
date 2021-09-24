import React from 'react';
import styled from 'styled-components';
import {socialLinks} from '../data';
import { ExternalLink } from 'react-external-link';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterDiv = styled(FlexExtended)`
  background-color: rgb(47, 48, 59);
  width: 100%;
  margin: 0px 0px 0px 0px;
  color: rgb(107, 122, 144);

    /* @media (max-width: 415px) {
    margin-bottom: 15px;
  } */
  
  /* p {
    margin: 50px 50px;
  } */
`;

const LinksContainer = styled(FlexExtended)`
  flex-direction: row;
`;

const CreditsContainer = styled(FlexExtended)``;

const MyGitHubIcon = styled(GitHubIcon)`
  color: rgb(107, 122, 144);
`;

const MyTwitterIcon = styled(TwitterIcon)`
  color: rgb(107, 122, 144);
`;

const MyLinkedInIcon = styled(LinkedInIcon)`
  color: rgb(107, 122, 144);
`;


const Footer = () => {

  return (
    <FooterDiv>
      <LinksContainer>
        {
          socialLinks.map((link) => {
            switch (link.account) {
              case 'GitHub':

                return (
                  <ExternalLink href={link.link}>
                    <MyGitHubIcon style={{fontSize: 30}} />
                  </ExternalLink>
                );
              case 'Twitter':

                return (
                  <ExternalLink href={link.link}>
                    <MyTwitterIcon style={{fontSize: 30}} />
                  </ExternalLink>
                );
              case 'LinkedIn':

                return (
                  <ExternalLink href={link.link}>
                    <MyLinkedInIcon style={{fontSize: 30}} />
                  </ExternalLink>
                );
              default:
                return (
                  null
                );
            }
          })
        }
      </LinksContainer>
      <CreditsContainer>
        <p>Designed & Built by Tatien Miller</p>
      </CreditsContainer>
    </FooterDiv>
  );
}

export default Footer;
