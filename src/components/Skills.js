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
  const returnSkills = (skill) => {
    return <li>{skill}</li>
  }

  return (
    <SkillsContent>
      <ul>
        {
          skills.map((skill) => 
            returnSkills(skill))
        }
      </ul>
    </SkillsContent>
  );
}

export default Skills;
