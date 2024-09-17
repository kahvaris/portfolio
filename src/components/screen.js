import React from 'react';
import styled from 'styled-components';

const StyledScreen = styled.div`
  background-color: white;
  color: ${({ theme }) => theme.screenTextColor}; /* Uses screenTextColor from theme */
  height: 70%;
  width: 60%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 10px solid ${({ theme }) => theme.screenBackground};

`;

//  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

const Screen = ({ children }) => {
  return <StyledScreen>{children}</StyledScreen>;
};

export default Screen;