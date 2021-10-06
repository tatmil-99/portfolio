import React from 'react';
import styled from 'styled-components';
import Emoji from './Emoji';
import {skills} from '../data';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SkillsContent = styled(FlexExtended)`
  ul {
    list-style: none;
    /* word-spacing: 5px; */
    /* letter-spacing: .1em; */
    line-height: 1.5;
    text-align: left;
    padding: 0;
    margin-bottom: 0;

    li {
      @media (min-width: 769px) {
        /* display: inline-block;
        word-spacing: 5px;
        padding: 15px; */
        padding: 10px;
        word-spacing: 10px;
        font-size: 1.2em;
        text-transform: uppercase;

        span {
          padding: 15px;
        }
      }
    }
  }

  /* @media (min-width: 769px) {
    font-size: 1.2em;
  } */
`;


const Skills = () => {

  return (
    <SkillsContent>
      <ul>
        {
          skills.map((skill) => {

            return (
              <li><Emoji symbol='✅' /> {skill}</li>
            );
          })
        }
      </ul>
    </SkillsContent>
  );
}

export default Skills;
