import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <h2>Work experience</h2>
      <h3> Landis+Gyr May 2024 - August 2024</h3>
      <p> I worked as a part of the Test Automation team. My most used tools were Jenkins, to monitor the test runs and their health, and Zabbix, to monitor the health of the test servers. Git, Gerrit and Azure DevOps were used for project management and version control. </p>
      <p>
      In addition to the routine tasks, which included supervising smoke and regression test runs, investigating and solving problem situations in test environments and analyzing and reporting test results, I was involved in developing team processes and creating automated solutions to streamline work. I used technologies like Robot Framework, Docker and Powershell script.
      I enjoyed my summer and got good feedback. </p>
      <h2>Other projects</h2>
      <h3>Game projects</h3>
      <p>I've been a part of a couple of game projects. They show off more of my graphic design skills in both 3D-modeling and 2D art:</p>
      <a href="https://lumi-orkidea.itch.io/the-witch-of-mirktwir">
        <p>Witch of Mirktwir</p>
      </a>
      <a href="https://2deepgames.itch.io/project-haze">
        <p>Project Haze</p>
      </a>
      <h3>CV page</h3>
      <p>This CV page was made using React and Three.js.</p>
      <h3>Github</h3>
      <p>There are a couple other (school)projects in my <a href='https://github.com/kahvaris/'>Github</a>. I hope to expand it more in the future with small projects that help me learn more and revise.</p>
    </div>
  );
};

export default Portfolio;