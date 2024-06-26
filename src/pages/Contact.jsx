import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import ContactUs from "../components/ContactUs";

const Contact = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-body-not-home">
        <div className="faq-body">
          <ContactUs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
