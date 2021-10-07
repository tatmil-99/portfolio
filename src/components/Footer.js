import React from 'react';
import styled from 'styled-components';
import {socialLinks} from '../data';
import { ExternalLink } from 'react-external-link';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterDiv = styled(FlexExtended)`
  width: 100%;
  margin: 0px 0px 0px;
  color: rgb(107, 122, 144);

    @media (min-width: 769px) {
    font-size: 1.2em;
  }
`;

const LinksContainer = styled(FlexExtended)`
  padding: 15px;
  
  ul {
    margin: 15px 0 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;

    li {
      margin: 0 15px 0;

      p {
        text-decoration: none;
      }
    }
  }
`;

const CreditsContainer = styled(FlexExtended)`
  padding: 15px;
  
  p {
    margin: 0 0 15px;
    font-size: .9em;
  }
`;

const MyGitHubIcon = styled(GitHubIcon)`
  color: rgb(107, 122, 144);
`;

const MyTwitterIcon = styled(TwitterIcon)`
  color: rgb(107, 122, 144);
`;

const MyLinkedInIcon = styled(LinkedInIcon)`
  color: rgb(107, 122, 144);
`;

const BlogIcon = styled(ArticleIcon)`
  color: rgb(107, 122, 144);
`;


const Footer = () => {

  return (
    <FooterDiv>
      <LinksContainer>
        <ul>
          {
            socialLinks.map((link) => {
              switch (link.account) {
                case 'GitHub':

                  return (
                    <li>
                      <ExternalLink href={link.link}>
                        <MyGitHubIcon style={{fontSize: 30}} />
                      </ExternalLink>
                    </li>
                  );
                case 'Twitter':

                  return (
                    <li>
                      <ExternalLink href={link.link}>
                        <MyTwitterIcon style={{fontSize: 30}} />
                      </ExternalLink>
                    </li>
                  );
                case 'LinkedIn':

                  return (
                    <li>
                      <ExternalLink href={link.link}>
                        <MyLinkedInIcon style={{fontSize: 30}} />
                      </ExternalLink>
                    </li>
                  );
                case 'Blog':

                  return (
                    <li>
                      <ExternalLink href={link.link}>
                        <BlogIcon style={{fontSize: 30}} />
                      </ExternalLink>
                    </li>
                  ); 
                default:
                  return (
                    null
                  );
              }
            })
          }
        </ul>
      </LinksContainer>
      <CreditsContainer>
        <p>Designed & Built by Tatien Miller</p>
      </CreditsContainer>
    </FooterDiv>
  );
}

export default Footer;
