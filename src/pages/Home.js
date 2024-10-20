import React, { Children } from 'react';
import { ThemeProvider, styled } from 'styled-components';
import { Theme1, Theme2, Theme3 } from '../themes';

const ProfileImage = styled.div`
  background-image: ${({ theme }) => theme.profile};
  background-size: cover;
  position: relative;
  padding: 20px;
  margin: 20px 20px 20px 0px;
  height: 256px;
  width: 200px;

`;


const Home = ({ children }) => {
  return (
    <div style={{display: 'grid', gridTemplate: '"a . ." "b c d"'}}>
      <h1 style={{ gridArea: 'a' }}>Home Page</h1>
      <ProfileImage style={{ gridArea: 'b' }}></ProfileImage>{children}
      <p style={{ gridArea: 'c' }}>      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor magna quis augue ultricies iaculis. Nulla facilisi. Pellentesque luctus lacinia diam eget rutrum. Vivamus iaculis placerat nibh ac iaculis. Mauris sit amet sapien eu massa pharetra molestie. </p>
      <p style={{ gridArea: 'd' }}> 
      Phasellus pharetra ultricies velit. Sed luctus pharetra rhoncus. Mauris tempor laoreet nibh. Fusce eget ipsum tempus, lobortis odio eu, sagittis ante. Sed congue at sapien ac commodo. Aliquam at lorem vel risus semper ultricies. Integer purus velit, mattis ac aliquet eget, tincidunt eu ex. Duis fringilla consectetur mi, lobortis viverra diam vulputate ut. Nullam malesuada placerat mauris, non laoreet lectus egestas eget. Donec vel dignissim tellus.</p>
    </div>
  );
};

export default Home;