import logo from './logo.svg';
import './App.css';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes'; // Import your themes
import Button from './components/button'; // Import your Button component
import Card from './components/screen'; // Import your Card component

const App = () => {
  const [theme, setTheme] = useState(lightTheme); // Default theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Optional Global styles */}
      <div style={{ padding: '20px' }}>
        <Button>Click Me</Button> {/* Button uses buttonBackground, buttonText */}
        <Card> {/* Card uses cardBackground, cardTextColor */}
          This is a card component with a different background color!
        </Card>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </ThemeProvider>
  );
};

export default App;
