import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <ul className="social-icons">
      <li>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          <span className="social-label">GitHub</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
          <span className="social-label">Instagram</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
          <span className="social-label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
          <span className="social-label">YouTube</span>
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
