import './App.css';
import React, { useState } from 'react';

//Theme
import { ThemeProvider } from 'styled-components';
import { Theme1, Theme2, Theme3 } from './themes';

//Components
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
        </Screen>
      </BackG>
    </ThemeProvider>
  );
};

export default App;
