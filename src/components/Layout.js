import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  height: 4em;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  background:  black;
  display: grid;
  grid-template-columns: minMax(4em, auto) 1fr auto minMax(4em, auto);
  justify-items: center;
  align-items: center;
  text-align: center;
`;

export const NavBar = ({
  left,
  center,
  ternaryRight,
  right,
  secondaryRight,
  fixed,
}) => (
    <NavBarContainer fixed={fixed}>
      {left || <div />}
      {center}
      {ternaryRight || <div /> }
      {secondaryRight || <div />}
      {right}
    </NavBarContainer>
);

export const ContentInset = styled.section`
  padding: 50px 18px 30px 18px;
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  grid-area: content;
`;

