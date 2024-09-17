import React from 'react';
import styled from 'styled-components';

const BG = styled.div`
  background: linear-gradient(-45deg, ${({ theme }) => theme.backgroundTheme}, white, ${({ theme }) => theme.backgroundTheme}, white, ${({ theme }) => theme.backgroundTheme}, white);
  background-size: cover;
  padding: 0;
  margin: 0;
  height: 100%;
  transition: background-color 0.3s;
`;

const BackG = ({ children }) => {
  return <BG>{children}</BG>;
};

export default BackG;