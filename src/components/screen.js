// src/components/Card.js
import React from 'react';
import styled from 'styled-components';

// Styled card using different theme properties
const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground}; /* Uses cardBackground from theme */
  color: ${({ theme }) => theme.cardTextColor}; /* Uses cardTextColor from theme */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;