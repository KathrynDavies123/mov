import "../../App.css";
import "./FooterBar.css";
import { Link } from "react-router-dom";

// IMAGES IMPORT
import LogoInstagram from "../../Images/LogoInstagram.svg";
import LogoFacebook from "../../Images/LogoFacebook.svg";

const FooterBar = () => {
  return (
    <div className="FooterBar-Container">
      <div className="Footerbar-h1-Container">
        <Link to="/" className="Footerbar-Link">
          <h1>
            <span>.</span>MOV
          </h1>
        </Link>
      </div>

      <div className="FooterBar-p-Container">
        <p>Imprint</p>
      </div>

      <div className="FooterBar-SocialMedia-Container">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img
            src={LogoInstagram}
            alt="Logo Instagram"
            className="FooterBar-SocialMedia-Img"
          />
        </a>
        <a href="https://de-de.facebook.com/" target="_blank" rel="noreferrer">
          <img
            src={LogoFacebook}
            alt="Logo Facebook"
            className="FooterBar-SocialMedia-Img"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterBar;
