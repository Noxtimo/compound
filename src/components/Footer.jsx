import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <footer>
      <p>
        © Copyrights <span>{new Date().getFullYear()}</span> By Noxtimo. All
        rights reserved.
      </p>
      <div className="social-media">
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
        <Typography
          href="https://www.linkedin.com/in/yourprofile "
          component="a"
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
        <Typography
          href="mailto:youremail@example.com "
          component="a"
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
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </Typography>
        <Typography
          href="https://codepen.io/ "
          component="a"
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
          <FontAwesomeIcon icon={faCodepen} size="2x" />
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
