import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/d_mandarliev/">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/mandarliev">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/dimitar.mandarliev.3/">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/in/dimitar-mandarliev-515273172/">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 mandarliev.com</p>
    </div>
  );
}

export default Footer;
