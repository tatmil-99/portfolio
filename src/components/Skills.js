import React from 'react';
import styled from 'styled-components';
import Emoji from './Emoji';
import {skills} from '../data';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const SkillsContent = styled(FlexExtended)`

`;


const Skills = () => {

  return (
    <SkillsContent>
      <ul>
        {
          skills.map((skill) => {

            return (
              <li>{skill}</li>
            );
          })
        }
      </ul>
    </SkillsContent>
  );
}

export default Skills;
