import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Edwin Silvestre</h2>
        <div className="prompt">
          <p>I'm a web develper</p>
          <GitHubIcon />
          <LinkedInIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS,HTML5,CSS,NPM,Bootstrap,MaterialUI</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS,MySQL,Git</span>
          </li>
          <li className="item">
            <h2>Languaes</h2>
            <span>JavaScript,PHP,Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
