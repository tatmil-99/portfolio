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
  const returnSkills = (skills, i) => {
    return <li>{skills[i]}</li>
  }

  const gatherSkills = () => {
    for (let i = 0; i < skills.length; i++) {
      returnSkills(skills, i);
    }
  }

  return (
    <SkillsContent>
      <ul>
        {
          // skills.map((skill) => 
          //   returnSkills(skill))
          gatherSkills()
        }
      </ul>
    </SkillsContent>
  );
}

export default Skills;
