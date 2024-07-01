import React from "react";
import {
  faGithub,
  faLinkedin,
  faGoogle,
  faCodepen,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "@mui/material/Typography";
const SocialIcons = () => {
  return (
    <ul className="social-icons">
      <li>
        <Typography
          component="a"
          href="https://github.com/noxtimo"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Typography>
      </li>
      <li>
        <Typography
          component="a"
          href="https://github.com/noxtimo"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Typography>
      </li>
      <li>
        <Typography
          component="a"
          href="https://github.com/noxtimo"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Typography>
      </li>
      <li>
        <Typography
          component="a"
          href="https://github.com/noxtimo"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </Typography>
      </li>
    </ul>
  );
};

export default SocialIcons;
