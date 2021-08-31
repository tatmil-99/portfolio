import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: row;
  height: 25%;
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <img src='/first-logo(1).svg' height='65' width='65' />
    </HeaderDiv>
  )
}

export default Header
