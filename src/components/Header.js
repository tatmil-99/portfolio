import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  height: 25%;
  max-width: 100%;
  border-bottom: 1px solid black;
`;

const Header = () => {
  return (
    <HeaderDiv>
      {/* <img src='/first-logo(1).svg' height='65' width='65' /> */}
      <svg width="100" height="100" viewBox="0 0 640 640" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
        <path id="f" d="m339.02 360.51c0 89.49-13.36 162.15-29.8 162.15-16.45 0-29.81-72.66-29.81-162.15 0-89.5 13.36-162.16 29.81-162.16 16.44 0 29.8 72.66 29.8 162.16z"/>
        <path id="e" d="m476.37 229.72c0-17.31-74.9-31.37-167.15-31.37-92.26 0-167.16 14.06-167.16 31.37 0 17.32 74.9 31.37 167.16 31.37 92.25 0 167.15-14.05 167.15-31.37z"/>
        <path id="b" d="m309.22 522.66c21.56-27.58 21.56-49.41 0-65.49-20.92-22.22-20.92-46.08 0-71.57 20.91-25.49 20.91-47.35 0-65.6-27.46-22.93-27.46-42.57 0-58.91 27.45-16.34 27.45-37.25 0-62.74"/>
        <path id="a" d="m431.76 229.72c-25.49-30.06-51.96-30.06-79.41 0-27.45 30.07-51.76 30.07-72.94 0-24.57-24.83-46.99-24.83-67.25 0-20.26 24.84-43.63 24.84-70.1 0"/>
        </defs>
        <use fillOpacity="0" stroke="#000" xlinkHref="#a"/>
        <use fillOpacity="0" stroke="#000" xlinkHref="#b"/>
        <use fill="#d767e0" xlinkHref="#f"/>
        <use fill="#724aa6" opacity=".7" xlinkHref="#e"/>
        <use fillOpacity="0" stroke="#921ac2" strokeWidth="20" xlinkHref="#b"/>
        <g fillOpacity="0">
        <use fill="#a008ac" xlinkHref="#a"/>
        <use stroke="#a3259a" strokeWidth="20" xlinkHref="#a"/>
        </g>
      </svg>
    </HeaderDiv>
  )
}

export default Header
