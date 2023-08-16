import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> welcome  i am doha</h2>
        <div className="prompt">
          <p> I am freshman software engineer .</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> My Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> As Front-End</h2>
            <span>
              ReactJS, Angular, HTML, CSS, React Native, Flutter,
               BootStrap, JavaScript
            </span>
          </li>
          <li className="item">
            <h2> As Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, 
              MySQL, MongoDB, SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages </h2>
            <span>JavaScript, Java, Python, C# for game development , TypeScript, dart</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
