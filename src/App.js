import './App.css';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme1, Theme2, Theme3 } from './themes'; // Import your themes
import Button from './components/button'; // Import your Button component
import Screen from './components/screen';
import BackG from './components/background';

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
        <button onClick={toggleTheme1} id='T1'></button>
        <button onClick={toggleTheme2} id='T2'></button>
        <button onClick={toggleTheme3} id='T3'></button>
          <div style={{ position: 'inherit', top: '50px', margin: '10px', width: 'inherit', height: '100%' }}>
            {/*<Button>Click Me</Button>*/}
            This is a
          </div>
        </Screen>
      </BackG>
    </ThemeProvider>
  );
};

export default App;
