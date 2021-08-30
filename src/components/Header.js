import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 25%;
  width: 100%;
  padding-left: 25px;
  
`;

const SymbolTop = styled.div`
  display: block;
  width: 75px;
  height: 25px;
  background-color: silver;
  position: relative;
  left: 0;
  right: 0;
`;

const SymbolBottom = styled.div`
  display: block;
  width: 25px;
  height: 85px;
  background-color: black;
  position: relative;
  left: 25px;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <SymbolTop />
      <SymbolBottom />
    </HeaderDiv>
  )
}

export default Header
