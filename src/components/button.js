import React from 'react';
import styled from 'styled-components';

// Styled button using theme properties
const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground}; /* Uses buttonBackground from theme */
  color: ${({ theme }) => theme.buttonText}; /* Uses buttonText from theme */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBackground}; /* Uses buttonHoverBackground from theme */
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;