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
    line-height: 1.5;
    text-align: left;
    padding: 0;
    margin-bottom: 0;

    li {
      @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    margin-top: 26px;
  }
`;


const Skills = () => {

  return (
    <SkillsContent>
      <ul>
        {
          skills.map((skill, index) => {

            return (
              <li key={index}><Emoji symbol='✅' /> {skill}</li>
            );
          })
        }
      </ul>
    </SkillsContent>
  );
}

export default Skills;
