import React, { Children } from 'react';
import { ThemeProvider, styled } from 'styled-components';
import { Theme1, Theme2, Theme3 } from '../themes';

const ProfileImage = styled.div`
  background-image: ${({ theme }) => theme.profile};
  background-size: cover;
  position: relative;
  padding: 20px;
  margin: 20px 20px 20px 0px;
  height: 207px;
  width: 160px;

  border: 4px solid ${({ theme }) => theme.main};

`;


const Home = ({ children }) => {
  return (
    <div style={{display: 'grid', gridTemplate: '"a . . ." "b b c c" "b b d d" "b b e e"'}}>
      <h1 style={{ gridArea: 'a' }}>Home Page</h1>
      <ProfileImage style={{ gridArea: 'b' }}></ProfileImage>{children}
      <p style={{ gridArea: 'c' }}> Welcome to my virtual CV! I'm Kerttu, a recent graduate from the University of Jyväskylä. This page may give some kind of idea of the things I'm into. I have a lot of interests in the IT area which has made it hard to navigate and choose the paths to pursue and develop more skills in. But there are things that I've enjoyed more that others. I like web development, UI/UX and usability design. I also enjoy working with databases, queries and statistical analysis. Software testing is something that also interests me.  </p>
      <h2 style={{ gridArea: 'd'}}> Contact info:</h2>
      <ul style={{ gridArea: 'e', listStyleType: 'none', paddingLeft: '0' }}>
        <li>phone: 0401702979</li>
        <li>email: kerttu.varis@icloud.com</li>
        <li>based in: Jyväskylä</li>
      </ul>
    </div>
  );
};

export default Home;