import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { Theme1, Theme2, Theme3 } from '../themes';

import Home from '../pages/Home';
import Education from '../pages/Education';
import Portfolio from '../pages/Portfolio';

const StyledScreen = styled.div`
  background-color: white;
  color: black;
  height: 70%;
  width: 60%;
  overflow: scroll;
  scrollbar-width: none;  /* Firefox */
  -ms-overflow-style: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 5px solid ${({ theme }) => theme.main};

`;

const ThemeNav = styled.div`
  position: sticky;
  top: 0;
  width: auto;
  height: 50px;
  background-color: white;
  z-index: 3;
  border-bottom: 5px solid ${({ theme }) => theme.main};
`;

const PageNav = styled.div`
  padding: 15px 0 15px 0;
  display: flex;
  position: sticky;
  top: 55px;
  width: 100%;
  background-color: white;
  z-index: 2;
  border-bottom: 5px solid ${({ theme }) => theme.main};
`;

const NavLink = styled(Link)`
  color: black;  // You can pull this from your theme if needed
  font-family: 'Arial', sans-serif;         // Set your desired font
  font-size: 20px;                          // Adjust font size
  text-decoration: none;                    // Remove underline by default

  &:hover {
    color: ${({ theme }) => theme.second}; 
  }

  &:active {
    color: ${({ theme }) => theme.second};
  }
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
          <ThemeNav>{children}
          <button onClick={toggleTheme1} id='T1'></button>
          <button onClick={toggleTheme2} id='T2'></button>
          <button onClick={toggleTheme3} id='T3'></button>
          </ThemeNav>

          <Router>
              {/* Navigation Bar */}
              <PageNav>{children}
                  <div style={{ width: '100%', textAlign: 'center'}}>
                    <NavLink to="/">Home </NavLink>
                  </div>
                  <div style={{ width: '100%', textAlign: 'center'}}>
                    <NavLink to="/education">Education</NavLink>
                  </div>
                  <div style={{ width: '100%', textAlign: 'center'}}>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                  </div>
              </PageNav>

            <div style={{top: '0px', padding: '30px', width: 'auto', height: 'auto', backgroundColor: 'white' }}>
              {/* Define Routes */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </div>
          </Router>
      
          </StyledScreen>
          </ThemeProvider>);
};

export default Screen;