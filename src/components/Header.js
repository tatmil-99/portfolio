import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 25%;
  max-width: 100%;
  border-bottom: 1px solid black;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <h1>Tatien Miller</h1>
    </HeaderDiv>
  )
}

export default Header
