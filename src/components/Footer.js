import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/EdwinTJ">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/edwin-silvestre/">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2022 Edwin Silvestre</p>
    </div>
  );
}

export default Footer;
