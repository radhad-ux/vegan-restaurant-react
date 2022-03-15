import facebookURL from "../assets/images/footericons/facebook.png";
import linkedinURL from "../assets/images/footericons/linkedin.png";
import twitterURL from "../assets/images/footericons/twitter.png";

// DRY -1
// You can clearly refactor this by creating a contactItem component (no need to put it as a separatefile, create it here)
export default function Footer() {
  return (
    <div className="footer_links">
      <div className="social_media">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src={facebookURL} className="footer_image" alt="github_icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/radhadoreswamy/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinURL} className="footer_image" alt="linkedin" />
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <img src={twitterURL} className="footer_image" alt="linkedin" />
        </a>
      </div>
      <div className="copy_right">
        <p> © 2022 @ Radha Doreswamy</p>
      </div>
    </div>
  );
}
