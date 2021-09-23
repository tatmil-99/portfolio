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
    
  }
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
