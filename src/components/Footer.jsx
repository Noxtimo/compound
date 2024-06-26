import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <p>
        © Copyrights <span>{new Date().getFullYear()}</span> By Noxtimo. All
        rights reserved.
      </p>
      <div className="social-media">
        <a
          href="https://github.com/noxtimo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="mailto:youremail@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>
        <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faCodepen} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
