import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';

//Theme
import { ThemeProvider } from 'styled-components';
import { Theme1, Theme2, Theme3 } from './themes';

//Components
import Button from './components/button';
import Screen from './components/screen';
import BackG from './components/background';

import Home from './pages/Home';
import Education from './pages/Education';
import Portfolio from './pages/Portfolio';


const App = () => {
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

  return (
    <ThemeProvider theme={theme}>
      {/* Optional Global styles */}
      <BackG>
        
        <Screen>
          <div style={{ position: 'fixed', top: '0', width: '100px', height: '50px', backgroundColor: 'yellow'}}>
          <button onClick={toggleTheme1} id='T1'></button>
          <button onClick={toggleTheme2} id='T2'></button>
          <button onClick={toggleTheme3} id='T3'></button>
          </div>
          <div style={{ position: 'inherit', top: '50px', padding: '30px', width: 'auto', height: 'auto', backgroundColor: 'beige' }}>
            {/*<Button>Click Me</Button>*/}
            <Router>
            <div>
              {/* Navigation Bar */}
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/education">Education</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                </ul>
              </nav>

              {/* Define Routes */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </div>
          </Router>
      

          </div>
        </Screen>
      </BackG>
    </ThemeProvider>
  );
};

export default App;
