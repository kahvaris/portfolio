import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

//Theme
import { ThemeProvider } from 'styled-components';
import { Theme1, Theme2, Theme3 } from '../themes';

const StyledScreen = styled.div`
  background-color: white;
  color: ${({ theme }) => theme.screenTextColor}; /* Uses screenTextColor from theme */
  height: 70%;
  width: 60%;
  overflow: scroll;
  scrollbar-width: none;  /* Firefox */
  -ms-overflow-style: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 10px solid ${({ theme }) => theme.screenBackground};

`;

//  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

const Screen = ({ children }) => {
  const [theme, setTheme] = useState(Theme1); // Default theme 1

  const toggleTheme1 = () => {
    setTheme(Theme1);
  };
  const toggleTheme2 = () => {
    setTheme(Theme2);
  };
  const toggleTheme3 = () => {
    setTheme(Theme3);
  };
  return (<ThemeProvider theme={theme}>
          <StyledScreen>{children}
          <div style={{ position: 'fixed', top: '0', width: '100px', height: '50px', backgroundColor: 'green'}}>
          <button onClick={toggleTheme1} id='T1'></button>
          <button onClick={toggleTheme2} id='T2'></button>
          <button onClick={toggleTheme3} id='T3'></button>
          </div>
          </StyledScreen>
          </ThemeProvider>);
};

export default Screen;