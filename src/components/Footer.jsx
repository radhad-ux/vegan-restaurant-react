import React from "react";
import facebook from "../assets/images/footericons/facebook.png";
import linkedin from "../assets/images/footericons/linkedin.png";
import twitter from "../assets/images/footericons/twitter.png";

export default function Footer() {
  return (
    <div className="footer_links">
      <div className="social_media">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src={facebook} className="footer_image" alt="github_icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/radhadoreswamy/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} className="footer_image" alt="linkedin" />
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <img src={twitter} className="footer_image" alt="linkedin" />
        </a>
      </div>
      <div className="copy_right">
        <p> © 2022 @ Radha Doreswamy</p>
      </div>
    </div>
  );
}
