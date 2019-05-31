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
  grid-area: content;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  padding: 20px 20px 20px 18px;
  max-width: 500px;
`;

