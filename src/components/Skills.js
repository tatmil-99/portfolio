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

  const returnSkill = () => {

    for (let i = 0; i < skills.length; i++) {
      return skills[i];
    }
  }

  return (
    <SkillsContent>
      <ul>
        {
         returnSkill()
        }
      </ul>
    </SkillsContent>
  );
}

export default Skills;
