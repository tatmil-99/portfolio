import React from 'react';
import styled from 'styled-components';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProjectDescriptionDiv = styled(FlexExtended)`

  p {
    color: rgb(107, 122, 144);
    padding: 20px 0 20px;
    margin: 0;
    text-align: left;
    line-height: 1.5;
    font-size: 1em;
  }

  ul {
    text-align: left;
    list-style: none;
    padding: 0;
    word-spacing: 5px;
    line-height: 1.3;
    margin: 5px 0 5px 50px;
    color: rgb(252,15,192);
  }
`;

const ProjectDescription = (props) => {

  return (
    <ProjectDescriptionDiv>
      <p className='description'>{props.description}</p>
      <ul>
        {
          props.listItem.map((i, index) => {
            
            return (
              <li key={index}>{i}</li>
            );
          })
        }
      </ul>
    </ProjectDescriptionDiv>
  );
}

export default ProjectDescription;
