import React from 'react';
import styled from 'styled-components';

const FlexExtended = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainDiv = styled(FlexExtended)`
  /* background-color: rgb(255, 255, 255); */
  height: 50%;
  width: 100%;
`;

const StoryDiv = styled(FlexExtended)`
  flex-direction: row;

  h2 {
    font-size: 32px;
    font-weight: 550;
  }
`;

const Main = () => {
  return (
    <MainDiv>
      <StoryDiv>
        <h2>My Digital Story</h2>
        <p></p>
      </StoryDiv>
    </MainDiv>
  )
}

export default Main
